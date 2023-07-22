const Todo = require("./Todo");

const listTodos = async ({ user_id, q, page = { limit: 2, offset: 0 } }) => {
    const filter = {};

    if (q) {
        filter.name = { $regex: new RegExp(q, "i") };
    }

    const result = await Todo.find({ user_id, ...filter })
        .skip(page.offset)
        .limit(page.limit);

    return { list: result, pageInfo: { ...page } };
};

module.exports = listTodos;
