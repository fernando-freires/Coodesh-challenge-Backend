import { IsNotEmpty } from 'class-validator';

export class CreateLocationDTO {
  @IsNotEmpty()
  companyId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cep: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  neighborhood: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  UF: string;
}
