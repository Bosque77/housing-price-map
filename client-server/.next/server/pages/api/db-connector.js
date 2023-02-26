"use strict";
(() => {
var exports = {};
exports.id = 700;
exports.ids = [700];
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
    host: "classmysql.engr.oregonstate.edu",
    user: "cs340_schwartf",
    password: "0387",
    database: "cs340_schwartf",
    connectionLimit: 10
});
// Export it for use in our application
module.exports.pool = pool;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6698));
module.exports = __webpack_exports__;

})();