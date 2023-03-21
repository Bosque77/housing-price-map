"use strict";
(() => {
var exports = {};
exports.id = 168;
exports.ids = [168];
exports.modules = {

/***/ 3464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const AddCitytoRegion = ({ setShowAddCity , cities , all_cities , onAddCity  })=>{
    const filtered_cities = all_cities.filter((city)=>{
        return !cities.includes(city.city_name);
    });
    const numColumns = Math.min(filtered_cities.length, 5); // calculate number of columns
    console.log("logging num of columns");
    console.log(numColumns);
    const onCitySelect = (city_name)=>{
        onAddCity(city_name);
    };
    const insertCities = ()=>{
        return filtered_cities.map((city)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "flex flex-row px-4 py-2 bg-gray-100 rounded hover:bg-gray-300 justify-center active:scale-95",
                value: city.city_name,
                onClick: ()=>onCitySelect(city.city_name),
                title: city.state,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-2",
                    children: city.city_name
                })
            }, city.city_id));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "fixed h-screen w-screen flex items-center justify-center ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center bg-white px-8 py-8 z-10 rounded ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-xl text-center",
                        children: " Select City"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `grid grid-cols-${numColumns} grid-rows-5 gap-x-2 gap-y-2 mt-6`,
                        children: insertCities()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full text-right",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: " px-4 py-2 text-right hover:underline hover:underline-offset-1 text-slate-700 hover:text-black active:scale-95",
                            onClick: ()=>setShowAddCity(false),
                            children: "Cancel"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 bg-black opacity-50 "
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCitytoRegion);


/***/ }),

/***/ 1759:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AddCitytoRegion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3464);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8802);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_regions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(765);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_regions_service__WEBPACK_IMPORTED_MODULE_4__]);
_services_regions_service__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const RegionDetails = ({ currentRegion , all_cities  })=>{
    const [region_description, setRegionDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [region_name, setRegionName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [cities, setCities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [showAddCity, setShowAddCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentRegion) {
            setRegionName(currentRegion.region_name);
            setRegionDescription(currentRegion.region_description);
            setCities(currentRegion.cities);
        }
    }, [
        currentRegion
    ]);
    const removeCity = (city_name)=>{
        console.log("inside remove city");
        const updated_cities = cities.filter((city)=>city !== city_name);
        setCities(updated_cities);
    };
    const addcity = ()=>{
        setShowAddCity(true);
    };
    const onAddCity = (city_name)=>{
        setShowAddCity(false);
        setCities([
            ...cities,
            city_name
        ]);
    };
    const updateRegion = async ()=>{
        console.log("inside update region");
        try {
            const updated_region = {
                region_id: currentRegion.region_id,
                region_name,
                region_description,
                cities
            };
            console.log(updated_region);
            if (updated_region.region_id == -1) {
                const response = await _services_regions_service__WEBPACK_IMPORTED_MODULE_4__/* ["default"].createRegion */ .ZP.createRegion(updated_region);
            } else {
                const response = await _services_regions_service__WEBPACK_IMPORTED_MODULE_4__/* ["default"].updateRegion */ .ZP.updateRegion(updated_region);
            }
            // now reload the window
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };
    const onDeleteRegion = async ()=>{
        console.log("inside delete region");
        try {
            const response = await _services_regions_service__WEBPACK_IMPORTED_MODULE_4__/* ["default"].deleteRegion */ .ZP.deleteRegion(currentRegion.region_id);
            // now reload the window
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };
    const insertCities = (cities)=>{
        return cities.map((city)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "px-4 py-2 border grow mr-2",
                        children: city
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: ()=>removeCity(city),
                        className: "active:scale-75",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__.XMarkIcon, {
                                className: "w-6 h-6 cursor-pointer"
                            }),
                            " "
                        ]
                    })
                ]
            }, city));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col w-3/4 bg-white px-8 py-8 shadow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "text-xl font-bold mb-4",
                        value: region_name,
                        onChange: (e)=>setRegionName(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        className: " rounded-lg outline outline-offset-2 outline-1 outline-slate-500 focus:outline-blue-500 text-start h-36",
                        onChange: (e)=>setRegionDescription(e.target.value),
                        value: region_description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "mt-4 text-lg font-bold",
                        children: "Cities"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-5 gap-x-4 gap-y-4 mt-4 text-center",
                        children: [
                            insertCities(cities),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "px-4 py-2 bg-gray-200 text-slate-700 rounded hover:text-black hover:bg-gray-400 active:scale-95 ",
                                onClick: addcity,
                                children: "Add City"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row justify-end mt-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "mr-4 hover:underline hover:underline-offset-1 text-slate-700 hover:text-black active:scale-95",
                                onClick: onDeleteRegion,
                                children: "Delete"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: " bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 active:scale-95",
                                onClick: updateRegion,
                                children: "Save"
                            })
                        ]
                    })
                ]
            }),
            showAddCity && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddCitytoRegion__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                setShowAddCity: setShowAddCity,
                cities: cities,
                all_cities: all_cities,
                onAddCity: onAddCity
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegionDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const RegionsSelector = ({ setCurrentRegion , regions  })=>{
    const onEdit = (region)=>{
        setCurrentRegion(region);
    };
    const onAddRegion = ()=>{
        setCurrentRegion({
            region_id: "-1",
            region_name: "Update Name",
            region_description: "",
            cities: []
        });
    };
    const onRegionSelected = (region_id)=>{
        console.log(region_id);
        const selected_region = regions.find((region)=>region.region_id.toString() === region_id);
        console.log(selected_region);
        setCurrentRegion(selected_region);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col items-center justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "Regions"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "shadow bg-white px-16 py-8 rounded text-center my-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                            className: "table-auto",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "px-8 py-2",
                                                                children: "#"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                className: "px-8 py-2",
                                                                children: "Region Name"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {})
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                    children: regions.map((region, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "radio",
                                                                            id: "radio-button",
                                                                            name: "radio-group",
                                                                            value: region.region_id,
                                                                            onChange: (e)=>onRegionSelected(e.target.value),
                                                                            className: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-4"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    className: "border px-6 py-2",
                                                                    children: index + 1
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    className: "border px-6 py-2",
                                                                    children: region.region_name
                                                                })
                                                            ]
                                                        }, region.region_id))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8",
                                            onClick: onAddRegion,
                                            children: "Add Region"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegionsSelector);


