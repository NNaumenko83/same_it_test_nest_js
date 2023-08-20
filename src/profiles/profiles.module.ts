import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { Profile } from './profiles.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [ProfilesService],
  controllers: [ProfilesController],
  imports: [SequelizeModule.forFeature([Profile])],
})
export class ProfilesModule {}
