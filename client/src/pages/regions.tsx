import Header from "@/components/Header";


const Regions = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 h-screen">
        <div className="container mx-auto py-12">
          <div className="flex flex-col items-center justify-center">
            <p className="text-center max-w-screen-lg mb-8">
                This page will be used to define the regions that we will be tracking.
            </p>
            <div className="text-center max-w-screen-lg ">
                <ul>
                    <li>see current regions</li>
                    <li>create new regions</li>
                    <li>view region statistics</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regions;