import Header from "@/components/Header";
import SideNav from "@/components/SidNav";
import CreateCity from "@/components/CreateCity";
import { City } from "types";

import { cities } from "@/data/ex_data.js";
import { useState } from "react";

const CitiesPage = () => {
  const [showCreateCity, setShowCreateCity] = useState(false);
  const [currentCity, setCurrentCity] = useState(undefined);

  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <div className="flex flex-row h-screen ">
        <SideNav />
        <div className="flex flex-row justify-center w-full bg-gray-50">
          <CitiesComponent
            setShowCreateCity={setShowCreateCity}
            setCurrentCity={setCurrentCity}
          />
        </div>
        {showCreateCity && (
          <CreateCity
            setShowCreateCity={setShowCreateCity}
            currentCity={currentCity}
          />
        )}
      </div>
    </div>
  );
};

interface prop {
  setShowCreateCity: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentCity: React.Dispatch<React.SetStateAction<any>>;
}

const CitiesComponent = ({ setShowCreateCity, setCurrentCity }: prop) => {
  const onEdit = (city: City) => {
    setCurrentCity(city);
    setShowCreateCity(true);
  };

  return (
    <div>
      <div className="w-full h-screen">
        <div className="container mx-auto py-12">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center max-w-screen-lg ">
              <div>
                <h1 className="text-2xl font-bold mb-4">Cities</h1>
                <label className="mr-2">Filter By State</label>
                <input
                  placeholder="State"
                  className=" border rounded-md pl-2 py-2 mt-2 focus:outline-none focus:border-indigo-500 focus:border-2 sm:text-sm text-left"
                />
                <div className="shadow bg-white px-8 py-8 rounded text-center mt-4">
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">City</th>
                        <th className="px-4 py-2">State</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cities.map((city, index) => (
                        <tr key={city.city_id}>
                          <td className="border px-4 py-2">{index + 1}</td>
                          <td className="border px-4 py-2">{city.city_name}</td>
                          <td className="border px-4 py-2">{city.state}</td>
                          <td className="px-4">
                            <button
                              className="hover:underline hover:underline-offset-1"
                              onClick={() => onEdit(city)}
                            >
                              Edit
                            </button>
                          </td>
                          <td className="px-4">
                            <button className="hover:underline hover:underline-offset-1">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                    onClick={() => setShowCreateCity(true)}
                  >
                    Add City
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

export default CitiesPage;
