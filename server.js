const User = require('./model/User')
// const connectDB = require('./model/User')
const express = require('express')

const mongoose = require('mongoose')

// Connecting to DB

require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(
                `mongodb+srv://${process.env.mydbname}:${process.env.mypwd}@cluster0.dxosq.mongodb.net/${process.env.db}?retryWrites=true&w=majority`, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
            .then((result) => console.log("connected"));
    } catch (error) {
        console.log(error)
    }
}

connectDB();


// Lunching a server 

const app = express();

const PORT = 3000;


app.listen(PORT, (err) => {
    err ?
        console.log(err) :
        console.log("server is running")
})


//Routes 

// app.get('/users', function (req, res) {
//     User.find({}).then((model) => {
//         res.json({
//             model
//         })
//     })
// })

// app.post('/new-user', function (req, res) {
//     const user = new User({
//         name: "Meyssa",
//         age: 23,
//         pws: "1234"
//     })
//     user.save((err) => {
//         if (err) return console.log(err)
//     }).then((model) => {
//         res.json({
//             model
//         })
//     })
// })

// let id = '1111'

// app.put('/user/:id', function (req, res) {
//             User.findByIdAndUpdate(id, {
//                 age: 22
//             }).then((model) => {
//                 res.json({
//                     model
//                 })
//             })})


//             app.delete('/users', function (req, res) {
//                 User.findByIdAndRemove(id)
//             })