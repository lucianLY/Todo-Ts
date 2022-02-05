import express, {Application} from 'express'
import bodyParse from 'body-parser'
import {readFile, writeFile} from './utils'
import { ITodoData } from '../src/js/typings'

const app: Application = express()
app.use(bodyParse.urlencoded({extended: true}))
app.use(bodyParse.json())
app.all('*',(req, res, next)=> {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-methods', 'GET,POST,PUT,DELETE')
  next()
})

app.get('/', function (req, res) {
  const todoList: string = readFile('todo.json') || '[]'
  res.send(todoList)
})

app.post('/toggle', function (req, res) {

})

app.post('/remove', function (req, res) {
  const id: number = parseInt(req.body.id)
  let todoList: ITodoData[] = JSON.parse(readFile('todo.json') || '[]')
  todoList = todoList.filter((todo: ITodoData) => todo.id !== id)
  writeFile('todo.json', todoList)

  res.send({
    status: 200,
    message: 'success'
  })
})

app.get('/add', function (req, res) {
  const id: number = parseInt(req.body.id)
  
})

app.listen(8080, function(){
  console.log('Express Welcome Server Listen 8080')
})