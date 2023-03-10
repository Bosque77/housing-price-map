"use strict";
exports.id = 790;
exports.ids = [790];
exports.modules = {

/***/ 790:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports createCity, updateCity */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6167);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const url = _config__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_API_URL */ .f + "/api/Cities";
// Define an Axios interceptor to handle errors globally
axios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.response.use((response)=>response, (error)=>{
    console.error(error);
    throw error;
});
const getCities = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
    return response.data;
};
const createCity = async (new_city)=>{
    // update the url so it sends it to the city id
    const url = _config__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_API_URL */ .f + "/api/Cities/";
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, new_city);
    return response.data;
};
const updateCity = async (updated_city)=>{
    // update the url so it sends it to the city id
    const url = _config__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_API_URL */ .f + "/api/Cities/" + updated_city.city_id;
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, updated_city);
    return response.data;
};
const deleteCity = async (id)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](url + "/" + id);
    return response.data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getCities,
    updateCity,
    deleteCity,
    createCity
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ NEXT_API_URL)
/* harmony export */ });
const NEXT_API_URL = "http://flip1.engr.oregonstate.edu:9178";


/***/ })

};
;