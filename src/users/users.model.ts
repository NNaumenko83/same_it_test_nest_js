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
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  dateCreate: Date;

  @ForeignKey(() => Profile)
  profileId: number;

  @BelongsTo(() => Profile)
  profile: Profile;
}
