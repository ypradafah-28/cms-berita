const mongoose = require("mongoose")

const beritaSkema = new mongoose.Schema({
    judul:{
        type:String,
        required:true
    },
    isi:{
        type:String,
        required:true
    },
    penulis: String,
    tanggal:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Berita',beritaSkema)