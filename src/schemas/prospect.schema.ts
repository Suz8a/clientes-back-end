import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProspectDocument = Prospect & Document;
export type Statuses = 'enviado' | 'autorizado' | 'rechazado';
@Schema()
export class Prospect {
  @Prop()
  nombre: string;
  @Prop()
  primerApellido: string;
  @Prop()
  segundoApellido?: string;
  @Prop()
  calle: string;
  @Prop()
  numero: number;
  @Prop()
  colonia: string;
  @Prop()
  codigoPostal: number;
  @Prop()
  telefono: number;
  @Prop()
  rfc: string;
  @Prop()
  estatus: Statuses;
  @Prop()
  documentos: { nombre: string; documento: string }[];
}

export const ProspectSchema = SchemaFactory.createForClass(Prospect);
