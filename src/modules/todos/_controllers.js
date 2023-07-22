const express = require("express");
const httpValidator = require("../../shared/http-validator");

const addTodo = require("./add-todo");
const editTodo = require("./edit-todo");
const removeTodo = require("./remove-todo");
const showTodo = require("./show-todo");
const listTodos = require("./list-todos");
const { postTodochema, deleteTodoSchema, getTodoSchema , patchTodoSchema, getTodosSchema } = require("./_schemas");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postTodo = async (req, res, next) => {
    try {
        httpValidator({ body: req.body }, postTodochema);

        const result = await addTodo({ ...req.body, user_id: req.user.id });
console.log(result);
        res.status(201).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getTodos = async (req, res, next) => {
    try {
        httpValidator({ query: req.query }, getTodosSchema);

        const result = await listTodos({ user_id: req.user.id, ...req.query });

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

// /**
//  * @param {express.Request} req
//  * @param {express.Response} res
//  * @param {express.NextFunction} next
//  */
const getTodo = async (req, res, next) => {
    try {
        httpValidator({ params: req.params }, getTodoSchema);

        const result = await showTodo({ ...req.params, user_id: req.user.id });

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

// /**
//  * @param {express.Request} req
//  * @param {express.Response} res
//  * @param {express.NextFunction} next
//  */
const patchTodo = async (req, res, next) => {
    try {
        httpValidator({ params: req.params, body: req.body }, patchTodoSchema);

        const result = await editTodo({ id: req.params.id, user_id: req.user.id, ...req.body });

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

// /**
//  * @param {express.Request} req
//  * @param {express.Response} res
//  * @param {express.NextFunction} next
//  */
const deleteTodo = async (req, res, next) => {
    try {
        httpValidator({ params: req.params }, deleteTodoSchema);

        const result = await removeTodo({ id: req.params.id, user_id: req.user.id });

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    postTodo,
    getTodos,
    getTodo,
    patchTodo,
    deleteTodo,
};
