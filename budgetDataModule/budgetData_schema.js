const mongoose = require('mongoose');
const budgetSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true,
        uppercase: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^#[A-Fa-f0-9]{6}$/.test(value);
            },
            message: "Valid hexadecimal color code is required",
        },

    }
}, {collection: 'myBudget'});

module.exports = mongoose.model('myBudget', budgetSchema)




















// const mongoose = require("mongoose");

// const budgetSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     budget: {
//         type: Number,
//         required: true,
//     },
//     color: {
//         type: String,
//         required: true,
//         validate: {
//             validator: function (value) {
//                 return /^#[0-9A-Fa-f]{6}$/.test(value);
//             },
//             message: "Color must be a valid hexadecimal color code (e.g.., #ED4523)",
//         },
//     },
// }, { collection: 'budgetdb' });

// module.exports = mongoose.model('budgetdb', budgetSchema);