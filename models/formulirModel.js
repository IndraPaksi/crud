const mongoose = require('mongoose');

const formulirSchema = new mongoose.Schema({
    nama: {
        type:String,
        required:true,
    },
    TTL: {
        type: String,
        required:true,
    },
    usia:{
        type:Number,
        required:true,
    },
    jeniskelamin:{
        type:String,
        required:true,
    },
    alamat: {
        type:String,
        required:true,
    },
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
    hasil:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('formulirModel', formulirSchema);