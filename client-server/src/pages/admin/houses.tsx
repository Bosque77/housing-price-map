import Header from "@/components/Header";
import Head from "next/head";
import SideNav from "@/components/SidNav";

import CreateHouse from "@/components/CreateHouse";

import { cities, homes } from "@/data/ex_data.js";
import { useState } from "react";

const HousesPage = () => {

  const [showCreateHouse, setShowCreateHouse] = useState(true);

  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <div className="flex flex-row h-screen ">
        <SideNav />
        <div className="flex flex-row justify-center w-full bg-gray-50">
          <HousesComponent setShowCreateHouse = {setShowCreateHouse}/>
        </div>
        {showCreateHouse && <CreateHouse setShowCreateHouse = {setShowCreateHouse} />}
      </div>
      
     
    </div>
  );
};

interface prop {
  setShowCreateHouse: React.Dispatch<React.SetStateAction<boolean>>,
}


const HousesComponent = ({setShowCreateHouse}:prop) => {

  const onShowHouse = ()  => {
    console.log('on show house')
    setShowCreateHouse(true)
  }


  return (
    <div>
      <div>
        <div className=" mx-auto py-12">
          <div className="flex flex-col items-center justify-center">
            <div className="flex mb-6">
              <label className="mr-3 content-center text-lg">Select City</label>
              <select className="border px-4 bg-white text-lg">
                <option value="1">San Francisco</option>
                <option value="2">Los Angelos</option>
                <option value="3">Berkley</option>
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
                  {homes.map((home) => (
                    <tr key={home.home_id}>
                      <td className="border px-4 py-2">{home.home_id}</td>
                      <td className="border px-4 py-2">{home.street}</td>
                      <td className="border px-4 py-2">{home.sq_ft}</td>
                      <td className="border px-4 py-2">{home.num_of_bed}</td>
                      <td className="border px-4 py-2">{home.num_of_bath}</td>
                      <td className="px-4 py-2">Edit</td>
                      <td className="px-4 py-2">Delete</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="rounded shadow bg-slate-200 px-4 py-2 mt-6 hover:bg-black hover:text-white active:scale-95" onClick={() => onShowHouse()}>
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
