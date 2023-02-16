import Header from "@/components/Header";

const Regions = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 h-screen">
        <div className="container mx-auto py-12">
          <div className="flex flex-col items-center justify-center">
            <p className="text-center max-w-screen-lg mb-8">
              This page will be used to define the regions that we will be
              tracking.
            </p>
            <div className="text-center max-w-screen-lg ">
              <div>
                <h1 className="text-2xl font-bold mb-4">List of Regions</h1>
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">#</th>
                      <th className="px-4 py-2">Region</th>
                      <th className="px-4 py-2">City 1</th>
                      <th className="px-4 py-2">City 2</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">1</td>
                      <td className="border px-4 py-2">Bay Area</td>
                      <td className="border px-4 py-2">San Francisco</td>
                      <td className="border px-4 py-2">Berkley</td>
                      <td className="px-4">Edit</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">2</td>
                      <td className="border px-4 py-2">LA</td>
                      <td className="border px-4 py-2">Long Beach</td>
                      <td className="border px-4 py-2">Los Angelos</td>
                      <td className="px-4">Edit</td>
                    </tr>
                  </tbody>
                </table>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                  Add Region
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regions;
