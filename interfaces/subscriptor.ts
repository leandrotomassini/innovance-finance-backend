import { UsuarioInterface } from './usuario';

export interface SubscriptorInterface {
    usuario: UsuarioInterface;
    vencimiento: string;
    estado: boolean;
}