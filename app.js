// ADDING Modules
const fs = require('fs');
const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const file = 'data-scraper/data.json';
// Specify port
const port = 80;

// EXPRESS SPECIFIC STUFF

app.use('/static', express.static('static')); // For serving static files

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded());
// app.use(bodyParser.urlencoded());


// TEMPLATE ENGINE SPECIFIC STUFF
app.set('view engine', 'jsx'); // set the view engine as jsx
app.set('views', path.join(__dirname,'/views')); // set the views directory
app.engine('jsx', require('express-react-views').createEngine());

// Reading json data
let rawdata = fs.readFileSync(file);
const data = JSON.parse(rawdata);
let colleges = [];
let reviews = [];
for(var i=0;i<data.length;i++){
    colleges[i] = data[i].College;
    reviews[i] = data[i].Reviews;

}

// ENDPOINTS
app.get('/', (req,res)=>{
    const params = {title: 'College Reviews',colleges: colleges,reviews: reviews}
    res.status(200).render('index',params);
});

app.get('/review', (req,res)=>{
    const params = {title: 'College Reviews'}
    res.status(200).render('reviews',params);
});


// app.post('/',(req,res)=>{
//     const mydata = new req.body;
//     console.log(mydata);
// });

app.post('/review',(req,res)=>{
    console.log(req.body);
})


//START THE SERVER
app.listen(port,()=>{
    console.log(`The application is running on the port ${port}`);
    
});