import { Parametros } from "./Parametros";
import { Ubigeo } from "./Ubigeo";

export class Documento {
    id?: number;
    nombre?: string;
    institucion?: string;
    nombre_autoridad?: string;
    fecha_ini?: Date;
    fecha_fin?: Date;
    descripcion?: string;
    estado?: string;
    parametros?: Parametros;
    ubigeo?: Ubigeo;
}