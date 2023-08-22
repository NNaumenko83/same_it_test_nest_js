import { Column, Model, Table, DataType, HasOne } from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface ProfileCreationAttrs {
  readonly firstName: string;
  readonly lastName: string;
  readonly state: string;
}

@Table({ tableName: 'profiles', createdAt: false, updatedAt: false })
export class Profile extends Model<Profile, ProfileCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state: string;

  @HasOne(() => User, 'profileId')
  user: User;
}
