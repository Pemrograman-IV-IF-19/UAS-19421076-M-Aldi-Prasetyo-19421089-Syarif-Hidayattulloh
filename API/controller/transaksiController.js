const transaksiModel = require('../model/TransaksiModel')
const keranjangModel = require('../model/keranjangModel')
const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId

exports.inputTransaksi = (data) => 
new Promise(async(resolve, reject) => {
  transaksiModel.create(data)
  .then(async() => {
    const {detailTransaksi} = data
    for(let i = 0; i < detailTransaksi.length; i++) {
      await keranjangModel.deleteOne({
        _id: objectId(detailTransaksi[i]._id),
      })
    }resolve({
      status: true,
      msg: 'transaksi Berhasil',
    })
  }).catch((err) => {
    reject({
      status: false,
      msg: 'terjadi kesalahan'
    })
  })
})

exports.getalltransaksi = (idUser) => 
new Promise(async (resolve, reject) => {
    transaksiModel.aggregate(
      [{
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
     { $unwind: "$user" }
    ]
    )
    .then((data) => {
        if (data.length > 0) {
            resolve({
                status: true,
                msg: "Berhasil Memuat Data",
                data: data
            })
        } else {
            reject({
                status: false,
                msg: "Data tidak ada"
            })
        }
    }).catch((err) => {
        reject({
            status: false,
            msg: "Terjadi Kesalahan Pada Server"
        })
    })
})