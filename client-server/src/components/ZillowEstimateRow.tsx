import { ZillowEstimate } from "types";

interface ZillowEstimateRowProps {
  zillowEstimate: ZillowEstimate;
  onDelete: (zillow_price_id: number) => void;
}

const ZillowEstimateRow = ({ zillowEstimate, onDelete }: ZillowEstimateRowProps) => {
  const { zillow_price_id, zestimate, date, home_id } = zillowEstimate;

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="font-medium">${zestimate.toFixed(2)}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span>{home_id}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <button
            onClick={() => onDelete(zillow_price_id)}
            className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ZillowEstimateRow;
