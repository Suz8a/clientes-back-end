import { IsString, IsArray, IsOptional, ValidateNested } from 'class-validator';

export class DocumentoDto {
  @IsString()
  nombre: string;

  @IsString()
  url: string;
}
export class CreateProspectDto {
  @IsString()
  nombre: string;

  @IsString()
  primerApellido: string;

  @IsOptional()
  @IsString()
  segundoApellido?: string;

  @IsString()
  calle: string;

  @IsString()
  numero: string;

  @IsString()
  colonia: string;

  @IsString()
  codigoPostal: string;

  @IsString()
  telefono: number;

  @IsString()
  rfc: string;

  @IsArray()
  @ValidateNested()
  documentos: DocumentoDto[];
}
