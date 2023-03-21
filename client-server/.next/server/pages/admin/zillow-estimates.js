"use strict";
(() => {
var exports = {};
exports.id = 622;
exports.ids = [622];
exports.modules = {

/***/ 347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ZillowEstimates)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
;// CONCATENATED MODULE: ./src/components/ZillowEstimateRow.tsx



const ZillowEstimateRow = ({ zillowEstimate , onDelete , onUpdate  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
        className: "border-b border-gray-200 hover:bg-gray-100",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "py-3 px-6 text-left whitespace-nowrap",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "font-medium",
                        children: [
                            "$",
                            zillowEstimate.zestimate.toFixed(2)
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "py-3 px-6 text-left",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: zillowEstimate.date
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "py-3 px-6 text-left",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: zillowEstimate.home_id
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "py-3 px-6 text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex item-center justify-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "w-6 h-6 text-yellow-500 transition-colors duration-150 hover:text-yellow-600",
                            onClick: ()=>onUpdate(zillowEstimate),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineEdit, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "w-6 h-6 text-red-500 ml-4 transition-colors duration-150 hover:text-red-600",
                            onClick: ()=>onDelete(zillowEstimate.zillow_price_id),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiDeleteBin6Line, {})
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_ZillowEstimateRow = (ZillowEstimateRow);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/ZillowEstimateForm.tsx


const ZillowEstimateForm = ({ onSubmit , zillowEstimateToEdit , houses  })=>{
    const [zestimate, setZestimate] = (0,external_react_.useState)(undefined);
    const [date, setDate] = (0,external_react_.useState)(undefined);
    const [home_id, setHomeId] = (0,external_react_.useState)(undefined);
    (0,external_react_.useEffect)(()=>{
        if (zillowEstimateToEdit) {
            setZestimate(zillowEstimateToEdit.zestimate);
            setDate(zillowEstimateToEdit.date);
            setHomeId(zillowEstimateToEdit.home_id);
        }
    }, [
        zillowEstimateToEdit
    ]);
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (!zestimate || !date || !home_id) return;
        onSubmit({
            zestimate,
            date,
            home_id
        });
        setZestimate(undefined);
        setDate(undefined);
        setHomeId(undefined);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fixed inset-0 bg-black opacity-50 z-10",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex justify-center items-center h-screen",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: "bg-white p-8 rounded-lg w-1/3",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "block text-gray-700 text-sm font-bold mb-2",
                                children: "Zestimate"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                type: "number",
                                value: zestimate,
                                onChange: (e)=>setZestimate(e.target.valueAsNumber)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "block text-gray-700 text-sm font-bold mb-2",
                                children: "Date"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                type: "date",
                                value: date,
                                onChange: (e)=>setDate(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "block text-gray-700 text-sm font-bold mb-2",
                                children: "Home ID"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                value: home_id,
                                onChange: (e)=>setHomeId(parseInt(e.target.value)),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "",
                                        children: "Select a house"
                                    }),
                                    houses.map((house)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: house.home_id,
                                            children: house.home_id
                                        }, house.home_id))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                            type: "submit",
                            children: zillowEstimateToEdit ? "Update" : "Create"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_ZillowEstimateForm = (ZillowEstimateForm);

;// CONCATENATED MODULE: ./src/components/ZillowEstimates.tsx




const ZillowEstimates = ({ zillowEstimates , houses , onCreate , onUpdate , onDelete  })=>{
    const [isFormVisible, setIsFormVisible] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full p-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4",
                onClick: ()=>setIsFormVisible(true),
                children: "Create New"
            }),
            zillowEstimates.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                className: "w-full table-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            className: "bg-gray-200 text-gray-600 uppercase text-sm leading-normal",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    className: "py-3 px-6 text-left",
                                    children: "Zestimate"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    className: "py-3 px-6 text-left",
                                    children: "Date"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    className: "py-3 px-6 text-left",
                                    children: "Home ID"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    className: "py-3 px-6 text-center",
                                    children: "Actions"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                        className: "text-gray-600 text-sm font-light",
                        children: zillowEstimates.map((zillowEstimate)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ZillowEstimateRow, {
                                zillowEstimate: zillowEstimate,
                                onDelete: onDelete,
                                onUpdate: onUpdate
                            }, zillowEstimate.zillow_price_id))
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mt-4",
                role: "alert",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-bold",
                        children: "No Zillow Estimates"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm",
                        children: "No Zillow estimates exist right now. Please add one using the form above."
                    })
                ]
            }),
            isFormVisible && /*#__PURE__*/ jsx_runtime_.jsx(components_ZillowEstimateForm, {
                onSubmit: onCreate,
                houses: houses
            })
        ]
    });
};
/* harmony default export */ const components_ZillowEstimates = (ZillowEstimates);


