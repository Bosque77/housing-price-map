import express from "express";
import asyncHandler from "express-async-handler";
import * as db from "../dbcon.mjs";

const statesRouter = express.Router();

// Get all states
statesRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    console.log("inside get States");
    const q = `SELECT * FROM States`;

    db.pool.query(q, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err.message);
      } else {
        res.status(200).send(JSON.stringify(result));
      }
    });
  })
);

// Update a state by ID
statesRouter.put("/:state_id", asyncHandler(async (req, res) => {
  console.log(`Updating state with ID ${req.params.state_id}`);
  const { name } = req.body;

  if (!name) {
    res.status(400).send("State name is required");
    return;
  }

  const q = `UPDATE States SET name = ? WHERE state_id = ?`;
  const values = [name, req.params.state_id];

  db.pool.query(q, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else if (result.affectedRows === 0) {
      res.status(404).send("State not found");
    } else {
      res.status(200).send(`State with ID ${req.params.state_id} updated successfully`);
    }
  });
}));

// Delete a state by ID
statesRouter.delete("/:state_id", asyncHandler(async (req, res) => {
  console.log(`Deleting state with ID ${req.params.state_id}`);
  const q = `DELETE FROM States WHERE state_id = ?`;
  const values = [req.params.state_id];

  db.pool.query(q, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else if (result.affectedRows === 0) {
      res.status(404).send("State not found");
    } else {
      res.status(200).send(`State with ID ${req.params.state_id} deleted successfully`);
    }
  });
}));

// Add a new state
statesRouter.post("/", asyncHandler(async (req, res) => {
  console.log("Adding a new state");
  const { name } = req.body;

  if (!name) {
    res.status(400).send("State name is required");
    return;
  }

  const q = `INSERT INTO States (name) VALUES (?)`;
  const values = [name];

  db.pool.query(q, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      const newStateId = result.insertId;
      res.status(201).send(`New state added with ID ${newStateId}`);
    }
  });
}));

export default statesRouter;
