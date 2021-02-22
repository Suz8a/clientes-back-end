import {
  IsString,
  IsArray,
  IsOptional,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { Statuses } from 'src/schemas/prospect.schema';

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
  telefono: string;

  @IsString()
  rfc: string;

  @IsString()
  motivoRechazo: string;

  @IsArray()
  @ValidateNested()
  documentos: DocumentoDto[];
}
