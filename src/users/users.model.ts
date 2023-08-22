import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Model,
  Table,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Profile } from 'src/profiles/profiles.model';

interface UserCreationAttrs {
  readonly username: string;
  readonly email: string;
  readonly role: string;
}
@Table({ tableName: 'users', createdAt: false, updatedAt: false })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'nnv2006', description: "Ім'я користувача" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  username: string;

  @ApiProperty({
    example: 'example@example.com',
    description: 'Електронна пошта',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: 'user', description: 'Роль користувача' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: string;

  @ApiProperty({
    example: '2023-08-22T12:34:56Z',
    description: 'Дата створення',
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  dateCreate: Date;

  @ForeignKey(() => Profile)
  profileId: number;

  @BelongsTo(() => Profile, { onDelete: 'CASCADE' })
  profile: Profile;
}
