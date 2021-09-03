const mongoose = require('mongoose')

// // Connecting to DB

// require('dotenv').config();

// const connectDB = async () => {
//     try {
//         await mongoose.connect(
//                 `mongodb+srv://${process.env.mydbname}:${process.env.mypwd}@cluster0.dxosq.mongodb.net/${process.env.db}?retryWrites=true&w=majority`, {
//                     useNewUrlParser: true,
//                     useUnifiedTopology: true
//                 })
//             .then((result) => console.log("connected"));
//     } catch (error) {
//         console.log(error)
//     }
// }

// module.exports = connectDB



const {
    Schema
} = mongoose

//creating a person 

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    pws: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", user)

module.exports = User