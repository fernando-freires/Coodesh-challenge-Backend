import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { RegexHelper } from '../../../helpers/regex.helper';
import { MessagesHelper } from 'src/helpers/messages.helper';

export class UpdateCompanyDTO {
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
