import Header from "@/components/Header";
import Head from "next/head";
import SideNav from "@/components/SidNav";
import { City, House } from "types";
import CreateHouse from "@/components/CreateHouse";
import DeleteModal from "@/components/DeleteModal";

// import { cities, homes } from "@/data/ex_data.js";
import { useEffect, useState } from "react";

const cities_url = "http://flip1.engr.oregonstate.edu:9178/dropdown_cities";

export async function getServerSideProps() {
  console.log(cities_url);
  const res = await fetch(cities_url);
  const cities = await res.json();

  const city_id = cities[0].city_id;
  const query_data = {
    cityid: city_id,
  };

  console.log(query_data);

  const queryParams = new URLSearchParams(query_data).toString();
  const homes_url = `http://flip1.engr.oregonstate.edu:9178/Homes?${queryParams}`;
  console.log(homes_url);
  const res_2 = await fetch(homes_url);
  const homes = await res_2.json();
  console.log(homes);

  // Return data as props...
  return { props: { cities, homes } };
}

interface prop {
  cities: City[];
  homes: any;
}

const HousesPage = ({ cities, homes }: prop) => {
  const [showCreateHouse, setShowCreateHouse] = useState(false);
  const [currentHouse, setCurrentHouse] = useState(undefined);
  const [currentCity, setCurrentCity] = useState(undefined);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [shouldDelete, setShouldDelete] = useState(false);
  const [should_delete_object_name, setShouldDeleteObjectName] = useState("");

  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <div className="flex flex-row h-screen ">
        <SideNav />
        <div className="flex flex-row justify-center w-full bg-gray-50">
          <HousesComponent
            setShowCreateHouse={setShowCreateHouse}
            setCurrentHouse={setCurrentHouse}
            setShowDeleteModal={setShowDeleteModal}
            setCurrentCity={setCurrentCity}
            cities={cities}
            homes={homes}
          />
        </div>
        {showCreateHouse && (
          <CreateHouse
            setShowCreateHouse={setShowCreateHouse}
            currentHouse={currentHouse}
            currentCity={currentCity}
            cities={cities}
          />
        )}
        {showDeleteModal && (
          <DeleteModal
            setShowDeleteModal={setShowDeleteModal}
            setShouldDelete={setShouldDelete}
          />
        )}
      </div>
    </div>
  );
};

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
      const home_id_string = house.home_id.toString();

      const query_data = {
        home_id: home_id_string,
      };

      console.log(query_data);

      const queryParams = new URLSearchParams(query_data).toString();

      const delete_url = `http://flip1.engr.oregonstate.edu:9178/Homes?${queryParams}`;

      try {
        const response = await fetch(delete_url, {
          method: "DELETE",
        });
        if (response.ok) {
          console.log("House deleted successfully");
        } else {
          console.error("Failed to delete house");
        }
      } catch (error) {
        console.error(error);
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

export default HousesPage;
