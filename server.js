const express = require('express');

const app = express();
app.set('view engine', 'ejs');


// route homepage
app.get("/", function (reqt, res) {
    res.render("homepage")
});


// route lainnya

// nyalakan servernua
app.listen(3000, function () {
    console.log('Server berjalan diport 3000');
});
