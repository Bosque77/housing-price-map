"use strict";
exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 6167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ NEXT_API_URL)
/* harmony export */ });
const NEXT_API_URL = "http://flip1.engr.oregonstate.edu:9178";


/***/ }),

/***/ 7686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports createHome, getAllHomes, getHomes, updateHome, deleteHome */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6167);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const url = _config__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_API_URL */ .f + "/api/Homes";
// Define an Axios interceptor to handle errors globally
axios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.response.use((response)=>response, (error)=>{
    console.error(error);
    throw error;
});
const createHome = async (house)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, house);
    return response.data;
};
const getAllHomes = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
    console.log("Request URL:", response.config.url);
    return response.data;
};
const getHomes = async (city_id)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url + `/${city_id}`);
    console.log("Request URL:", response.config.url);
    return response.data;
};
const updateHome = async (house)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url + `/${house.home_id}`, house);
    return response.data;
};
const deleteHome = async (home_id)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](url, {
        params: {
            home_id
        }
    });
    return response.data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getHomes,
    deleteHome,
    updateHome,
    createHome,
    getAllHomes
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;