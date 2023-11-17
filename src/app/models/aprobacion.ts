import { Proyecto } from "./Proyecto";
import { autoridad } from "./autoridad";

export class aprobacion{
    id?: number;
    fecha?: Date;
    comentario?: string;
    autoridad?:autoridad;
    proyecto?:Proyecto;
}