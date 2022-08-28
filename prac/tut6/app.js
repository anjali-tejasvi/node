const express =  require("express")
const path = require("path")
const app =  express();
const port =  80;
const fs = require('fs')


//For serving static files
app.use('/static', express.static('static'))
app.use(express.urlencoded())

//Set the template engine as pug
app.set('view engine', 'pug')

//Set the view directory
app.set('views', path.join(__dirname, 'views'))


//ENDPOINTS
app.get('/', (req,res)=>{
    const con = "This breed is very cute"
    const params = {'title': 'Pug is the best breed', "content": con}
    res.status(200).render('index.pug', params)
})

app.post('/',(req,res)=>{

    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}.
    More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted succesfully'}
    res.status(200).render('index.pug',params)
})

//Our pug endpoint
// app.get('/demo', (req, res) => {
//     res.render('demo', { title: 'Hey', message: 'Hello there!' })
//   })

// app.get("/", (req,res)=>{
//     res.send("<h3>This is my first Express App</h3>")
// });

app.listen(port, ()=>{
    console.log(`The application is running on port ${port}`)
})