import express from "express";
import asyncHandler from "express-async-handler";
import * as db from "../dbcon.mjs";


const regionsRouter = express.Router();

// get all regions
regionsRouter.get('/', asyncHandler(async (req, res) => {
  console.log('inside get Regions');
  let q = `SELECT Regions.region_id, Regions.region_name, Regions.region_description, 
           GROUP_CONCAT(Cities.city_name) AS cities
           FROM Regions
           LEFT JOIN Region_has_Cities ON Regions.region_id = Region_has_Cities.region_id
           LEFT JOIN Cities ON Region_has_Cities.city_id = Cities.city_id
           GROUP BY Regions.region_id`;

  db.pool.query(q, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      console.log(result);
      const regions = result.map(region => ({
        region_id: region.region_id,
        region_name: region.region_name,
        cities: region.cities ? region.cities.split(',') : [],
        region_description: region.region_description
      }));

      res.status(200).send(JSON.stringify(regions));
    }
  });
}));

export default regionsRouter;