"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 3470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const cities_url = "http://flip1.engr.oregonstate.edu:9178/dropdown_cities";
const CreateHouse = ({ setShowCreateHouse , currentHouse , currentCity , cities  })=>{
    const [street, setStreet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [zip, setZip] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [sq_ft, setSqft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [num_of_bed, setBeds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [num_of_bath, setBaths] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [year_built, setYear] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [lat, setLat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [lng, setLng] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentCity) {
            setCity(currentCity.city_name);
        }
        if (currentHouse) {
            setStreet(currentHouse.street);
            setZip(currentHouse.zip);
            setSqft(currentHouse.sq_ft.toString());
            setBeds(currentHouse.num_of_bed.toString());
            setBaths(currentHouse.num_of_bath.toString());
            setCity(currentHouse.city_name);
            setYear(currentHouse.year_built.toString());
            setLat(currentHouse.lat.toString());
            setLng(currentHouse.lng.toString());
        }
    }, [
        currentHouse
    ]);
    const onEditHouse = async ()=>{
        console.log("inside on edit house");
        const homes_url = "http://flip1.engr.oregonstate.edu:9178/Homes";
        try {
            const response = await fetch(homes_url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    home_id: currentHouse?.home_id,
                    street: street,
                    sq_ft: sq_ft,
                    num_of_bed: num_of_bed,
                    num_of_bath: num_of_bath,
                    year_built: year_built,
                    lat: lat,
                    lng: lng,
                    zip: zip,
                    city_name: city
                })
            });
            if (response.ok) {
                console.log("house edited successfully");
                setShowCreateHouse(false);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const onCreateHouse = async ()=>{
        console.log("inside on create house");
        const homes_url = "http://flip1.engr.oregonstate.edu:9178/Homes";
        try {
            const response = await fetch(homes_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    street: street,
                    sq_ft: sq_ft,
                    num_of_bed: num_of_bed,
                    num_of_bath: num_of_bath,
                    year_built: year_built,
                    lat: lat,
                    lng: lng,
                    zip: zip,
                    city_name: city
                })
            });
            if (response.ok) {
                console.log("house created successfully");
                setShowCreateHouse(false);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const insertCities = ()=>{
        return cities.map((city)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: city.city_name,
                children: city.city_name
            }, city.city_id));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "fixed h-screen w-screen flex items-center justify-center ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white px-8 py-8 z-10 rounded flex flex-col items-center",
                children: [
                    currentHouse ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-xl text-center",
                        children: "Edit House"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-xl text-center",
                        children: "Add House"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-2 gap-x-2 gap-y-2 mt-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "street",
                                        className: "block text-sm font-medium text-gray-700 text-left pl-2",
                                        children: "Street"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        name: "street",
                                        id: "street",
                                        value: street,
                                        onChange: (e)=>setStreet(e.target.value),
                                        className: " border rounded-md pl-2 pr-12 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left",
                                        placeholder: "Street"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "city",
                                        className: "block text-sm font-medium text-gray-700 text-left pl-2",
                                        children: "City"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                        className: " border rounded-md pl-2 pr-12 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left",
                                        placeholder: "City",
                                        value: currentCity?.city_name,
                                        onChange: (e)=>setCity(e.target.value),
                                        children: insertCities()
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "zip",
                                        className: "block text-sm font-medium text-gray-700 text-left pl-2",
                                        children: "Zipcode"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        name: "zip",
                                        id: "zip",
                                        value: zip,
                                        onChange: (e)=>setZip(e.target.value.toString()),
                                        className: " border rounded-md pl-2 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left",
                                        placeholder: "Zipcode"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "sq_ft",
                                        className: "block text-sm font-medium text-gray-700 text-left pl-2",
                                        children: "Square Feet"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        name: "sq_ft",
                                        id: "sq_ft",
                                        value: sq_ft,
                                        onChange: (e)=>setSqft(e.target.value.toString()),
                                        className: " border rounded-md pl-2 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left",
                                        placeholder: "Square Feet"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "num_of_bed",
                                        className: "block text-sm font-medium text-gray-700 text-left pl-2",
                                        children: "Number of Beds"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        name: "num_of_bed",
                                        id: "num_of_bed",
                                        value: num_of_bed,
                                        onChange: (e)=>setBeds(e.target.value.toString()),
                                        className: " border rounded-md pl-2 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left",
                                        placeholder: "Number of Beds"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "num_of_baths",
                                        className: "block text-sm font-medium text-gray-700 text-left pl-2",
                                        children: "Number of Baths"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        name: "num_of_bath",
                                        id: "num_of_bath",
                                        value: num_of_bath,
                                        onChange: (e)=>setBaths(e.target.value.toString()),
                                        className: " border rounded-md pl-2 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left",
                                        placeholder: "Number of Baths"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "year_built",
                                        className: "block text-sm font-medium text-gray-700 text-left pl-2",
                                        children: "Year Built"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        name: "year_built",
                                        id: "year_built",
                                        value: year_built,
                                        onChange: (e)=>setYear(e.target.value.toString()),
                                        className: " border rounded-md pl-2 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left",
                                        placeholder: "2023"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col w-32",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "lat",
                                                className: "block text-sm font-medium text-gray-700 text-left pl-2",
                                                children: "Latitude"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "number",
                                                name: "lat",
                                                id: "lat",
                                                value: lat,
                                                onChange: (e)=>setLat(e.target.value.toString()),
                                                className: " border rounded-md pl-2 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left",
                                                placeholder: "Latitude"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col w-32",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "lng",
                                                className: "block text-sm font-medium text-gray-700 text-left pl-2",
                                                children: "Longitude"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "number",
                                                name: "lng",
                                                id: "lng",
                                                value: lng,
                                                onChange: (e)=>setLng(e.target.value.toString()),
                                                className: " border rounded-md pl-2 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left",
                                                placeholder: "Longitude"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    currentHouse ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "rounded px-4 py-2 shadow text-white bg-black mt-8 hover:bg-black active:scale-95 mr-6",
                        onClick: onEditHouse,
                        children: "Submit"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "rounded px-4 py-2 shadow text-white bg-black mt-8 hover:bg-black active:scale-95 mr-6",
                        onClick: onCreateHouse,
                        children: "Submit"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full justify-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "text-black mt-8 active:scale-95 hover:text-black hover:underline hover:underline-offset-1 ",
                            onClick: ()=>setShowCreateHouse(false),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateHouse);


/***/ }),

