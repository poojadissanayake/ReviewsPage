const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const { title } = require('process');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//configuring express to use body-parser
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.render('index', { title: 'Ice cream Review' });
});

app.post('/feedback', (req, res, next) => {
    let name = req.body.name;
    let favourite = req.body.icecreamtype;
    let rating = req.body.rating;
    let feedback = req.body.feedback;

    res.render('thankyou', { title: 'Ice Cream Review', name, favourite, rating, feedback });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
