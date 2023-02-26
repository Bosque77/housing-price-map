"use strict";
(() => {
var exports = {};
exports.id = 901;
exports.ids = [901,700,5];
exports.modules = {

/***/ 155:
/***/ ((module) => {

module.exports = require("mariadb");

/***/ }),

/***/ 6698:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Get an instance of mysql we can use in the app

const mariadb = __webpack_require__(155);
// Create a 'connection pool' using the provided credentials
const pool = mariadb.createPool({
    host: "database-2.cfwdc7czuhxu.us-west-1.rds.amazonaws.com",
    user: "admin",
    password: "tester123!",
    database: "innodb",
    connectionLimit: 5
});
// Export it for use in our application
module.exports.pool = pool;


/***/ }),

/***/ 7301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ asynchandler)
/* harmony export */ });
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5471);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Database
var db = __webpack_require__(6698);
async function asynchandler(req, res) {
    if (req.method === "GET") {
        try {
            console.log("inside the db connector");
            // Define our queries
            const query1 = "DROP TABLE IF EXISTS diagnostic;";
            const query2 = "CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);";
            const query3 = 'INSERT INTO diagnostic (text) VALUES ("MySQL is working!")';
            const query4 = "SELECT * FROM diagnostic;";
            // Execute every query in an asynchronous manner, we want each query to finish before the next one starts
            const conn = await db.pool.getConnection();
            console.log(conn);
            await conn.query(query1);
            await conn.query(query2);
            await conn.query(query3);
            const rows = await conn.query(query4);
            res.status(200).json(rows);
        } catch (err) {
            (0,_middleware__WEBPACK_IMPORTED_MODULE_0__.errorHandler)(err, req, res);
        }
    } else if (req.method === "POST") {
        res.status(200).send("going to post");
    } else {
        res.status(405).end();
    }
}


/***/ }),

/***/ 5471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorHandler": () => (/* binding */ errorHandler)
/* harmony export */ });
function errorHandler(err, req, res) {
    console.error(err);
    res.status(500).json({
        message: "An error occurred"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7301));
module.exports = __webpack_exports__;

})();