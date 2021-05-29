const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port =  3000;

app.route("/")
.get((req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});