const { NotFoundError } = require("../../shared/errors");
const Todo = require("./Todo");

const showTodo = async ({ id, user_id }) => {
    const postTodo = await Todo.findOne({ _id: id, user_id });

    if (!postTodo) {
        throw new NotFoundError("todo topilmadi.");
    }

    return postTodo;
};

module.exports = showTodo;
