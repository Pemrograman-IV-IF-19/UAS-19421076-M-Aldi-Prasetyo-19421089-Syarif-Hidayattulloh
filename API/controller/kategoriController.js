const modelKategori = require('../model/kategoriModel')
const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId
//input Kategori
exports.inputKategori = (data) =>
new Promise(async (resolve, reject) => {
    await modelKategori.create(data)
    .then(() => {
        resolve({
            status: true,
            msg: "Berhasil Membuat Kategori"
        })
    }).catch((err) => {
        reject({
            status: false,
            msg: "Terjadi Kesalahan di Server"
        })
    })
})
// Get All Data Kategori
exports.getAllKategori = () =>
new Promise(async (resolve, reject) => {
    modelKategori.find({})
    .then((dataKategori) => {
        if (dataKategori.length > 0) {
            resolve({
                status: true,
                msg: "Berhasil Memuat Data",
                data: dataKategori
            })
        } else {
            reject({
                status: false,
                msg: "Tidak Ada Data Kategori",
            })
        }
    }).catch((err) => {
        reject({
            status: false,
            msg: "terjadi Kesalahan pada server"
        })
    })
})
// Get One Kategori
exports.getKategori = (name) =>
new Promise(async (resolve, reject) => {
    modelKategori.findOne({
        namaKategori: name
    }).then((dataKategori) => {
        if (dataKategori) {
            resolve({
                status: true,
                msg: "Berhasil Memuat Data",
                data: dataKategori
            })
        } else {
            reject({
                status: false,
                msg: "Tidak Ada Data Kategori " + name
            })
        }
    }).catch((err) => {
        reject({
            status: false,
            msg: "terjadi Kesalahan pada server"
        })
    })
})
// Update Data By ID
exports.UpdateKategori = (id, data) => 
new Promise(async (resolve, reject) => {
    modelKategori.updateOne({
        _id: objectId(id)
    }, data)
    .then(() => {
        resolve({
            status: true,
            msg: "Berhasil Update Kategori"
        })
    }).catch((err) => {
        reject({
            status: false,
            msg: "Terjadi Kesalahan di Server"
        })
    })
})
// Delete Data Kategori by ID
exports.deleteKategori = (id) => 
new Promise(async (resolve, reject) => {
    modelKategori.deleteOne({
        _id: objectId(id)
    }).then(() => {
        resolve({
            status: true,
            msg: "Berhasil Hapus Kategori"
        })
    }).catch((err) => {
        reject({
            status: false,
            msg: "Terjadi Kesalahan di Server"
        })
    })
})