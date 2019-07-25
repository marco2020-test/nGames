var { Schema, model } = require('mongoose');


const esquemaEmpresa = new Schema({
    cljuIdclientejuridico: { type: Number },
    cljuRazonsocial: { type: String }
});
module.exports = model('CachingEmpresa', esquemaEmpresa, 'CachingEmpresa');
