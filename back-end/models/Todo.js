const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    todoText: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    checkedAt: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;