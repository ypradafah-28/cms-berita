const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')
const Berita = require("./models/berita")


mongoose.connect("mongodb+srv://yogaph23_db_user:yogaph23@cms-berita.rogymrb.mongodb.net/?appName=cms-berita")
    .then(()=>console.log("Berhasil terhubung ke Cloud"))
    .catch(err => console.error("error koneksi:" , err))

// Set EJS sebagai mesin pencari tampilan
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.send('<h1>Halo! CMS Berita sedang dalam proses pembangunan.</h1>');
});

//route halaman form tambah berita
app.get('/tambah',(req,res)=>{
    res.render('tambah-berita')
})

//route proses simpan berita
app.post('/tambah',async (req,res)=>{
    try{
        const beritaBaru = new Berita({
            judul:req.body.judul,
            isi:req.body.isi
        })
        await beritaBaru.save()
        res.send('Berita berhasil disimpan <a href="/tambah"> tambah lagi</a>')
    } catch (error){
        res.status(500).send("gagal simpan berita")
    }
})
app.listen(process.env.PORT,()=> console.log('server running....'))

app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}`);
});