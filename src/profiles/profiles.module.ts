import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { Profile } from './profiles.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';

@Module({
  providers: [ProfilesService],
  controllers: [ProfilesController],
  imports: [SequelizeModule.forFeature([Profile, User])],
})
export class ProfilesModule {}
