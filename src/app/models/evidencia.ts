import { integrantes } from './integrantes.';

import { Escu_prof } from './Escu_prof';
import { Parametros } from './Parametros';
import { Proyecto } from './Proyecto';
import { Tip_proyec } from './Tip_proyect';

export class Evidencia{
  id?: number;
  porcentaje?: number;
  proyecto?: Proyecto;
  parametros?: Parametros;
  tip_Proyect?: Tip_proyec;
  escu_Prof?: Escu_prof;
  integrantes?: integrantes;
  evidencia?: Evidencia;
}
