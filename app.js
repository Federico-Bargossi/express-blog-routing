const express = require('express');
const app = express();
const port = 3000;
const posts = require('./data');
const router = require('./routers/posts')
app.use("/bacheca" , router);
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.json({
        message: "Server del mio blog"
    })
})



app.listen(port, () => {
    console.log("il server è in ascolto");
})