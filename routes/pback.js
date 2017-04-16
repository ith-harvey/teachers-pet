var express = require('express')
var router = express.Router()
var db = require('../db/connection')



router.post('/:id', (req,res,next) => {
 let pbackDetails = {
   question_id: req.params.id,
   owner_name: req.body.name
 }
  db('piggy_backers').insert(pbackDetails).then( () => {
        res.redirect('/questions')
  })
})

router.delete('/:id', (req,res,next) => {
  console.log(req.params.id);
  db('piggy_backers').where({id: req.params.id}).del().then( () => {
  res.redirect('/questions')
  })
})




module.exports = router
