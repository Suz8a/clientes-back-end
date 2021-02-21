export interface Prospect {
  nombre: string;
  primerApellido: string;
  segundoApellido?: string;
  calle: string;
  numero: string;
  colonia: string;
  codigoPostal: string;
  telefono: string;
  rfc: string;
  estatus: string;
  documentos: { nombre: string; documento: string }[];
}