/***/ }),

/***/ 8235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useZillowEstimates)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_zillow_estimates_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1677);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_zillow_estimates_service__WEBPACK_IMPORTED_MODULE_1__]);
_services_zillow_estimates_service__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useZillowEstimates = (initialZillowEstimates)=>{
    const [zillowEstimates, setZillowEstimates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialZillowEstimates);
    const createZillowEstimate = async (newEstimate)=>{
        try {
            const createdEstimate = await _services_zillow_estimates_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].createZillowEstimate */ .Z.createZillowEstimate(newEstimate);
            setZillowEstimates([
                ...zillowEstimates,
                createdEstimate
            ]);
        } catch (error) {
            console.error("Error creating Zillow Estimate:", error);
        // Display error message to user
        }
    };
    const updateZillowEstimate = async (updatedEstimate)=>{
        try {
            await _services_zillow_estimates_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateZillowEstimate */ .Z.updateZillowEstimate(updatedEstimate);
            setZillowEstimates(zillowEstimates.map((estimate)=>estimate.zillow_price_id === updatedEstimate.zillow_price_id ? updatedEstimate : estimate));
        } catch (error) {
            console.error("Error updating Zillow Estimate:", error);
        // Display error message to user
        }
    };
    const deleteZillowEstimate = async (zillowPriceId)=>{
        try {
            await _services_zillow_estimates_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteZillowEstimate */ .Z.deleteZillowEstimate(zillowPriceId);
            setZillowEstimates(zillowEstimates.filter((estimate)=>estimate.zillow_price_id !== zillowPriceId));
        } catch (error) {
            console.error("Error deleting Zillow Estimate:", error);
        // Display error message to user
        }
    };
    return {
        zillowEstimates,
        createZillowEstimate,
        updateZillowEstimate,
        deleteZillowEstimate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1106:
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
/* harmony import */ var _components_ZillowEstimates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(347);
/* harmony import */ var _services_zillow_estimates_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1677);
/* harmony import */ var _services_homes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7686);
/* harmony import */ var _hooks_useZillowEstimates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_zillow_estimates_service__WEBPACK_IMPORTED_MODULE_4__, _services_homes_service__WEBPACK_IMPORTED_MODULE_5__, _hooks_useZillowEstimates__WEBPACK_IMPORTED_MODULE_6__]);
([_services_zillow_estimates_service__WEBPACK_IMPORTED_MODULE_4__, _services_homes_service__WEBPACK_IMPORTED_MODULE_5__, _hooks_useZillowEstimates__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// Fetch the houses data in the getServerSideProps function
async function getServerSideProps() {
    try {
        let zillowEstimates = await _services_zillow_estimates_service__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getZillowEstimates */ .Z.getZillowEstimates();
        let houses = await _services_homes_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getAllHomes */ .ZP.getAllHomes();
        return {
            props: {
                zillowEstimates,
                houses
            }
        };
    } catch (err) {
        const zillowEstimates = [];
        const houses = [];
        return {
            props: {
                zillowEstimates,
                houses
            }
        };
    }
}
const ZillowEstimatesPage = ({ zillowEstimates , houses  })=>{
    const { zillowEstimates: zEstimates , createZillowEstimate , updateZillowEstimate , deleteZillowEstimate  } = (0,_hooks_useZillowEstimates__WEBPACK_IMPORTED_MODULE_6__/* .useZillowEstimates */ .T)(zillowEstimates);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-gray-50 h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row h-screen",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SidNav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col items-center bg-gray-50 w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ZillowEstimates__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            zillowEstimates: zEstimates,
                            houses: houses,
                            onCreate: createZillowEstimate,
                            onUpdate: updateZillowEstimate,
                            onDelete: deleteZillowEstimate
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZillowEstimatesPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1677:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6167);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const url = _config__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_API_URL */ .f + "/api/Zillow-Estimates";
// Define an Axios interceptor to handle errors globally
axios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.response.use((response)=>response, (error)=>{
    console.error(error);
    throw error;
});
const getZillowEstimates = async ()=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
    return response.data;
};
const createZillowEstimate = async (zillowEstimate)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, zillowEstimate);
    return response.data;
};
const updateZillowEstimate = async (zillowEstimate)=>{
    const zillow_price_id = zillowEstimate.zillow_price_id;
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${url}/${zillow_price_id}`, zillowEstimate);
    return response.data;
};
const deleteZillowEstimate = async (zillow_price_id)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](`${url}/${zillow_price_id}`);
    return response.data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getZillowEstimates,
    createZillowEstimate,
    updateZillowEstimate,
    deleteZillowEstimate
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,334,465,686], () => (__webpack_exec__(1106)));
module.exports = __webpack_exports__;

})();