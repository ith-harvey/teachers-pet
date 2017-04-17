var express = require('express')
var router = express.Router()
var db = require('../db/connection')
const moment = require('moment')

function timeSince(arrayOfData) {
  arrayOfData.forEach(dataObj => {
    dataObj.created_at = moment(dataObj.created_at).fromNow()
  })
}


router.get('/', (req,res,next) => {
  db('questions').select('*').then(questions => {
    timeSince(questions)
    db('piggy_backers').select('*').then(pbackers => {
      timeSince(pbackers)
      res.render('questions/index', {
        questions, pbackers})
    })

  })
})


router.get('/new', (req,res,next) => {
    res.render('questions/new')
  })

router.post('/', (req,res,next) => {
  let question = {
    owner_name: req.body.owner_name,
    title:  req.body.title,
    description: req.body.description,
    difficulty: req.body.difficulty
  }
  db('questions').insert(question).then( () => {
    res.redirect('/questions')
  }).catch((err) => {
        next(err)
  })
})

router.delete('/:id', (req,res,next) => {
  db('questions').where({id: req.params.id}).del().then( () => {
    db('piggy_backers').where({question_id: req.params.id}).del().then( () => {
    res.redirect('/questions')
    }).catch((err) => {
        next(err)
    })
  })
})

router.put('/:id', (req,res,next) => {
  let question = {
    owner_name: req.body.owner_name,
    title:  req.body.title,
    description: req.body.description,
    difficulty: req.body.difficulty
  }
  db('questions').where({id: req.params.id}).update(question).then( () => {
    res.redirect('/questions')
  }).catch((err) => {
      next(err)
  })
})

router.get('/:id', (req,res,next) => {
  db('questions').select('*').where({id: req.params.id}).first().then( question => {
    res.render('questions/edit.hbs', {
    question
    })
  }).catch((err) => {
        next(err)
  })
})

module.exports = router;
