import { UsuarioInterface } from './usuario';

export interface ArticuloInterface {
    titulo:           string;
    descripcionCorta: string;
    portada:          string;
    fecha:          string;
    usuario:          UsuarioInterface;
    estado:           boolean;
    terminado:           boolean;
    contenido:        string;
}
