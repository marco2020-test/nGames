var { Schema, model } = require('mongoose');


const esquemaBitacoraValorizacion = new Schema({
    usuario: { type: String },
    numeroAtencion: { type: Number },
    fecha: { type: Date, default: Date.now },
    valorIsapre: { type: Number},
    valorBonificacion: { type: Number},
    valorSeguro: { type: Number }
});
module.exports = model('bitacoraValorizacion', esquemaBitacoraValorizacion, 'BitacoraValorizacion');
