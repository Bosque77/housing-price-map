import Header from "@/components/Header";
import Head from 'next/head'

const HeatMap = () => {
  return (
    <div>
      <Head>
        <title>HeatMap | Housing Prices Tracker</title>
      </Head>
      <Header />
      <div className="bg-gray-100 h-screen">
        <div className="container mx-auto py-12">
          <div className="flex flex-col items-center justify-center">
            <p className="text-center max-w-screen-lg mb-8">
              This page will be used to show the heatmap of the region statistics
            </p>
            <div className="text-center max-w-screen-lg ">
              <ul>
                <li>select which regions to include in the heatmap</li>
                <li>show heatmap of different regions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatMap;