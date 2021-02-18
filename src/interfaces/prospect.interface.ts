export interface Prospect {
  nombre: string;
  primerApellido: string;
  segundoApellido?: string;
  calle: string;
  numero: number;
  colonia: string;
  codigoPostal: number;
  telefono: number;
  rfc: string;
  estatus: string;
  documentos: { nombre: string; documento: string }[];
}
