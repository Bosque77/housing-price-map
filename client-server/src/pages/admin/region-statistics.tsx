import Header from "@/components/Header";
import SideNav from "@/components/SidNav";


const RegionStatisticsPage = () => {


  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <div className="flex flex-row h-screen ">
        <SideNav />
        <div className="flex flex-row justify-center w-full bg-gray-50">
          <RegionStatistics />
        </div>
    
      </div>
    </div>
  );
};

const RegionStatistics = () => {
  return (
    <div>
        <div className="container mx-auto py-12 bg-white shadow mt-8 px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center max-w-screen-xl ">
              <div>
                <div className="flex mb-6">
                  <label className="mr-3 content-center">Select Region</label>
                  <select  className="border px-4 py-2 bg-white text-lg mb-8">
                    <option value="1">Bay Area</option>
                    <option value="2">Los Angelos Metro</option>
                  </select>
                </div>
                <div className="flex justify-center">
                  <table className="table-auto w-full">
                    <thead>
                      <tr className="text-sm">
                        <th >ID</th>
                        <th >Region ID</th>
                        <th >Location Description</th>
                        <th >Avg Price per Sq Ft</th>
                        <th >Mean Housing Price</th>
                        <th >5 Year Price Gradient</th>
                        <th >10 Year Price Gradient</th>
                        <th >Median Housing Price</th>
                        <th >Date</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">1</td>
                        <td className="border px-4 py-2">Bay Area</td>
                        <td className="border px-4 py-2">
                          San Francisco and surrounding cities
                        </td>
                        <td className="border px-4 py-2">500</td>
                        <td className="border px-4 py-2">800000</td>
                        <td className="border px-4 py-2">0.05</td>
                        <td className="border px-4 py-2">0.1</td>
                        <td className="border px-4 py-2">700000</td>
                        <td className="border px-4 py-2">2022-01-01</td>
                        <td className="px-4">Edit</td>
                        <td>Delete</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                  Add Region Statistic
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default RegionStatisticsPage;
