const userModel = require('../model/userModel')
const bCrypt = require('bcrypt')

exports.registrasiUser = (data) =>
    new Promise(async (resolve, reject) => {
        const salt = bCrypt.genSaltSync(10)
        const encript = bCrypt.hashSync(data.password, salt)
        Object.assign(data, {
            password: encript
        })
        userModel.findOne({
            userName: data.userName
        }).then(async (dataUser) => {
            if (dataUser) {
                console.log("Gagal")
                reject({
                    status: false,
                    msg: "Gagal registrasi, username sudah terdaftar"
                })
            } else {
                await userModel.create(data)
                .then(() => {
                    console.log("berhasil")
                    resolve({
                        status: true,
                        msg: "Berhasil registrasi"
                    });
                }).catch(err => {
                    reject({
                        status: false,
                        msg: "Gagal registrasi"
                    })
                })
            }
        })
    })

exports.loginUser = (data) =>
    new Promise(async (resolve, reject) => {
        userModel.findOne({
            userName: data.userName
        }).then(async (dataUser) => {
            if (dataUser) {
                if (await bCrypt.compare(data.password, dataUser.password)) {
                    resolve({
                        status: true,
                        msg: "Selamat datang di Aplikasi",
                        data: dataUser
                    })
                } else {
                    reject({
                        status: false,
                        msg: "Password anda salah"
                    })
                }
            } else {
                reject({
                    status: false,
                    msg: "Username Tidak Terdaftar"
                })
            }
        })
    })