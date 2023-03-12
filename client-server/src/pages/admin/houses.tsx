import Header from "@/components/Header";
import SideNav from "@/components/SidNav";
import { City, House } from "types";
import CreateHouse from "@/components/CreateHouse";
import DeleteModal from "@/components/DeleteModal";
import citiesService from "@/services/cities-service";
import homesService from "@/services/homes-service";
import HousesComponent from "@/components/HousesTable";

// import { cities, homes } from "@/data/ex_data.js";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  try {
    let cities = await citiesService.getCities();
    const city_id = cities[0].city_id;
    const input_homes = await homesService.getHomes(city_id);
    return { props: { cities, input_homes } };
  } catch (err) {
    const cities = [] as City[];
    const input_homes = [] as any[];
    return { props: { cities, input_homes } };
  }
}

interface prop {
  cities: City[];
  input_homes: House[];
}

const HousesPage = ({ cities, input_homes }: prop) => {
  console.log("re-rendering page");
  const [homes, setStateHomes] = useState(input_homes);
  const [showCreateHouse, setShowCreateHouse] = useState(false);
  const [currentHouse, setCurrentHouse] = useState(undefined);
  const [currentCity, setCurrentCity] = useState<City | undefined>(undefined);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [shouldDelete, setShouldDelete] = useState(false);
  const [should_delete_object_name, setShouldDeleteObjectName] = useState("");

  const updateHomes = async () => {
    // window.location.reload()
    if (currentCity) {
      console.log("inside call back function updating homes");
      const updated_homes = await homesService.getHomes(
        currentCity.city_id as number
      );
      console.log(updated_homes);

      setStateHomes(updated_homes);
    } else {
      const updated_homes = await homesService.getHomes(
        cities[0].city_id as number
      );
      console.log(updated_homes);

      setStateHomes(updated_homes);
    }
  };

  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <div className="flex flex-row h-screen ">
        <SideNav />

        <div className="flex flex-col justify-start w-full bg-gray-50 mt-4">
          {cities.length === 0 && homes.length === 0 && (
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-2xl font-bold">No cities or homes found</h1>
              <h1 className="text-2xl font-bold">
                Please add a city and a home
              </h1>
            </div>
          )}
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
            updateHomes={updateHomes}
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

export default HousesPage;
