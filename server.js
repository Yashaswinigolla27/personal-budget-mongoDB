const express = require('express');
const app = express();
const port = 3030;

app.use('/', express.static('public'));

/**
 * const budget = {
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
**/

const fs = require('fs');
// Read the JSON file
const jsonData = fs.readFileSync('budget.json', 'utf8');
// Parse the JSON data
const budget = JSON.parse(jsonData);
// Access the budget data using the 'budget' variable
console.log(budget);

app.get('/hello', (req, res) => {
    res.send('Hello World!!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});



app.listen(port, () => {
    console.log(`serving at http://localhost:${port}`)
});