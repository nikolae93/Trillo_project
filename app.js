var express = require("express");

var app= express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));

//Routes
app.get("/",(req,res)=>{
 res.render("./index.html");
});


// Server
app.listen(port,()=>{

})