import { Column, Model, Table, DataType } from 'sequelize-typescript';

interface ProfileCreationAttrs {
  readonly firstName: string;
  readonly lastName: string;
  readonly state: string;
}

@Table({ tableName: 'profiles' })
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
}
