import { useState } from "react";

interface prop {
  setShowCreateHouse: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateHouse = ({ setShowCreateHouse }: prop) => {
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [sq_ft, setSqft] = useState("");
  const [num_of_bed, setBeds] = useState("");
  const [num_of_bath, setBaths] = useState("");
  const [city, setCity] = useState("");
  const [year_built, setYear] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  return (
    <div className="fixed h-screen w-screen flex items-center justify-center ">
      <div className="bg-white px-8 py-8 z-10 rounded flex flex-col items-center">
        <h2 className="text-xl text-center">Add House</h2>
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 mt-6">
          <div className="flex flex-col">
            <label
              htmlFor="street"
              className="block text-sm font-medium text-gray-700 text-left pl-2"
            >
              Street
            </label>
            <input
              type="text"
              name="street"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className=" border rounded-md pl-2 pr-12 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left"
              placeholder="Street"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 text-left pl-2"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value.toString())}
              className=" border rounded-md pl-2 pr-12 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left"
              placeholder="City"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-gray-700 text-left pl-2"
            >
              Zipcode
            </label>
            <input
              type="number"
              name="zip"
              id="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value.toString())}
              className=" border rounded-md pl-2  py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left"
              placeholder="Zipcode"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="sq_ft"
              className="block text-sm font-medium text-gray-700 text-left pl-2"
            >
              Square Feet
            </label>
            <input
              type="number"
              name="sq_ft"
              id="sq_ft"
              value={sq_ft}
              onChange={(e) => setSqft(e.target.value.toString())}
              className=" border rounded-md pl-2  py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left"
              placeholder="Square Feet"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="num_of_bed"
              className="block text-sm font-medium text-gray-700 text-left pl-2"
            >
              Number of Beds
            </label>
            <input
              type="number"
              name="num_of_bed"
              id="num_of_bed"
              value={num_of_bed}
              onChange={(e) => setBaths(e.target.value.toString())}
              className=" border rounded-md pl-2  py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left"
              placeholder="Number of Beds"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="num_of_baths"
              className="block text-sm font-medium text-gray-700 text-left pl-2"
            >
              Number of Baths
            </label>
            <input
              type="number"
              name="num_of_bath"
              id="num_of_bath"
              value={num_of_bath}
              onChange={(e) => setBaths(e.target.value.toString())}
              className=" border rounded-md pl-2  py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left"
              placeholder="Number of Baths"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="year_built"
              className="block text-sm font-medium text-gray-700 text-left pl-2"
            >
              Year Built
            </label>
            <input
              type="number"
              name="year_built"
              id="year_built"
              value={year_built}
              onChange={(e) => setYear(e.target.value.toString())}
              className=" border rounded-md pl-2  py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left"
              placeholder="2023"
            />
          </div>
          <div className="grid grid grid-cols-2">
            <div className="flex flex-col w-32">
              <label
                htmlFor="lat"
                className="block text-sm font-medium text-gray-700 text-left pl-2"
              >
                Latitude
              </label>
              <input
                type="number"
                name="lat"
                id="lat"
                value={lat}
                onChange={(e) => setLat(e.target.value.toString())}
                className=" border rounded-md pl-2  py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left"
                placeholder="Latitude"
              />
            </div>
            <div className="flex flex-col w-32">
              <label
                htmlFor="lng"
                className="block text-sm font-medium text-gray-700 text-left pl-2"
              >
                Longitude
              </label>
              <input
                type="number"
                name="lng"
                id="lng"
                value={lat}
                onChange={(e) => setLng(e.target.value.toString())}
                className=" border rounded-md pl-2 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left"
                placeholder="Longitude"
              />
            </div>
          </div>
        </div>

        <button className="rounded px-4 py-2 shadow text-white bg-black mt-8 hover:bg-black active:scale-95 mr-6">
          Submit
        </button>
        <div className="flex  w-full justify-end">
          <button className="text-black mt-8  active:scale-95 hover:text-black hover:underline hover:underline-offset-1 " onClick={() => setShowCreateHouse(false)}>
            Cancel
          </button>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50 "></div>
    </div>
  );
};

export default CreateHouse;
