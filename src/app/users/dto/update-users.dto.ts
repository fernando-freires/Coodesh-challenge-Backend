import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { RegexHelper } from '../../../helpers/regex.helper';

export class UpdateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
