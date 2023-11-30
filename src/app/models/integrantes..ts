import { Curso_Arti_Estu } from './Curso_arti_estu';
import { Cursoarticulado } from './cursoaarticu';
export class integrantes{
  id?: number;
  cursoarticulado?: Cursoarticulado;
  integrantes?: integrantes;
  curso_arti_estu?: Curso_Arti_Estu;
}
