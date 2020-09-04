var express=require('express');
var app=express();
var path=require('path')

app.use(express.static(path.join(__dirname+'/public')));

//view engine setup
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

app.get('/:id',function(req,res){
    console.log(req.params)
    res.render("evaluation",{
        data:"1234"
    });    
})

app.get('/:id/:login',function(req,res){
    console.log(req.params)
    res.render("login",{
        data:"1234"
    });    
})

app.get('/:id/:login/:dashboard',function(req,res){
    console.log(req.params)
    res.render("dashboard",{
        data:"1234"
    });    
})

app.get('/:id/:login/:dashboard/:subjects',function(req,res){
    console.log(req.params)
    res.render("subjects",{
        data:"abc"
    });    
})

app.listen(3000,function(){
    console.log("Port running on 3000");
})

