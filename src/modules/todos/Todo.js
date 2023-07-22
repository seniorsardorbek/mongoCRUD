const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        todo: {
            type: mongoose.SchemaTypes.String,
            required: true,
        },
        user_id: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User",
        },
        list_id: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "List",
        },
    },
    {
        versionKey: false,
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

const Todo = mongoose.model("Todos", todoSchema);

module.exports = Todo;
