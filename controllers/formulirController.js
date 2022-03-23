const req = require('express/lib/request');
const res = require('express/lib/response');
const { model } = require('../database/conn');
const Formulir = require('../models/formulirModel');

module.exports = {
    index:async(req, res)=>
    {
        try{
            const formulir = await Formulir.find();
            res.render('formulir/index', {formulir, title:'Halaman Formulir'})
        } catch (error){
            req.flash('error', `${error.message}`);
            res.redirect('/formulir');
        }
    },
    store:async(req, res)=>{
        try {
            const {nama, TTL, usia, jeniskelamin, noktp, alamat, nohp, email, hasil} = req.body;
             
            await Formulir.create({nama, TTL, usia, jeniskelamin, noktp, alamat, nohp, email,hasil});

            req.flash('success', 'Data berhasil ditambahkan');
            res.redirect('/formulir');
        } catch (error) {
            req.flash('error', `${error.message}`);
            res.redirect('/formulir');
            
        }
    },
    update:async(req, res)=>{
        try {
            const { id, nama, TTL, usia, jeniskelamin, noktp, alamat, nohp, email, hasil} = req.body;
            let formulir = await Formulir.findOne({_id: id});
            formulir.nama = nama;
            formulir.TTL = TTL;
            formulir.usia = usia;
            formulir.jeniskelamin = jeniskelamin;
            formulir.noktp = noktp;
            formulir.alamat = alamat;
            formulir.nohp = nohp;
            formulir.email = email;
            formulir.hasil = hasil;
            await formulir.save();

            req.flash('success', 'Data berhasil di update');
            res.redirect('/formulir');
        } catch (error) {
            req.flash('error', `${error.message}`);
            res.redirect('/formulir');

            
        }
   },
   delete: async(req, res)=> {
       try {
           const{id}= req.params;
           const formulir = await Formulir.findOne({_id: id});
           await formulir.remove();

           req.flash('success', 'Data berhasil Di Hapus');
           res.redirect('/formulir');
       } catch (error) {
           req.flash('error',`${error.message}`);
           res.redirect('/formulir');
           }
           
       }
   }


