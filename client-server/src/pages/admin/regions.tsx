import Header from "@/components/Header";
import SideNav from "@/components/SidNav";
import CreateCity from "@/components/CreateCity";
import { Region } from "types";

import { regions } from "@/data/ex_data.js";
import { useState } from "react";
import RegionsSelector from "@/components/RegionSelector";
import Regiondetails from "@/components/RegionDetails";
import regionsService from "@/services/regions-service";


export async function getServerSideProps() {
  try {
    let regions = await regionsService.getRegions();
  } catch (err) {
    const regions= [] as Region[];
  }

  const test_data = 25
  return { props: { regions, test_data } };
}

interface props {
  regions: Region[];
  test_data: number;
}

const RegionsPage = ({regions, test_data}:props) => {
  const [currentRegion, setCurrentRegion] = useState<Region | undefined>(
    undefined
  );

  const [state_test_data, setStateTestData] = useState(test_data);





  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <div className="flex flex-row h-screen ">
        <SideNav />
        <div className="flex flex-col items-center bg-gray-50 w-full">
          <div>{state_test_data}</div>
          <button onClick={() => setStateTestData(state_test_data+1)}>click me</button>
          <RegionsSelector setCurrentRegion={setCurrentRegion} />
          {currentRegion  && <Regiondetails currentRegion={currentRegion} /> }
        </div>
      </div>
    </div>
  );
};



export default RegionsPage;
