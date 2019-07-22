var { Schema, model } = require('mongoose');

const esquemaCliente = new Schema({
  CLNU_IDCLIENTENATURAL: {type: Number},
  CLNU_TIPOIDENTIFICACION: {type: Number},
  CLVA_NUMIDENTIFICACION: {type: String},
  CLVA_DVIDENTIFICACION: {type: String},
  CLVA_NOMBRES: {type: String},
  CLVA_APEPATERNO: {type: String},
  CLVA_APEMATERNO: {type: String},
  CLDA_FECHANACIMIENTO: {type: String},
  CLVA_SEXO: {type: String},
  CLVA_ESTADO_CIVIL: {type: String},
  CLVA_ETNIA: {type: String},
  CLVA_ACTIVIDAD: {type: String},
  CLVA_DIRECCION: {type: String},
  CLVA_NOMBRE_PAIS: {type: String},
  CLVA_NOMBRE_REGION: {type: String},
  CLVA_TELEFONO_FIJO: {type: String},
  CLVA_CODIGO_COMUNA: {type: String},
  CLVA_COD_PREVISION: {type: String},
  CLVA_ID_PAIS: {type: String},
  created: { type: Date, default: Date.now }
});

module.exports = model('CachingCliente', esquemaCliente,'CachingCliente');
