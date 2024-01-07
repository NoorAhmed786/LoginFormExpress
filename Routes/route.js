//  Router
const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('Login',{
        title:"LoginPage"

    });
});

router.get('/SignUp',(req,res)=>{
    res.render('SignUp',{
        title:"SignUpPage"

    });
});
router.get('/Home',(req,res)=>{
    res.render('Home',{
        title:"HomePage"

    });
});
router.get('/Great',(req,res)=>{
    res.render('Great',{
        title:"GreatPage"

    });
});
module.exports = router