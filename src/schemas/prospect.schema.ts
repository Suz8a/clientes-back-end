import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProspectDocument = Prospect & Document;
export type Statuses = 'enviado' | 'autorizado' | 'rechazado';
@Schema()
export class Prospect {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  primerApellido: string;

  @Prop()
  segundoApellido?: string;

  @Prop({ required: true })
  calle: string;

  @Prop({ required: true })
  numero: string;

  @Prop({ required: true })
  colonia: string;

  @Prop({ required: true })
  codigoPostal: string;

  @Prop({ required: true })
  telefono: string;

  @Prop({ required: true })
  rfc: string;

  @Prop({ required: true })
  estatus: Statuses;

  @Prop()
  motivoRechazo: string;

  @Prop({ required: true })
  documentos: { nombre: string; documento: string }[];
}

export const ProspectSchema = SchemaFactory.createForClass(Prospect);
