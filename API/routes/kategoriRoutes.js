const router = require('express').Router()
const kategoriController = require('../controller/kategoriController')

router.post('/input-kategori', (req, res) => {
    kategoriController.inputKategori(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

router.get('/Get-Kategori', (req, res) => {
    kategoriController.getAllKategori()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

router.get('/Get-data-kategori/:namaKategori', (req, res) => {
    kategoriController.getKategori(req.params.namaKategori)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

router.put('/Update-Kategori/:id', (req, res) => {
    kategoriController.UpdateKategori(req.params.id, req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

router.delete('/delete-kategori/:id', (req, res) => {
    kategoriController.deleteKategori(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})

module.exports = router