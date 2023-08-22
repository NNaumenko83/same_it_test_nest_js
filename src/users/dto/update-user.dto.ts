import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: 'nnv2006', description: "Ім'я користувача" })
  readonly username?: string;

  @ApiProperty({ example: 'test@com.ua', description: 'Пошта' })
  readonly email?: string;

  @ApiProperty({ example: 'user', description: 'Роль користувача' })
  readonly role?: string;

  @ApiProperty({ example: 'Mykola', description: "Ім'я" })
  readonly firstName?: string;

  @ApiProperty({ example: 'Naumenko', description: 'Прізвище' })
  readonly lastName?: string;

  @ApiProperty({ example: 'male', description: 'Стать користувача' })
  readonly state?: string;
}
