const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000
const path = require('path')
const methodOverride =  require('method-override')
const moment = require('moment');

const index = require('./routes/index')
const questions = require('./routes/questions')
const pback = require('./routes/pback')

console.log(moment().format());

hbs.registerHelper('ifEquals', function(a, b, options) {
  if (a === b) {
    return options.fn(this);
  }
  return options.inverse(this);
});



app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'hbs')


app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index)
app.use('/questions', questions)
app.use('/pback', pback)

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})


module.exports = app
