import Header from "@/components/Header";
import Head from 'next/head'

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
              This page will be used to define the homes that we will be tracking.
            </p>
            <div className="text-center max-w-screen-lg ">
              <ul>
                <li>Add a new home</li>
                <li>Search zillow estimates on that home</li>
                <li>Add a zillow estimate on that home</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousesPage;
