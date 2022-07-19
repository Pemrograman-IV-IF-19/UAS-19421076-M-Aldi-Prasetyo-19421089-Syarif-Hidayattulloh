const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')
const dbConfig = require('./config/DbConfig')

app.use(express.json({
    extended: true,
    limit: '20mb'
}))
app.use(express.urlencoded({
    extended: true,
    limit: '20mb'
}))

mongoose.connect(dbConfig.mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("connect mongodb");
}).catch(err => {
    console.log(err)
})

app.get("/", (req, res) => {
    res.json({
        msg: "selamat datang di API"
    })
})

app.use('/gambar-barang', express.static('public/images'))
app.use('/users', require('./routes/userRoutes'))
app.use('/kategori', require('./routes/kategoriRoutes'))
app.use('/barang', require('./routes/barangRoutes'))
app.use('/keranjang', require('./routes/keranjangRoutes'))
app.use('/transaksi', require('./routes/transaksi'))

app.listen(port, () => {
    console.log("server berjalan di port" + port);
})