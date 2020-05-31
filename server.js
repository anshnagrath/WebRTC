const express = require('express');
const app = express();
console.log("Server Started")
app.get('/', function (req, res) {
    res.render('index.ejs');
});
app.use(express.static(__dirname + '/public'))

app.listen(3000);
