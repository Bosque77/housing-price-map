
import * as model from './model.mjs';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as db from './dbcon.mjs';


// Express

let app = express();
const PORT = 9178;

app.use(express.json());

/*
    ROUTES for Homes
*/

// select rows based on city_id
app.get('/Homes', asyncHandler (async (req, res) => {

    let city_id = req.query.cityid.toString();
    console.log(city_id)

    let q = `SELECT Homes.home_id, Homes.street, Homes.sq_ft, Homes.num_of_bed, Homes.num_of_bath FROM Homes WHERE Homes.city_id=${city_id};`;

    db.pool.query(q, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.status(200).send(JSON.stringify(result))
        }
    })  
  
}));

app.post('/Homes', asyncHandler (async (req, res) => {

    
}))

//

/*
    LISTENER
*/
app.listen(PORT, function(){
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});