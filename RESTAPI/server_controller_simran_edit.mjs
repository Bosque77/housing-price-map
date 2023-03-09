import express from "express";
import asyncHandler from "express-async-handler";
import cors from 'cors'
import * as db from "./dbcon.mjs";
import statesRouter from "./controllers/states-controller.mjs";
import citiesRouter from "./controllers/cities-controller.mjs";

// Express

let app = express();
const PORT = 9178;

app.use(cors());

app.use(express.json());

app.use('/api/States', statesRouter)
app.use('/api/Cities', citiesRouter)

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
    let city_id = req.query.city_id;

    let q = `SELECT * FROM Homes INNER JOIN Cities on Homes.city_id = Cities.city_id WHERE Homes.city_id=${city_id};`;

    db.pool.query(q, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
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


app.put('/Homes', asyncHandler(async (req, res) => {
  let q = `UPDATE Homes \
    SET street = ?, \
        sq_ft = ?, \
        num_of_bed = ?, \
        num_of_bath = ?, \
        year_built = ?, \
        lat = ?, \
        lng = ?, \
        zip = ?, \
        city_id = (SELECT Cities.city_id FROM Cities WHERE city_name = ?) \
    WHERE home_id = ?`;

  db.pool.query(q, [req.body.street, req.body.sq_ft, req.body.num_of_bed, req.body.num_of_bath, req.body.year_built, req.body.lat, req.body.lng, req.body.zip, req.body.city_name, req.body.home_id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(JSON.stringify(result));
    }
  });
}));


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

/*
    CRUD operations for Cities table
*/
// Read all cities
app.get("/Cities", asyncHandler(async (req, res) => {
  let q = "SELECT * FROM Cities;";

  db.pool.query(q, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(JSON.stringify(result));
    }
  });
}));

// Insert a new city
app.post('/Cities', asyncHandler(async (req, res) => {
  console.log('inside posting city');

  let q = `INSERT INTO Cities (city_name, state) \
    VALUES (?, ?)`;

  console.log(q);

  db.pool.query(q, [req.body.city_name, req.body.state], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(204).send(JSON.stringify(result));
    }
  });
}));

// Update an existing city
app.put('/Cities', asyncHandler(async (req, res) => {
  let q = `UPDATE Cities \
    SET city_name = ?, \
        state = ? \
    WHERE city_id = ?`;

  db.pool.query(q, [req.body.city_name, req.body.state, req.body.city_id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(JSON.stringify(result));
    }
  });
}));

// Delete an existing city
app.delete('/Cities', asyncHandler(async (req, res) => {
  let q = `DELETE FROM Cities \
    WHERE city_id = ?`;

  db.pool.query(q, [req.query.city_id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(204).send(JSON.stringify(result));
    }
  });
}));




/*
    ROUTES for Regions
*/
app.get(
  "/regions",
  asyncHandler(async (req, res) => {
    let q = "SELECT * FROM Regions;";

    db.pool.query(q, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(JSON.stringify(result));
      }
    });
  })
);

app.post('/regions', asyncHandler(async (req, res) => {
  let q = `INSERT INTO Regions (region_name, region_desription) \
    VALUES (?, ?)`;

  db.pool.query(q, [req.body.region_name, req.body.region_desription], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(204).send(JSON.stringify(result));
    }
  });
}));

app.put('/regions', asyncHandler(async (req, res) => {
  let q = `UPDATE Regions \
    SET region_name = ?, \
        region_desription = ? \
    WHERE region_id = ?`;

  db.pool.query(q, [req.body.region_name, req.body.region_desription, req.body.region_id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(JSON.stringify(result));
    }
  });
}));

app.delete(
  "/regions",
  asyncHandler(async (req, res) => {

    let region_id = req.query.region_id;

    let q = `DELETE FROM Regions \
    WHERE Regions.region_id = ${region_id};`;

    db.pool.query(q, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(204).send(JSON.stringify(result));
      }
    });
  })
);

