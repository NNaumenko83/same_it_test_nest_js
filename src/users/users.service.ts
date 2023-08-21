import { Injectable, NotFoundException } from '@nestjs/common';
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
    });

    user.profile = profile;

    await user.update({
      profileId: profile.id,
    });

    return user;
  }

  async getAllUsers(role?: string) {
    const whereCondition: any = {};

    if (role) {
      whereCondition.role = role;
    }

    const users = await this.userRepository.findAll({
      include: [
        {
          model: Profile,
        },
      ],
      where: whereCondition,
    });
    return users;
  }

  async updateUser(id: number, fields) {
    const user = await this.userRepository.findByPk(id, { include: [Profile] });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await user.update(fields);
    await user.profile.update(fields);

    return user;
  }
}
