import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get()
  getAll(@Query('role') role: string) {
    return this.usersService.getAllUsers(role);
  }

  @Patch(':id') // Вказуємо параметр :id для ідентифікації користувача
  async updateUser(@Param('id') id: number, @Body() fields) {
    return this.usersService.updateUser(id, fields);
  }
}
