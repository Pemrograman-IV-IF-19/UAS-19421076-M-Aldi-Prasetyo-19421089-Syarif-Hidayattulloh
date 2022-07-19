const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId

const barangModel = mongoose.Schema ({
    namaBarang: {
        type: String
    },
    harga: {
        type: Number
    },
    kategori: {
        type: objectId
    },
    gambar: {
        type: String
    }
})

module.exports = mongoose.model('barang', barangModel)