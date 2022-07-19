const router = require('express').Router()
const keranjangController = require('../controller/keranjangController')

router.post('/input-keranjang', (req, res) => {
  keranjangController.inputKeranjang(req.body)
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    res.json(err)
  })
})

router.get('/get-all-keranjang/:idUser', (req, res) => {
  keranjangController.getAllKeranjang(req.params.idUser)
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    res.json(err)
  })
})

router.get('/get-keranjangbyId/:id', (req, res) => {
  keranjangController.getKeranjangbyID(req.params.id)
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    res.json(err)
  })
})

router.put('/update-keranjang/:id', (req, res) => {
  keranjangController.updatesKeranjang(req.params.id, req.body)
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    res.json(err)
  })
})

router.delete('/delete-keranjang/:id', (req, res) => {
  keranjangController.deleteKeranjang(req.params.id)
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    res.json(err)
  })
})
module.exports = router