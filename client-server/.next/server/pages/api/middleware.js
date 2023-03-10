"use strict";
(() => {
var exports = {};
exports.id = 5;
exports.ids = [5];
exports.modules = {

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
var __webpack_exports__ = (__webpack_exec__(5471));
module.exports = __webpack_exports__;

})();