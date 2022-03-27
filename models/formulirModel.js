const mongoose = require('mongoose');

const formulirSchema = new mongoose.Schema({
    nama: {
        type:String,
        required:true,
    },
    suhu:{
        type:Number,
        required:true,
    },
    TTL: {
        type: Number
    },
    usia:{
        type:Number,
        required:true,
    },
    jeniskelamin:String,
    
    noktp:{
        type: Number,
        required:true,
    },
    alamat:{
        type:String,
        required:true,
    },
    nohp:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    keluhan:{
        type:Array
    },
    
    penyakit:{
        type:Array
    },
    hasil:{
        type:String,
        required:true,
    },  
    
});

module.exports = mongoose.model('formulirModel', formulirSchema);