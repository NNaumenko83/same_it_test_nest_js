// import {
//   Column,
//   Model,
//   Table,
//   DataType,
//   HasOne,
//   ForeignKey,
//   BelongsTo,
// } from 'sequelize-typescript';
// import { Profile } from 'src/profiles/profiles.model';

// interface UserCreationAttrs {
//   readonly username: string;
//   readonly email: string;

//   readonly role: string;
// }

// @Table({ tableName: 'users' })
// export class User extends Model<User, UserCreationAttrs> {
//   @Column({
//     type: DataType.INTEGER,
//     unique: true,
//     autoIncrement: true,
//     primaryKey: true,
//   })
//   id: number;

//   @Column({
//     type: DataType.STRING,
//     unique: true,
//     allowNull: false,
//   })
//   username: string;

//   @Column({
//     type: DataType.STRING,
//     unique: true,
//     allowNull: false,
//   })
//   email: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   role: string;

//   @HasOne(() => Profile)
//   profile: Profile;

//   @ForeignKey(() => Profile) // Додайте цей декоратор для зовнішнього ключа
//   profileId: number; // Це поле буде містити ідентифікатор профілю

//   @BelongsTo(() => Profile, 'profileId') // Додайте цей декоратор для визначення зв'язку
//   profile: Profile;
// }

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

  @ForeignKey(() => Profile)
  profileId: number;

  @BelongsTo(() => Profile, 'id')
  profile: Profile;
}
