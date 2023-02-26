import Header from "@/components/Header";
import SideNav from "@/components/SidNav";
import CreateCity from "@/components/CreateCity";
import { Region } from "types";

import { regions } from "@/data/ex_data.js";
import { useState } from "react";

const RegionsPage = () => {
  const [currentRegion, setCurrentRegion] = useState<Region | undefined>(
    undefined
  );

  const insertCities = (cities: any) => {
    return cities.map((city: any) => <div className="px-4 py-2 border">{city}</div>);
  };

  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <div className="flex flex-row h-screen ">
        <SideNav />
        <div className="flex flex-col items-center w-full bg-gray-50 mx-auto">
          <RegionsComponent setCurrentRegion={setCurrentRegion} />
          {currentRegion && (
            <div className="flex flex-col w-3/4 bg-white px-4 py-4 shadow">
              <h2 className="text-xl font-bold ">
                {currentRegion.region_name}
              </h2>
              <textarea
                className="mt-4 p-2 w-full rounded-lg outline outline-offset-2 outline-1 outline-blue-500

                h-32"
                value={currentRegion.region_description}
              />
              <label className="mt-4 text-lg font-bold">Cities</label>
              <div className="grid grid-flow-col auto-cols-max gap-x-4 gap-y-4 w-1/2 mt-4">
                {insertCities(currentRegion.cities)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface prop {
  setCurrentRegion: React.Dispatch<React.SetStateAction<any>>;
}

const RegionsComponent = ({ setCurrentRegion }: prop) => {
  const onEdit = (region: Region) => {
    setCurrentRegion(region);
  };

  const onRegionSelected = (region_id: string) => {
    console.log(region_id);
    const selected_region = regions.find(
      (region) => region.region_id.toString() === region_id
    );
    console.log(selected_region);
    setCurrentRegion(selected_region);
  };

  return (
    <div>
      <div className="w-full">
        <div className="container mx-auto py-12">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center max-w-screen-lg ">
              <div>
                <h1 className="text-2xl font-bold mb-4">Regions</h1>
                <div className="shadow bg-white px-8 py-8 rounded text-center mt-4">
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">City</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {regions.map((region, index) => (
                        <tr key={region.region_id}>
                          <td>
                            <input
                              type="radio"
                              id="radio-button"
                              name="radio-group"
                              value={region.region_id}
                              onChange={(e) => onRegionSelected(e.target.value)}
                              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-4"
                            />{" "}
                          </td>
                          <td className="border px-6 py-2">{index + 1}</td>
                          <td className="border px-6 py-2">
                            {region.region_name}
                          </td>
                          <td className="px-6">
                            <button
                              className="hover:underline hover:underline-offset-1"
                              onClick={() => onEdit(region)}
                            >
                              Edit
                            </button>
                          </td>
                          <td className="pl-6">
                            <button
                              className="hover:underline hover:underline-offset-1"
                              onClick={() => onEdit(region)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
                    Add Region
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionsPage;
