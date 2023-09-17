const express = require('express');
const app = express();
const port = 3030;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
    {
        title: 'Eat out',
        budget: 150
     },
    {
        title: 'Rent',
        budget: 500
    },
    {
        title: 'Car',
        budget: 300
    }
    ]
};
app.get('/hello', (req, res) => {
    res.send('Hello World!!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});



app.listen(port, () => {
    console.log(`serving at http://localhost:${port}`)
});