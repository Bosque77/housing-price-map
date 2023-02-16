import Header from "@/components/Header";
import Head from "next/head";

import { cities, homes } from "@/data/ex_data.js";

const HousesPage = () => {
  return (
    <div>
      <Head>
        <title>Homes | Housing Prices Tracker</title>
      </Head>
      <Header />
      <div className="bg-gray-100 h-screen">
        <div className="container mx-auto py-12">
          <div className="flex flex-col items-center justify-center">
            <p className="text-center max-w-screen-lg mb-8">
              This page will be used to define the houses that we will be
              tracking.
            </p>

            <div className="flex mb-6">
              <label className="mr-3 content-center">Select City</label>
              <select className="border px-4 bg-slate-300">
                <option value="1">San Francisco</option>
                <option value="2">Los Angelos</option>
                <option value="3">Berkley</option>
              </select>
            </div>

            {/* input a table of the homes below */}

            <table className="table-fixed w-1/2">
              <thead>
                <tr>
                  <th className="w-1/6">ID</th>
                  <th className="w-2/6">Street</th>
                  <th className="w-1/6">Sq Ft</th>
                  <th className="w-1/6"># of Beds</th>
                  <th className="w-1/6"># of Baths</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="rounded shadow bg-slate-200 px-4 py-2 mt-2 hover:bg-black hover:text-white active:scale-95"> Add House</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousesPage;
