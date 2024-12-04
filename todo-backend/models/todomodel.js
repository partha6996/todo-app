const mongoose = require("mongoose")

const todoScheme = new mongoose.Scheme({
    tite:{
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    CreatedAt: {
        type: Date,
        default : Date.now()
    },
    completedAt:{
        type: Date
    }
       
})

module.exports = mongoose.model('Todo', todoschema)