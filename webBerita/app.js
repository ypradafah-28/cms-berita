const express = require('express');
const app = express();
const port = 3000;

// Set EJS sebagai mesin pencari tampilan
app.set('view engine', 'ejs');

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.send('<h1>Halo! CMS Berita sedang dalam proses pembangunan.</h1>');
});

app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}`);
});