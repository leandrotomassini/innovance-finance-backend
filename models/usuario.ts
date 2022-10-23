import { Schema, model } from 'mongoose';

import { UsuarioInterface } from '../interfaces/usuario';


const UsuarioSchema = new Schema<UsuarioInterface>({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        default: 'USER_ROLE',
        emun: ['ADMIN_ROLE', 'USER_ROLE', 'INSTRUCTOR_ROLE', 'ALUMN_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
});

export const Usuario = model<UsuarioInterface>('Usuario', UsuarioSchema);