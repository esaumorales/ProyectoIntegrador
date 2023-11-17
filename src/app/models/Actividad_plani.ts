import { Proyecto } from "./Proyecto";

export class Actividad_plani {
    id?: number;
    nombre_actividad?: string;
    fecha_inicio?: Date;
    fecha_fin?: Date;
    material_insumo?: string;
    cantidad?: number;
    unidad_media?: number;
    costo_unitario?: number;
    costo_parcial?: number;
    cuenta?: number;
    responsable?: string;
    proyecto?: Proyecto;
}