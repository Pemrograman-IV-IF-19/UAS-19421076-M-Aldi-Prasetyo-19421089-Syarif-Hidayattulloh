const router = require('express').Router()
const transaksiController = require('../controller/transaksiController')

router.post('/input', (req, res) => {
  transaksiController.inputTransaksi(req.body)
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    res.json(err)
  })
})
router.get('/getTransaksiByIdUser/:idUser', (req, res) => {
  transaksiController.getalltransaksi(req.params.idUser)
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    res.json(err)
  })
})
module.exports = router