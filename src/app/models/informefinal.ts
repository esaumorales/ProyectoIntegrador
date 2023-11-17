import { Documento } from 'src/app/models/documento';
import { Coordinador } from './Coordinador';
import { Escu_prof } from './Escu_prof';


export class Informefinal {
  id?: number;
  participantes_estudiantes?: string;
  participantes_satisfaccion?: string;
  participantes_docente?: string;
  satisfaccion_docente?: string;
  beneficiarios?: string;
  cantidad_beneficiarios?: number;
  satisfaccion_beneficiarios?: string;
  descripcion?: string;
  Escue_Prof?: Escu_prof;
  coordinador?: Coordinador;
  documento?: Documento;

}
