import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { RegexHelper } from '../../../helpers/regex.helper';
import { MessagesHelper } from '../../../helpers/messages.helper';

export class CreateCompanyDTO {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  website: string;

  @IsNotEmpty()
  @Matches(RegexHelper.cnpj, {
    message: MessagesHelper.VALID_CNPJ,
  })
  cnpj: string;
}
