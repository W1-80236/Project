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

// GET request for bill_tb
router.get("/", (request, response) => {
    const connection = mysql.createConnection(connectionDetails);
    const statement = "SELECT * FROM bill_tb";

    connection.query(statement, (error, result) => {
        connection.end();
        if (error) {
            response.status(500).json({ error: error.message });
        } else {
            response.json(result);
        }
    });
});

// POST request for bill_tb
router.post("/", (request, response) => {
    const connection = mysql.createConnection(connectionDetails);
    const { customer_id, dinning_id, total_bill, bill_status } = request.body;

    const statement = "INSERT INTO bill_tb(customer_id, dinning_id, total_bill, bill_status) VALUES (?, ?, ?, ?)";
    const values = [customer_id, dinning_id, total_bill, bill_status];

    connection.query(statement, values, (error, result) => {
        connection.end();
        if (error) {
            response.status(500).json({ error: error.message });
        } else {
            response.status(201).json({ message: 'Bill created successfully', billId: result.insertId });
        }
    });
});

// PUT request for bill_tb
router.put("/:bill_id", (request, response) => {
    const connection = mysql.createConnection(connectionDetails);
    const bill_id = request.params.bill_id;
    const { customer_id, dinning_id, total_bill, bill_status } = request.body;

    const statement = "UPDATE bill_tb SET customer_id=?, dinning_id=?, total_bill=?, bill_status=? WHERE bill_id=?";
    const values = [customer_id, dinning_id, total_bill, bill_status, bill_id];

    connection.query(statement, values, (error, result) => {
        connection.end();
        if (error) {
            response.status(500).json({ error: error.message });
        } else {
            response.json({ message: 'Bill updated successfully' });
        }
    });
});

// DELETE request for bill_tb
router.delete("/:bill_id", (request, response) => {
    const connection = mysql.createConnection(connectionDetails);
    const bill_id = request.params.bill_id;

    const statement = "DELETE FROM bill_tb WHERE bill_id=?";
    const values = [bill_id];

    connection.query(statement, values, (error, result) => {
        connection.end();
        if (error) {
            response.status(500).json({ error: error.message });
        } else {
            response.json({ message: 'Bill deleted successfully' });
        }
    });
});

module.exports = router;
