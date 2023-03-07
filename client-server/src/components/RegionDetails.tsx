import { useState } from "react";
import { City, Region } from "types";
import AddCitytoRegion from "./AddCitytoRegion";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface prop {
  currentRegion: Region;
}

const RegionDetails = ({ currentRegion }: prop) => {
  const [state_currentRegion, setCurrentRegion] =
    useState<Region>(currentRegion);
  const [showAddCity, setShowAddCity] = useState<boolean>(false);

  const removeCity = (city_name: string) => {
    console.log("inside remove city");
    const new_region = { ...state_currentRegion };
    new_region.cities = new_region.cities.filter(
      (city: string) => city !== city_name
    );
    setCurrentRegion(new_region);
  };

  const addcity = () => {
    setShowAddCity(true);
  };

  const insertCities = (cities: string[]) => {
    return cities.map((city: string) => (
      <div className="flex " key={city}>
        <div className="px-4 py-2 border grow mr-2">{city}</div>
        <button onClick={() => removeCity(city)} className="active:scale-75">
          <XMarkIcon className="w-6 h-6 cursor-pointer" />{" "}
        </button>
      </div>
    ));
  };

  return (
    <>
      <div className="flex flex-col w-3/4 bg-white px-8 py-8 shadow">
        <h2 className="text-xl font-bold mb-4">{state_currentRegion.region_name}</h2>
        <textarea
          className="
          rounded-lg outline outline-offset-2 outline-1 outline-slate-500 focus:outline-blue-500
                text-start
                h-36"
          onChange={(e) =>
            setCurrentRegion({
              ...state_currentRegion,
              region_description: e.target.value,
            })
          }
          value={state_currentRegion.region_description}
        />
        <label className="mt-4 text-lg font-bold">Cities</label>
        <div className="grid grid-cols-5 gap-x-4 gap-y-4 mt-4 text-center">
          {insertCities(state_currentRegion.cities)}

          <button
            className="px-4 py-2 bg-gray-200 text-slate-700 rounded hover:text-black hover:bg-gray-400 active:scale-95 "
            onClick={addcity}
          >
            Add City
          </button>
        </div>

        <div className="flex flex-row justify-end mt-4">
          <button
            type="button"
            className="mr-4 hover:underline hover:underline-offset-1 text-slate-700 hover:text-black active:scale-95"
          >
            Delete
          </button>
          <button className=" bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 active:scale-95">
            Save
          </button>
        </div>
      </div>
      {showAddCity && (
        <AddCitytoRegion
          setShowAddCity={setShowAddCity}
          currentRegion={state_currentRegion}
          setCurrentRegion={setCurrentRegion}
        />
      )}
    </>
  );
};

export default RegionDetails;
