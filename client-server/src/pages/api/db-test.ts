// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}


// Database
var db = require('./db-connector')

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>
) {
          // Define our queries
          const query1 = 'DROP TABLE IF EXISTS diagnostic;';
          const query2 = 'CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);';
          const query3 = 'INSERT INTO diagnostic (text) VALUES ("MySQL is working!")';
          const query4 = 'SELECT * FROM diagnostic;';
  
          // Execute every query in an asynchronous manner, we want each query to finish before the next one starts
  
          // DROP TABLE...
          db.pool.query(query1, function (_err: any, _results: any, _fields: any){
  
              // CREATE TABLE...
              db.pool.query(query2, function(err: any, results: any, fields: any){
  
                  // INSERT INTO...
                  db.pool.query(query3, function(err: any, results: any, fields: any){
  
                      // SELECT *...
                      db.pool.query(query4, function(err: any, results: any, fields: any){
  
                          // Send the results to the browser
                          let base = "<h1>MySQL Results:</h1>"
                          res.send(base + JSON.stringify(results));
                      });
                  });
              });
          });
}
