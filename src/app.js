// // /install npm i yargs
// const yargs = require('yargs')

// /install npm i express
const express = require('express')
const app = express()
const port = process.env.PORT || 2000

// /install npm i path
const path = require('path')
const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))

// /hbs
app.set('view engine', 'hbs');
// vvvvvvvvvvvvvvvvvvvvvvvvvv
const viewsPath =path.join(__dirname,'../templates/views')
app.set('views',viewsPath)
// vvvvvvvvvvvvvvvvvvvvvvvvvv
const hbs = require('hbs')
const partialsPath =path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)
// vvvvvvvvvvvvvvvvvvvvvvvvvv

app.get('',(req,res)=>{
    res.render('index',{
        tittle:'Home Page'
    })
})

app.get('/card',(req,res)=>{
    res.render('cards',{
        tittle:'Home Page'
    })
})


















/////////////////////////////////////////////////////////////
/////is for error
app.get('*',(req,res)=>{
    res.render('notfound',{
        title:404
    })
})
/////////////////////////////////////////////////////////////
/////is static 
app.listen(port, ()=>{
    console.log('server is running', port);
})