const express = require('express')
const app = express()
    // const path = require('path')
const router = express.Router()
const port = 3000

// app.set("view engine", "pug");
// app.set('views', './views');

// router.get("/", (req, res) => {
//   res.render("index");
// });

// app.use("/", router);

app.use('/', router)

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
        // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
})
router.get('/pyramid', (req, res) => {
    res.sendFile(__dirname + '/views/pyramid.html')
        // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
})
router.get('/investasi', (req, res) => {
    res.sendFile(__dirname + '/views/investasi.html')
        // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
})
app.use(express.static('public'));


app.use('*', (req, res) => {
    res.send('Error 404: Not Found!')
        // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
})
app.listen(port, () => console.log('Server is listening on port 3000!'))