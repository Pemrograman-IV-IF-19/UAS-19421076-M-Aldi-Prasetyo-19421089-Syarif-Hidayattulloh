const router = require('express').Router()
const barangController = require('../controller/barangController')

const utilApp = require('../utils/utils_apps')
const multer = require('multer')
const uploadFile = multer({
  storage: utilApp.uploadFile
}).single("gambar")

// Input
router.post('/input-barang', uploadFile, (req, res) => {
    if(req.file == undefined){
        res.json({
            status: false,
            msg: "File tidak boleh kosong"
        })
    } else {
        Object.assign(req.body, {
            gambar: req.file.filename
        })
    }
    barangController.inputBarang(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
// Update
// 1
router.put('/update-barang/:id', (req, res) => {
    barangController.updateBarang(req.params.id, req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
// 2
router.put('/update-gambar/:id', uploadFile, (req, res) => {
    if(req.file == undefined){
        res.json({
            status: false,
            msg: "File tidak boleh kosong"
        })
    } else {
        Object.assign(req.body, {
            gambar: req.file.filename
        })
    }barangController.updateBaranggambar(req.params.id, req.body.gambar)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
// Get All
router.get('/get-barang', (req, res) => {
    barangController.getallBarang()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
// Get ById
router.get('/get-data-barang/:id', (req, res) => {
    barangController.getBarangbyID(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
// Delete
router. delete('/delete-data-barang/:id', (req, res) => {
    barangController.deleteBarang(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
module.exports = router