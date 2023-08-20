import { Column, Model, Table, DataType } from 'sequelize-typescript';

interface UserCreationAttrs {
  readonly username: string;
  readonly email: string;
  // readonly firstName: string;
  // readonly lastName: string;
  readonly role: string;
  // readonly state: string;
}

@Table({ tableName: 'users' })
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

  // @Column({
  //   type: DataType.STRING,
  //   allowNull: false,
  // })
  // firstName: string;

  // @Column({
  //   type: DataType.STRING,
  //   allowNull: false,
  // })
  // lastName: string;

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

  // @Column({
  //   type: DataType.STRING,
  //   allowNull: false,
  // })
  // state: string;
}
