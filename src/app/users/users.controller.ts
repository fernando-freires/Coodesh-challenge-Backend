import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-users.dto';
import { UpdateUserDTO } from './dto/update-users.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async createNewUser(@Body() body: CreateUserDTO) {
    return await this.usersService.store(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async listAllUsers() {
    return await this.usersService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async showUserById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.usersService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateUserDTO,
  ) {
    return await this.usersService.update(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.usersService.destroy(id);
  }
}
