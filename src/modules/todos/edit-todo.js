const { NotFoundError } = require("../../shared/errors");
const Todo = require("./Todo");

const editTodo = async ({ id, user_id, ...changes }) => {
    const existing = await Todo.findOne({ _id: id, user_id });

    if (!existing) {
        throw new NotFoundError("Todo topilmadi.");
    }

    return Todo.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editTodo;
