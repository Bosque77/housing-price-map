import Header from "@/components/Header";

import { zillow_estimates } from "@/data/ex_data";

const filtered_estimates = zillow_estimates.filter(
  (estimate) => estimate.zillow_estimate_id === 1
);

const ZillowEstimates = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 h-screen">
        <div className="container mx-auto py-12">
          <div className="flex flex-col items-center justify-center">
            <p className="text-center max-w-screen-lg mb-8">
              This page will show the zillow estimates for each house
            </p>
            <div className="text-center max-w-screen-lg ">
              <div>
                <h1 className="text-2xl font-bold mb-4">List of Zestimates</h1>
                <div className="flex flex-col">
                  <label>Lookup House</label>
                  <input className="mt-2" type="text" placeholder="City" />
                  <input className="mt-2" type="text" placeholder="State" />
                  <input className="mt-2" type="text" placeholder="Zipcode" />
                  <div className="my-4">Currently Displaying House 1</div>
                  <table className=" table-auto w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Zillow Price ID</th>
                        <th className="px-4 py-2">Zestimate</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Home ID</th>
                 
                      </tr>
                    </thead>
                    <tbody>
                      {filtered_estimates.map((estimate) => (
                        <tr key={estimate.zillow_estimate_id}>
                          <td className="border px-4 py-2">
                            {estimate.zillow_estimate_id}
                          </td>
                          <td className="border px-4 py-2">
                            {estimate.zestimate}
                          </td>
                          <td className="border px-4 py-2">{estimate.date}</td>
                          <td className="border px-4 py-2">
                            {estimate.home_id}
                          </td>
                          <td className="px-4 py-2">
                            <button className="">
                              Edit
                            </button>
                          </td>
                          <td>
                            <button className="">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                    Add Zestimate
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

export default ZillowEstimates;
