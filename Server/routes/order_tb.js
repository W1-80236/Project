const mysql = require('mysql2');
const express = require('express');
const config = require('config');

const router = express.Router();

const connectionDetails = {
    host: config.get("server"),
    database: config.get("database"),
    user: config.get("user"),
    password: config.get("password")
};

// GET request for order_tb
router.get("/", (request, response) => {
    const connection = mysql.createConnection(connectionDetails);

    const statement = "SELECT * FROM order_tb";

    connection.query(statement, (error, result) => {
        connection.end();
        if (error) {
            response.status(500).json({ error: error.message });
        } else {
            response.json(result);
        }
    });
});

// POST request for order_tb
router.post("/", (request, response) => {
    const connection = mysql.createConnection(connectionDetails);

    const { order_id, customer_id, food_id, dinning_id, quantity, food_total, order_datetime } = request.body;

    const statement = "INSERT INTO order_tb (order_id, customer_id, food_id, dinning_id, quantity, order_datetime) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [order_id, customer_id, food_id, dinning_id, quantity, order_datetime];

    connection.query(statement, values, (error, result) => {
        connection.end();
        if (error) {
            response.status(500).json({ error: error.message });
        } else {
            response.status(201).json({ message: 'Order created successfully', orderId: result.insertId });
        }
    });
});

// PUT request for order_tb
router.put("/:order_id", (request, response) => {
    const connection = mysql.createConnection(connectionDetails);

    const order_id = request.params.order_id;
    const { customer_id, food_id, dinning_id, quantity, food_total, order_datetime } = request.body;

    const statement = "UPDATE order_tb SET customer_id=?, food_id=?, dinning_id=?, quantity=?, food_total=?, order_datetime=? WHERE order_id=?";
    const values = [customer_id, food_id, dinning_id, quantity, food_total, order_datetime, order_id];

    connection.query(statement, values, (error, result) => {
        connection.end();
        if (error) {
            response.status(500).json({ error: error.message });
        } else {
            response.json({ message: 'Order updated successfully' });
        }
    });
});

// DELETE request for order_tb
router.delete("/:order_id", (request, response) => {
    const connection = mysql.createConnection(connectionDetails);

    const order_id = request.params.order_id;

    const statement = "DELETE FROM order_tb WHERE order_id=?";
    const values = [order_id];

    connection.query(statement, values, (error, result) => {
        connection.end();
        if (error) {
            response.status(500).json({ error: error.message });
        } else {
            response.json({ message: 'Order deleted successfully' });
        }
    });
});

module.exports = router;
