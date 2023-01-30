import { Injectable } from '@nestjs/common';
import { UsersEntity } from 'src/app/users/users.entity';
import { UsersService } from 'src/app/users/users.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtservice: JwtService,
  ) {}

  async login(user) {
    const payload = { sub: user.id, email: user.email, name: user.name };

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      token: this.jwtservice.sign(payload),
    };
  }

  async validateUser(email: string, password: string) {
    let user: UsersEntity;
    try {
      user = await this.usersService.findOneByEmail(email);
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }
}
