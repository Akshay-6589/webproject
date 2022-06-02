const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

// console.log( path.join(__dirname,"../public"));

const static_path= path.join(__dirname,"../public");
const views_path= path.join(__dirname,"../template/views");
const partials_path= path.join(__dirname,"../template/partials");


app.set("view engine", "hbs");
app.set("views", views_path);
app.use(express.static(static_path));


hbs.registerPartials(partials_path);

app.get("/",(req, res)=>{
    res.render('index');
})

app.get("/about",(req, res)=>{
    res.render("about");
})

app.get("/weather",(req, res)=>{
    res.render("weather");
})

app.get("*",(req, res)=>{
    res.render("404error",{
        errorMsg : "OOps ! Page not found."
    });
})

app.listen(port, ()=>{
    console.log(`listening to port no. ${port}`);
})
