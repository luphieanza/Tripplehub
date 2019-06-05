const router = require('express').Router();
const db = require('../db').destination_list

router.get('/completion/:query', function(req, res){
    let query = req.params.query.toLowerCase()
    let length = query.length
    db.find({}, function(error, list_kota){
        if(error){
            res.send(error)
            return
        }
        let daftar_kota = []
        list_kota.forEach(record => {
            let city_name = record.kota
            let from = city_name.toLowerCase().indexOf(query)

            if(from == -1){
                return
            }
            daftar_kota.push({kota: city_name,
                              from: from,
                              len: length})
        })
        res.json(daftar_kota)
    })
})

module.exports = router