/*
    ROUTE to display city_name corresponding to given region
*/
app.get(
  "/regions/region_cities",
  asyncHandler(async (req, res) => {
    let region_id = req.query.region_id;

    let q = `SELECT Cities.city_name \
             FROM Regions \
             JOIN Region_has_Cities ON Regions.region_id = Region_has_Cities.region_id \
             JOIN Cities ON Region_has_Cities.city_id = Cities.city_id \
             WHERE Regions.region_id = ${region_id};`;

    db.pool.query(q, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(JSON.stringify(result));
      }
    });
  })
);



// **** routes for Zillow_Estimates

app.get(
  "/ZillowEstimates",
  asyncHandler(async (req, res) => {
    let home_id = req.query.home_id;

    let q = `SELECT * FROM Zillow_Estimates WHERE Zillow_Estimates.home_id = ${home_id};`;

    db.pool.query(q, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.status(200).send(JSON.stringify(result));
      }
    });
  })
);

app.post('/ZillowEstimates', asyncHandler(async (req, res) => {
  console.log('inside posting Zillow estimate');

  let q = `INSERT INTO Zillow_Estimates (zestimate, date, home_id) \
    VALUES (?, ?, ?)`;

  console.log(q);

  db.pool.query(q, [req.body.zestimate, req.body.date, req.body.home_id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(204).send(JSON.stringify(result));
    }
  });
}));

app.put('/ZillowEstimates', asyncHandler(async (req, res) => {
  let q = `UPDATE Zillow_Estimates \
    SET zestimate = ?, \
        date = ?, \
        home_id = ? \
    WHERE Zillow_Estimates.zillow_price_id = ?`;

  db.pool.query(q, [req.body.zestimate, req.body.date, req.body.home_id, req.body.zillow_price_id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(JSON.stringify(result));
    }
  });
}));

app.delete(
  "/ZillowEstimates",
  asyncHandler(async (req, res) => {

    let zillow_price_id = req.query.zillow_price_id;

    let q = `DELETE FROM Zillow_Estimates \
    WHERE Zillow_Estimates.zillow_price_id = ${zillow_price_id};`;

    db.pool.query(q, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(204).send(JSON.stringify(result));
      }
    });
  })
);

// *** routes for Region_Statistics table
app.get('/RegionStatistics', asyncHandler(async (req, res) => {
  const region_id = req.query.region_id;
  let q = `SELECT * FROM Region_Statistics WHERE Region_Statistics.region_id = ${region_id};`;

  db.pool.query(q, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.status(200).send(JSON.stringify(result));
    }
  });
}));

app.post('/RegionStatistics', asyncHandler(async (req, res) => {
  console.log('inside posting region statistic');

  let q = `INSERT INTO Region_Statistics (region_id, avg_price_per_sq_ft, mean_housing_price, five_year_price_gradient, ten_year_price_gradient, median_housing_price, date) \
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  console.log(q);

  db.pool.query(q, [req.body.region_id, req.body.avg_price_per_sq_ft, req.body.mean_housing_price, req.body.five_year_price_gradient, req.body.ten_year_price_gradient, req.body.median_housing_price, req.body.date], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(204).send(JSON.stringify(result));
    }
  });
}));

app.put('/RegionStatistics', asyncHandler(async (req, res) => {
  let q = `UPDATE Region_Statistics \
    SET region_id = ?, \
        avg_price_per_sq_ft = ?, \
        mean_housing_price = ?, \
        five_year_price_gradient = ?, \
        ten_year_price_gradient = ?, \
        median_housing_price = ?, \
        date = ? \
    WHERE Region_Statistics.region_statistic_id = ?;`;

  db.pool.query(q, [req.body.region_id, req.body.avg_price_per_sq_ft, req.body.mean_housing_price, req.body.five_year_price_gradient, req.body.ten_year_price_gradient, req.body.median_housing_price, req.body.date, req.body.region_statistic_id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(JSON.stringify(result));
    }
  });
}));

app.delete('/RegionStatistics', asyncHandler(async (req, res) => {
  let q = `DELETE FROM Region_Statistics WHERE Region_Statistics.region_statistic_id = ?`;

  db.pool.query(q, [req.query.region_statistic_id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(204).send(JSON.stringify(result));
    }
  });
}));




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