/***/ }),

/***/ 3123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5334);
/* harmony import */ var _components_SidNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1465);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_RegionSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4445);
/* harmony import */ var _components_RegionDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1759);
/* harmony import */ var _services_regions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(765);
/* harmony import */ var _services_cities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(790);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_RegionDetails__WEBPACK_IMPORTED_MODULE_5__, _services_regions_service__WEBPACK_IMPORTED_MODULE_6__, _services_cities_service__WEBPACK_IMPORTED_MODULE_7__]);
([_components_RegionDetails__WEBPACK_IMPORTED_MODULE_5__, _services_regions_service__WEBPACK_IMPORTED_MODULE_6__, _services_cities_service__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function getServerSideProps() {
    try {
        let regions = await _services_regions_service__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getRegions */ .ZP.getRegions();
        let all_cities = await _services_cities_service__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getCities */ .ZP.getCities();
        return {
            props: {
                regions,
                all_cities
            }
        };
    } catch (err) {
        const regions = [];
        const all_cities = [];
        return {
            props: {
                regions,
                all_cities
            }
        };
    }
}
const RegionsPage = ({ regions , all_cities  })=>{
    const [currentRegion, setCurrentRegion] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-gray-50 h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row h-screen ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SidNav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center bg-gray-50 w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RegionSelector__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                setCurrentRegion: setCurrentRegion,
                                regions: regions
                            }),
                            currentRegion && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RegionDetails__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                currentRegion: currentRegion,
                                all_cities: all_cities
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegionsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, new_city);
    return response.data;
};
const updateCity = async (updated_city)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url + `/${updated_city.city_id}`, updated_city);
    return response.data;
};
const deleteCity = async (id)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](url + `/${id}`);
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


/***/ }),

/***/ 765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports createRegion, getRegions, updateRegion, deleteRegion */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6167);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const url = _config__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_API_URL */ .f + "/api/Regions";
// Define an Axios interceptor to handle errors globally
axios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.response.use((response)=>response, (error)=>{
    console.error(error);
    throw error;
});
const createRegion = async (region)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, region);
    return response.data;
};
const getRegions = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
    return response.data;
};
const updateRegion = async (region)=>{
    console.log("about to update regions");
    console.log(region);
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url + `/${region.region_id}`, region);
    return response.data;
};
const deleteRegion = async (region_id)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](url + `/${region_id}`);
    return response.data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getRegions,
    createRegion,
    updateRegion,
    deleteRegion
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8802:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/solid");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,334,465], () => (__webpack_exec__(3123)));
module.exports = __webpack_exports__;

})();