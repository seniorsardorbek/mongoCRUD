const Joi = require("joi");

exports.postTodochema = {
    body: Joi.object({
        todo: Joi.string().required(),
        user_id: Joi.string().required(),
        list_id: Joi.string().required(),
    }),
};

// ?q=a&page[offset]=0&page[limit]=10
exports.getTodosSchema = {
    query: Joi.object({
        q: Joi.string(),
        page: Joi.object({
            offset: Joi.number().integer(),
            limit: Joi.number().integer().when("offset", { is: Joi.exist(), then: Joi.required(), otherwise: Joi.forbidden() }),
        }),
        sort: Joi.object({
            by: Joi.string().valid("updated_at", "created_at"),
            order: Joi.string().valid("asc", "desc"),
        }),
    }),
};

exports.patchTodoSchema = {
    params: Joi.object({
        id: Joi.string(),
    }),
    body: Joi.object({
        todo: Joi.string()
    }),
};

exports.getTodoSchema = {
    params: Joi.object({
        id: Joi.string(),
    }),
};

exports.deleteTodoSchema = {
    params: Joi.object({
        id: Joi.string(),
    }),
};
