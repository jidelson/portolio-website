const express = require('express');
const app = express();

// set port
const port = process.env.PORT || 8080

app.use(express.static(__dirname));

// routes

app.get("/", function(req, res) {
    res.render("index");
})

app.listen(port, function(){
    console.log("app running")
})