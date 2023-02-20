import Header from "@/components/Header";

import { cities } from "@/data/ex_data.js";

const Cities = () => {
  return (
    <div>
      <div className="w-full h-screen">
        <div className="container mx-auto py-12">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center max-w-screen-lg ">
              <div>
                <h1 className="text-2xl font-bold mb-4">List of Cities</h1>
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
                        <td className="px-4">Edit</td>
                        <td className="px-4">Delete</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                  Add City
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
