import { IsNotEmpty } from 'class-validator';

export class UpdateLocationDTO {
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