/***/ 3075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DeleteModal = ({ setShouldDelete , setShowDeleteModal  })=>{
    const onDeleteSelected = ()=>{
        setShowDeleteModal(false);
    };
    const onCancelSelected = ()=>{
        setShowDeleteModal(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "fixed h-screen w-screen flex items-center justify-center ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white px-8 py-8 z-20 rounded flex flex-col items-center",
                children: [
                    "Are you sure you want to delete this item ?",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex mt-8 justify-end text-right w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "px-4 py-2 bg-white text-slate-700 rounded mr-2 hover:text-black hover:underline active:scale-95",
                                onClick: onCancelSelected,
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "px-4 py-2 bg-rose-500 text-white rounded hover:bg-black active:scale-95",
                                onClick: onDeleteSelected,
                                children: "Delete"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 bg-black opacity-50 "
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteModal);


/***/ }),

/***/ 1752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_homes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7686);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_homes_service__WEBPACK_IMPORTED_MODULE_1__]);
_services_homes_service__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const HousesComponent = ({ setShowCreateHouse , setCurrentHouse , setShowDeleteModal , setCurrentCity , cities , homes  })=>{
    const [homes_state, setHomes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(homes);
    const onShowHouse = ()=>{
        console.log("on show house");
        setCurrentHouse(undefined);
        setShowCreateHouse(true);
    };
    const editHouse = (house)=>{
        console.log("inside editHouse");
        console.log(house);
        setCurrentHouse(house);
        setShowCreateHouse(true);
    };
    const onDelete = async (house)=>{
        if (house.home_id) {
            try {
                console.log("inside the on delete yo");
                const res = await _services_homes_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteHome */ .ZP.deleteHome(house.home_id);
                const new_homes = homes_state.filter((h)=>h.home_id !== house.home_id);
                setHomes(new_homes);
                console.log(res);
            } catch (e) {
                console.log(e);
            }
        }
    };
    const insertCities = ()=>{
        return cities.map((city)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: city.city_id,
                children: city.city_name
            }, city.city_id));
    };
    const onCitySelect = async (city_id)=>{
        const current_city = cities.find((city)=>city.city_id === parseInt(city_id));
        if (current_city) {
            setCurrentCity(current_city);
            const query_data = {
                cityid: city_id
            };
            const queryParams = new URLSearchParams(query_data).toString();
            const homes_url = `http://flip1.engr.oregonstate.edu:9178/Homes?${queryParams}`;
            console.log(homes_url);
            const res_2 = await fetch(homes_url);
            homes = await res_2.json();
            console.log(homes);
            setHomes(homes);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " mx-auto py-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex mb-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "mr-3 content-center text-lg",
                                    children: "Select City"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                    className: "border px-4 bg-white text-lg",
                                    onChange: (e)=>onCitySelect(e.target.value),
                                    children: insertCities()
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "shadow bg-white px-8 py-8 rounded text-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                    className: "table-auto ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "px-4 py-2",
                                                        children: "ID"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "px-4 py-2",
                                                        children: "Street"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "px-4 py-2",
                                                        children: "Sq Ft"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "px-4 py-2",
                                                        children: "# of Beds"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                        className: "px-4 py-2",
                                                        children: "# of Baths"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                            children: homes_state.map((home)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "border px-4 py-2",
                                                            children: home.home_id
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "border px-4 py-2",
                                                            children: home.street
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "border px-4 py-2",
                                                            children: home.sq_ft
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "border px-4 py-2",
                                                            children: home.num_of_bed
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "border px-4 py-2",
                                                            children: home.num_of_bath
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "px-4 py-2 ",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                className: "hover:underline hover:underline-offset-1",
                                                                onClick: ()=>editHouse(home),
                                                                children: "Edit"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            className: "px-4 py-2",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                className: "hover:underline hover:underline-offset-1",
                                                                onClick: ()=>onDelete(home),
                                                                children: "Delete"
                                                            })
                                                        })
                                                    ]
                                                }, home.home_id))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4",
                                    onClick: ()=>onShowHouse(),
                                    children: "Add House"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HousesComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9887:
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
/* harmony import */ var _components_CreateHouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3470);
/* harmony import */ var _components_DeleteModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3075);
/* harmony import */ var _services_cities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(790);
/* harmony import */ var _services_homes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7686);
/* harmony import */ var _components_HousesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1752);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_cities_service__WEBPACK_IMPORTED_MODULE_5__, _services_homes_service__WEBPACK_IMPORTED_MODULE_6__, _components_HousesTable__WEBPACK_IMPORTED_MODULE_7__]);
([_services_cities_service__WEBPACK_IMPORTED_MODULE_5__, _services_homes_service__WEBPACK_IMPORTED_MODULE_6__, _components_HousesTable__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// import { cities, homes } from "@/data/ex_data.js";

async function getServerSideProps() {
    try {
        let cities = await _services_cities_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getCities */ .ZP.getCities();
        console.log(cities);
        const city_id = cities[0].city_id;
        const homes = await _services_homes_service__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getHomes */ .ZP.getHomes(city_id);
        return {
            props: {
                cities,
                homes
            }
        };
    } catch (err) {
        const cities = [];
        const homes = [];
        return {
            props: {
                cities,
                homes
            }
        };
    }
}
const HousesPage = ({ cities , homes  })=>{
    const [showCreateHouse, setShowCreateHouse] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [currentHouse, setCurrentHouse] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(undefined);
    const [currentCity, setCurrentCity] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(undefined);
    const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [shouldDelete, setShouldDelete] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [should_delete_object_name, setShouldDeleteObjectName] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-gray-50 h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row h-screen ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SidNav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col justify-start w-full bg-gray-50 mt-4",
                        children: [
                            cities.length === 0 && homes.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col justify-center items-center w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-2xl font-bold",
                                        children: "No cities or homes found"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-2xl font-bold",
                                        children: "Please add a city and a home"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HousesTable__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                setShowCreateHouse: setShowCreateHouse,
                                setCurrentHouse: setCurrentHouse,
                                setShowDeleteModal: setShowDeleteModal,
                                setCurrentCity: setCurrentCity,
                                cities: cities,
                                homes: homes
                            })
                        ]
                    }),
                    showCreateHouse && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CreateHouse__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        setShowCreateHouse: setShowCreateHouse,
                        currentHouse: currentHouse,
                        currentCity: currentCity,
                        cities: cities
                    }),
                    showDeleteModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DeleteModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        setShowDeleteModal: setShowDeleteModal,
                        setShouldDelete: setShouldDelete
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HousesPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports createHome, getHomes, updateHome, deleteHome */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6167);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const url = _config__WEBPACK_IMPORTED_MODULE_1__/* .NEXT_API_URL */ .f + "/Homes";
// Define an Axios interceptor to handle errors globally
axios__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.response.use((response)=>response, (error)=>{
    console.error(error);
    throw error;
});
const createHome = async (house)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, house);
    return response.data;
};
const getHomes = async (city_id)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, {
        params: {
            city_id
        }
    });
    return response.data;
};
const updateHome = async (house)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, house);
    return response.data;
};
const deleteHome = async (home_id)=>{
    console.log("inside delete home front end");
    console.log(url);
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
    createHome
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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,334,465,790], () => (__webpack_exec__(9887)));
module.exports = __webpack_exports__;

})();