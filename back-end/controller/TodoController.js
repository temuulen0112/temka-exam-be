const express = require('express');
const Todo = require('../models/Todo');

const getTodo = (req, res) => {
    Todo.find({}, function (err, data) {
        if (err)
            req.json({
                success: false,
                data: err
            })
        else
            res.json({
                success: true,
                data: data
            })
    })
};

const createTodo = (req, res) => {
    const data = req.body
    Todo.create(data, function (err, data) {
        if (err)
            res.json({
                success: false,
                data: err
            })
        else
            res.json({
                success: true,
                data: data
            }
            )
    })
};

const updateTodo = (req, res) => {
    const data = req.body
    const id = req.params.id
    Todo.updateOne({ _id: id }, data, function (err, data) {
        if (err)
            res.json({
                success: false,
                data: err
            })
        else
            res.json({
                success: true,
                data: data
            })
    })
};

const deleteTodo = (req, res) => {
    Todo.findOneAndDelete({
        _id: req.params.id
    })
        .then((data) => res.json(data))
        .catch((err) => res.json(err))
};

module.exports = {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
};