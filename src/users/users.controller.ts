import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Користувачі')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Створення користувача' })
  @ApiResponse({ status: 201, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Отримання всіх коритувачів' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll(@Query('role') role: string) {
    return this.usersService.getAllUsers(role);
  }

  @ApiOperation({ summary: 'Оновлення користувача' })
  @ApiResponse({ status: 200, type: [User] })
  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() fields: UpdateUserDto) {
    return this.usersService.updateUser(id, fields);
  }

  @ApiOperation({ summary: 'Видалення користувача' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
