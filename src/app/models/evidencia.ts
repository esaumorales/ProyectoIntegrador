import { Roles } from 'src/app/models/Roles';
import { Integrantes } from './integrantes.';
import { Parametros } from './Parametros';
import { Proyecto } from './Proyecto';

export class Evidencia{
  id?: number;
  porcentaje?: number;
  parametros?: Parametros;
  integrantes?: Integrantes;
  roles?: Roles;
  proyecto?:Proyecto;

}
