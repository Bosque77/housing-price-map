import homesService from "@/services/homes-service";
import { useState } from "react";
import { City, House } from "types";

interface prop {
    setShowCreateHouse: React.Dispatch<React.SetStateAction<boolean>>;
    setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentCity: React.Dispatch<React.SetStateAction<any>>;
    cities: City[];
    homes: any;
    setCurrentHouse: React.Dispatch<React.SetStateAction<any>>;
  }
  
  const HousesComponent = ({
    setShowCreateHouse,
    setCurrentHouse,
    setShowDeleteModal,
    setCurrentCity,
    cities,
    homes,
  }: prop) => {
    const [homes_state, setHomes] = useState(homes);
  
    const onShowHouse = () => {
      console.log("on show house");
      setCurrentHouse(undefined);
      setShowCreateHouse(true);
    };
  
    const editHouse = (house: House) => {
      console.log("inside editHouse");
      console.log(house);
      setCurrentHouse(house);
      setShowCreateHouse(true);
    };
  
    const onDelete = async (house: House) => {
      if (house.home_id) {
        try{
          console.log('inside the on delete yo')
          const res = await homesService.deleteHome(house.home_id);
          const new_homes = homes_state.filter((h : House) => h.home_id !== house.home_id);
          setHomes(new_homes)
          console.log(res);
        } catch (e) {
          console.log(e);
        }
      }
    };
  
    const insertCities = () => {
      return cities.map((city: any) => (
        <option value={city.city_id} key={city.city_id}>
          {city.city_name}
        </option>
      ));
    };
  
    const onCitySelect = async (city_id: string) => {
      const current_city = cities.find(
        (city) => city.city_id === parseInt(city_id)
      );
      if (current_city) {
        setCurrentCity(current_city);
        const query_data = {
          cityid: city_id,
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
  
    return (
      <div>
        <div>
          <div className=" mx-auto py-12">
            <div className="flex flex-col items-center justify-center">
              <div className="flex mb-6">
                <label className="mr-3 content-center text-lg">Select City</label>
                <select
                  className="border px-4 bg-white text-lg"
                  onChange={(e) => onCitySelect(e.target.value)}
                >
                  {insertCities()}
                </select>
              </div>
  
              {/* input a table of the homes below */}
              <div className="shadow bg-white px-8 py-8 rounded text-center">
                <table className="table-auto ">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">ID</th>
                      <th className="px-4 py-2">Street</th>
                      <th className="px-4 py-2">Sq Ft</th>
                      <th className="px-4 py-2"># of Beds</th>
                      <th className="px-4 py-2"># of Baths</th>
                    </tr>
                  </thead>
                  <tbody>
                    {homes_state.map((home: House) => (
                      <tr key={home.home_id}>
                        <td className="border px-4 py-2">{home.home_id}</td>
                        <td className="border px-4 py-2">{home.street}</td>
                        <td className="border px-4 py-2">{home.sq_ft}</td>
                        <td className="border px-4 py-2">{home.num_of_bed}</td>
                        <td className="border px-4 py-2">{home.num_of_bath}</td>
                        <td className="px-4 py-2 ">
                          <button
                            className="hover:underline hover:underline-offset-1"
                            onClick={() => editHouse(home)}
                          >
                            Edit
                          </button>
                        </td>
                        <td className="px-4 py-2">
                          <button
                            className="hover:underline hover:underline-offset-1"
                            onClick={() => onDelete(home)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => onShowHouse()}
                >
                  Add House
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default HousesComponent;