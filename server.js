const express = require("express.io");
const app = express();
const Port = 3000;

console.log(`App is running on port:3000`)

app.http().io();
app.get('/', function (req, res) {
    res.render('index.ejs');
});
app.use(express.static(__dirname + '/public'))
app.io.route('ready', function (req) {
    req.io.join(req.data)
    app.io.room(req.data).broadcast('announce', {
        message: 'New Client has in the ' + req.data + 'room.'
    })

})
app.io.route('send', function (req) {
    // console.log("message", req)
    app.io.room(req.data.room).broadcast('message', {
        message: req.data.message,
        author: req.data.author
    });

})
app.listen(Port);
