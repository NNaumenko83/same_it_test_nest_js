import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';

import { CreateUserDto } from './dto/create-user.dto';
import { Profile } from 'src/profiles/profiles.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    @InjectModel(Profile) private profileRepository: typeof Profile,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const { email, username, firstName, lastName, role, state } = createUserDto;

    const user = await this.userRepository.create({
      email,
      username,
      role,
    });

    const profile = await this.profileRepository.create({
      firstName,
      lastName,
      state,
      userId: user.id,
    });

    user.profile = profile;

    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
