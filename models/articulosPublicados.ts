// import { Schema, model } from 'mongoose';
// import { ArticuloInterface } from '../interfaces/articulo';


// const ArticulosPublicadosSchema = new Schema<ArticuloInterface>({
//     usuario: {
//         required: true,
//         type: Schema.Types.ObjectId,
//         ref: 'Usuario'
//     },
//     articulo: {
//         required: true,
//         type: Schema.Types.ObjectId,
//         ref: 'Articulo'
//     },
//     subscripcion: {
//         required: true,
//         type: Schema.Types.ObjectId,
//         ref: 'Subscripcion'
//     },
// });

// export const Articulo = model<ArticuloInterface>('Articulo', ArticulosPublicadosSchema);