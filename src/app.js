// /install npm 
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const news = require('./tools/news-api')

// /express port *
const app = express()
const port = process.env.PORT || 3000
// /*
// /for path
const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))
// /*
// /hbs
app.set('view engine', 'hbs');
// vvvvvvvvvvvvvvvvvvvvvvvvvv
const viewsPath =path.join(__dirname,'../templates/views')
app.set('views',viewsPath)
// vvvvvvvvvvvvvvvvvvvvvvvvvv
const partialsPath =path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)
// vvvvvvvvvvvvvvvvvvvvvvvvvv

app.get('',(req,res)=>{
    news((error,data)=>{
        // if (error) {
        //     return res.render('notfound',error)
        // }
        // return res.render('index',{data})
        res.render('index',{data})
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