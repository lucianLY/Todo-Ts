import express, {Application} from 'express'
import bodyParse from 'body-parser'

const app: Application = express()
app.use(bodyParse.urlencoded({extended: true}))
app.use(bodyParse.json())
app.all('*',(req, res, next)=> {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-methods', 'GET,POST,PUT,DELETE')
  next()
})

app.get('/todolist', function (req, res) {

})

app.post('/toggle', function (req, res) {

})

app.get('/remove/:id', function (req, res) {

})

app.get('/add/:id', function (req, res) {

})

app.listen(8080, function(){
  console.log('Express Welcome Server Listen 8080')
})