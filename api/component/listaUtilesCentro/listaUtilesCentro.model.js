'use strict';

const mongoose= require('mongoose');

let schema_listaUtil= mongoose.Schema({
    cod : {type: String, required: true},
    centroName : {type: String, required: true},
    nivel : {type: String, required: true},
    tipo_articulo : {type: String,required:true},
    cantidad : {type: Number,required: true},
    descripcion : {type: String, required: false}
});

module.exports=mongoose.model('ListaUtilesCentro', schema_listaUtil);