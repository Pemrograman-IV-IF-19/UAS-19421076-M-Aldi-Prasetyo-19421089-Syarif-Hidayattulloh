const keranjangModel = require('../model/keranjangModel')
const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId

exports.inputKeranjang = (data) =>
new Promise(async (resolve, reject) => {
  keranjangModel.create(data)
  .then(() => {
    resolve({
      status: true,
      msg: 'berhasil input keranjang'
    })
  }).catch((err) => {
    reject({
      status: false,
      msg: 'terjadi kesalahan pada server'
    })
  })
})

exports.getAllKeranjang = (idUser) => 
new Promise(async (resolve, reject) => {
  keranjangModel.aggregate([
    {
      $match: { idUser: objectId(idUser) }
    },
    {
      $lookup:
      {
        from: "users",
        localField: "idUser",
        foreignField: "_id",
        as: "user"
      }
    },
    {
      $lookup:
      {
        from: "barangs",
        localField: "idBarang",
        foreignField: "_id",
        as: "barang"
      }
    },
    { $unwind: "$user" },
    { $unwind: "$barang" }
  ]).then((dataKeranjang) => {
    if (dataKeranjang.length > 0) {
      resolve({
        status: true,
        msg: 'Berhasil Memuat Keranjang',
        data: dataKeranjang
      })
    } else {
      reject({
        status: false,
        msg: "keranjang anda Kosong"
      })
    }
  }).catch((err) => {
    console.log(err)
    reject({
      status:false,
      msg: 'terjadi kesalahan pada server'
    })
  })
})

exports.getKeranjangbyID = (id) => 
new Promise(async (resolve, reject) => {
  keranjangModel.aggregate([
      {
        $match: { _id: objectId(id) }
      },
      {
        $lookup:
        {
          from: "users",
          localField: "idUser",
          foreignField: "_id",
          as: "user"
        }
      },
      {
        $lookup:
        {
          from: "barangs",
          localField: "idBarang",
          foreignField: "_id",
          as: "barang"
        }
      },
      { $unwind: "$user" },
      { $unwind: "$barang" }
  ]).then((dataKeranjang) => {
        if (dataKeranjang) {
            resolve({
                status: true,
                msg: "Berhasil Memuat Data",
                data: dataKeranjang
            })
        } else {
            reject({
                status: false,
                msg: "ID Tidak Ditemukan"
            })
        }
  }).catch((err) => {
    reject({
      status: false,
      msg: "Terjadi Kesalahan Pada Server"
    })
  })
})

exports.updatesKeranjang = (id, data) =>
new Promise(async (resolve, reject) => {
  keranjangModel.updateOne({
    _id: objectId(id)
  }, data)
  .then(() => {
    resolve({
      staus: true,
      msg: 'berhasil update keranjang'
    })
  }).catch((err) => {
    reject({
      status: false,
      msg: 'terjadi kesalahan pada server'
    })
  })
})

exports.deleteKeranjang = (id) =>
new Promise(async (resolve, reject) => {
  keranjangModel.deleteOne({
    _id: objectId(id)
  }).then(() => {
    resolve({
      staus: true,
      msg: 'berhasil delete keranjang'
    })
  }).catch((err) => {
    reject({
      status: false,
      msg: 'terjadi kesalahan pada server'
    })
  })
})