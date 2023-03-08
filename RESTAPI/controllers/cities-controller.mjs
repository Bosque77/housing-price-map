import express from "express";
import asyncHandler from "express-async-handler";
import * as db from "../dbcon.mjs";




const citiesRouter = express.Router();


// get all of the landfills for the user and region specified
citiesRouter.get(
    "/",
    asyncHandler(async (req, res) => {
      console.log("inside get Cities");
      let q = `SELECT Cities.city_id, Cities.city_name, States.name AS state_name
      FROM Cities
      INNER JOIN States ON Cities.state_id = States.state_id `;;
  
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

  citiesRouter.put("/:city_id", asyncHandler(async (req, res) => {
    console.log(`Updating city with ID ${req.params.city_id}`);
    const { city_name, state_id } = req.body;
  
    if (!city_name || !state_id) {
      res.status(400).send("City name and state id are required");
      return;
    }
  
    const q = `UPDATE Cities SET city_name = ?, state_id = ? WHERE city_id = ?`;
    const values = [city_name, state_id, req.params.city_id];
  
    db.pool.query(q, values, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err.message);
      } else if (result.affectedRows === 0) {
        res.status(404).send("City not found");
      } else {
        res.status(200).send(`City with ID ${req.params.city_id} updated successfully`);
      }
    });
  }));

// // change landfill
// landfillRouter.put("/:id", asyncHandler(async (request: Request, response: Response) => {
//     const updated_landfill = request.body;
//     const landfill_id = request.params.id;
//     const landfill = await landfillService.updateLandfill(landfill_id, updated_landfill);
//     response.status(200).send(landfill);
// }))

// // delete landfill
// landfillRouter.delete("/:id", async (request: Request, response: Response) => {
//     const landfill_id = request.params.id;
//     const landfill = await landfillService.deleteLandfill(landfill_id);
//     if (!landfill) response.status(404).send("landfill not found")
//     response.status(204)

// });

// // create new landfill
// landfillRouter.post("/", async (request: Request, response: Response) => {
//     const user = request.user as UserType;
//     const user_id = user._id as string;
//     const new_landfill = landfillSchema.parse(request.body);
//     const returned_data = await landfillService.createLandfill(new_landfill, user_id);
//     response.status(200).send(returned_data);
// });

export default citiesRouter;