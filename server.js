const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const port = 3030;

const mongoose = require('mongoose');
const budgetModel = require("./budgetDataModule/budgetData_schema");
let url = 'mongodb://localhost:27017/db'
const corsOptions = {
    origin: "http://localhost:3030",
  };

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/', express.static('public'));

app.get("/collection", (req, res) => {
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => {
                console.log("Successfully connected to the database db-get");
                budgetModel.find({})
                    .then((data) => {
                        res.join(data);
                        console.log(data);
                        mongoose.connection.close();
                    })
                    .catch((opError) => {
                        console.log("Connection Unsuccessful")
                    })
            })
            .catch((err) => { 
                console.log(err);
            })

    })

app.post("/collection", (req, res) => {
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("Successfully connected to the database db-post");
            const newItem = new budgetModel(req.body);
            budgetModel.create(newItem)
                .then((data) => {
                    res.json(data);
                    console.log(data);
                    mongoose.connection.close();
                })
            .catch((connectionError) => {
                console.error(connectionError);
                res.status(400).json({ error: 'Internal Server error-Validation failed' });
            });
        })
        .catch((err) => {
        console.error(err);
        res.status(400).json({ error: 'Internal Server error' });
        });
    });
    



// app.get("/collection", (req, res) => {
//     mongoose.connect("mongodb://127.0.0.1:27017/mybudget", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       console.log("Connected to the Database");
//       budgetModel.find({})
//         .then((data) => {
//           res.json(data);
//           console.log(data);
//           mongoose.connection.close();
//         })
//         .catch((connectionError) => {
//           console.error(connectionError);
//         });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
//   });




















// app.get('/hello', (req, res) => {
//     res.send('Hello World!!');
// });

// app.get('/budget', (req, res) => {
//     res.json(budgetData);
// });


app.listen(port, () => {
    console.log(`API serving at http://localhost:${port}`)
});

