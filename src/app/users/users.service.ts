import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-users.dto';
import { UpdateUserDTO } from './dto/update-users.dto';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async store(data: CreateUserDTO) {
    const user = await this.usersRepository.create(data);
    return await this.usersRepository.save(user);
  }

  async findAll() {
    return await this.usersRepository.find({
      select: ['id', 'name', 'email'],
    });
  }

  async findOne(id: string) {
    try {
      return await this.usersRepository.findOneOrFail({ where: { id: id } });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOneByEmail(email: string) {
    const user = await this.usersRepository.findOneOrFail({ where: { email } });
    return user;
  }

  async update(id: string, data: UpdateUserDTO) {
    const user = await this.usersRepository.findOne({ where: { id: id } });
    this.usersRepository.merge(user, data);
    return await this.usersRepository.save(user);
  }

  async destroy(id: string) {
    await this.usersRepository.findOne({ where: { id: id } });
    this.usersRepository.softDelete(id);
  }
}
