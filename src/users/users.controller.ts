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
import { UpdateUserFields } from 'src/types/updateUserField';

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

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() fields: UpdateUserFields) {
    return this.usersService.updateUser(id, fields);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
