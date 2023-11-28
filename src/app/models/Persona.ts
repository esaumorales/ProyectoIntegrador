import { Proyecto } from 'src/app/models/Proyecto';
export class Persona {
    id?: number;
    apeliido_pat?: string;
    apeliido_mat?: string;
    correo?: string;
    dni?: number;
    f_nacimiento?: Date;
    nombre?: string;
    telefono?: number;
    proyecto?:Proyecto;
}
