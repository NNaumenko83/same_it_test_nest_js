// import {
//   Column,
//   Model,
//   Table,
//   DataType,
//   HasOne,
//   ForeignKey,
// } from 'sequelize-typescript';
// import { User } from 'src/users/users.model';

// interface ProfileCreationAttrs {
//   readonly firstName: string;
//   readonly lastName: string;
//   readonly state: string;
// }

// @Table({ tableName: 'profiles' })
// export class Profile extends Model<Profile, ProfileCreationAttrs> {
//   @ForeignKey(() => User)
//   @Column({
//     type: DataType.INTEGER,
//     unique: true,
//     autoIncrement: true,
//     primaryKey: true,
//   })
//   id: number;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   firstName: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   lastName: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   state: string;

//   @HasOne(() => User)
//   user: User;
// }

import {
  Column,
  Model,
  Table,
  DataType,
  // ForeignKey,
  HasOne,
  // BelongsTo,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface ProfileCreationAttrs {
  // readonly firstName: string;
  // readonly lastName: string;
  // readonly state: string;
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

  // @ForeignKey(() => User)
  // @Column
  // userId: number;

  @HasOne(() => User, 'profileId')
  user: User;
}
