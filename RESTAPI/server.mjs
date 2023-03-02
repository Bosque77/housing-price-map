import express from "express";
import asyncHandler from "express-async-handler";
import cors from 'cors'
import * as db from "./dbcon.mjs";

// Express

let app = express();
const PORT = 9178;

app.use(cors());

app.use(express.json());

/*
    ROUTE to diplay all cities in select drop down menu
*/
app.get(
  "/dropdown_cities",
  asyncHandler(async (req, res) => {
    let q = "SELECT city_id, city_name FROM Cities;";

    db.pool.query(q, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(JSON.stringify(result));
      }
    });
  })
);

/*
    ROUTES for Homes
*/
app.get(
  "/Homes",
  asyncHandler(async (req, res) => {

    console.log('inside get Homes')
    let city_id = req.query.cityid.toString();

    let q = `SELECT Homes.home_id, Homes.street, Homes.sq_ft, Homes.num_of_bed, Homes.num_of_bath FROM Homes WHERE Homes.city_id=${city_id};`;

    db.pool.query(q, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result)
        res.status(200).send(JSON.stringify(result));
      }
    });
  })
);

app.post('/Homes', asyncHandler(async (req, res) => {
  console.log('inside posting home');

  let q = `INSERT INTO Homes (street, sq_ft, num_of_bed, num_of_bath, year_built, lat, lng, zip, city_id) \
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, (SELECT Cities.city_id FROM Cities WHERE city_name = ?))`;

  console.log(q);

  db.pool.query(q, [req.body.street, req.body.sq_ft, req.body.num_of_bed, req.body.num_of_bath, req.body.year_built, req.body.lat, req.body.lng, req.body.zip, req.body.city_name], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(204).send(JSON.stringify(result));
    }
  });
}));


app.put(
  "/Homes",
  asyncHandler(async (req, res) => {
    let q = `UPDATE Homes \
    SET street = ${req.body.street} \
        sq_ft = ${req.body.sq_ft}, \
        num_of_bed = ${req.body.num_of_bed}, \
        num_of_bath = ${req.body.num_of_bath}, \
        year_built = ${req.body.year_built}, \
        lat = ${req.body.lat}, \
        lng = ${req.body.lng}, \
        zip = ${req.body.zip}, \
        city_id = (SELECT Cities.city_id FROM Cities WHERE city_name = ${req.body.city_name}) \
    WHERE home_id = ${req.body.home_id};`;

    console.log(q)

    db.pool.query(q, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(JSON.stringify(result));
      }
    });
  })
);

app.delete(
  "/Homes",
  asyncHandler(async (req, res) => {

    let home_id = req.query.home_id;

    let q = `DELETE FROM Homes \
    WHERE Homes.home_id = ${home_id};`;

    db.pool.query(q, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(204).send(JSON.stringify(result));
      }
    });
  })
);

app.get('/*', (req, res) => {
  res.send("hello; this is the REST API server");
});

/*
    LISTENER
*/
app.listen(PORT, function () {
  console.log(
    "Express started on http://localhost:" +
      PORT +
      "; press Ctrl-C to terminate."
  );
});
