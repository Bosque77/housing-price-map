import Header from "@/components/Header";
import SideNav from "@/components/SidNav";
import CreateCity from "@/components/CreateCity";
import { Region } from "types";

import { regions } from "@/data/ex_data.js";
import { useState } from "react";
import RegionsSelector from "@/components/RegionSelector";
import Regiondetails from "@/components/RegionDetails";


const RegionsPage = () => {
  const [currentRegion, setCurrentRegion] = useState<Region | undefined>(
    undefined
  );



  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <div className="flex flex-row h-screen ">
        <SideNav />
        <div className="flex flex-col items-center bg-gray-50 w-full">
          <RegionsSelector setCurrentRegion={setCurrentRegion} />
          {currentRegion  && <Regiondetails currentRegion={currentRegion} /> }
        </div>
      </div>
    </div>
  );
};



export default RegionsPage;
