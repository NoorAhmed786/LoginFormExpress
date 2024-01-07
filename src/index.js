 const express = require('express');
 const app = express();
 const path = require( 'path');
 const hbs = require('hbs');
const collection = require('./mongodb');

// import a routes
const mainRouter =require('../Routes/route')
app.use(mainRouter);

//  connect to mongodb
app.use(express.json());
app.set('view engine', 'hbs');
// const path = require('path');
// help us to get the mongodb data
app.use(express.urlencoded({extended:false}))

// use for applying css
app.use (express.static('public'));
// to call the file 
app.get('/Login', (req, res) => {
    res.render('Login');
});

app.get('/SignUp' , (req, res)=>{
    res.render('SignUp');
})
// Example logout route
app.get('/logout', (req, res) => {
    // Perform logout actions, e.g., clear session
    // req.logout(); // This is just an example, the actual method depends on your authentication strategy
    res.redirect('/'); // Redirect to the home page or wherever you want after logout
  });
  
// fetch data 
app.post('/SignUp', async (req,res)=>{
    const Data ={
        name:req.body.name,
        password:req.body.password
    }
    await collection.insertMany([Data])

    res.render('Great')
})
//  for authentication login
app.post('/Login', async (req,res)=>{
   
    try {
        const check =await collection.findOne({name:req.body.name})

        if(check.password === req.body.password){
            res.render('Home')
        }
        else{
            res.send("wrong password")
        }
    } catch (error) {
        res.send("wrong details")
    }

   
})
// start the port
 app.listen(3000 , ()=>{
    console.log('hello express');
 })