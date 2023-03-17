import Header from "@/components/Header";
import SideNav from "@/components/SidNav";
import ZillowEstimates from "@/components/ZillowEstimates";
import { ZillowEstimate } from "types";
import zillowEstimatesService from "@/services/zillow-estimates-service";
import { useZillowEstimates } from "@/hooks/useZillowEstimates";

export async function getServerSideProps() {
  try {
    let zillowEstimates = await zillowEstimatesService.getZillowEstimates();
    return { props: { zillowEstimates } };
  } catch (err) {
    const zillowEstimates = [] as ZillowEstimate[];
    return { props: { zillowEstimates } };
  }
}

interface ZillowEstimatesPageProps {
  zillowEstimates: ZillowEstimate[];
}

const ZillowEstimatesPage = ({ zillowEstimates }: ZillowEstimatesPageProps) => {
  const {
    zillowEstimates: zEstimates,
    createZillowEstimate,
    updateZillowEstimate,
    deleteZillowEstimate,
  } = useZillowEstimates(zillowEstimates);

  return (
    <div className="bg-gray-50 h-screen">
      <Header />
      <div className="flex flex-row h-screen">
        <SideNav />
        <div className="flex flex-col items-center bg-gray-50 w-full">
          <ZillowEstimates
            zillowEstimates={zEstimates}
            onCreate={createZillowEstimate}
            onUpdate={updateZillowEstimate}
            onDelete={deleteZillowEstimate}
          />
        </div>
      </div>
    </div>
  );
};

export default ZillowEstimatesPage;
