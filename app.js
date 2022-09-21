const express = require("express");
const path = require ("path")
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./src/views/home.html"))
});

app.listen(process.env.PORT || 3000,() => (
    console.log("Servidor corriendo")))




