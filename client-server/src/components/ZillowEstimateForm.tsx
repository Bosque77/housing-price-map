import { useState, useEffect } from "react";
import { ZillowEstimate } from "types";

interface ZillowEstimateFormProps {
  zillowEstimate?: ZillowEstimate;
  onSubmit: (zillowEstimate: ZillowEstimate) => void;
  onCancel?: () => void;
}

const ZillowEstimateForm = ({
  zillowEstimate,
  onSubmit,
  onCancel,
}: ZillowEstimateFormProps) => {
  const [zestimate, setZestimate] = useState<number | undefined>(
    zillowEstimate?.zestimate
  );
  const [date, setDate] = useState<string | undefined>(zillowEstimate?.date);
  const [homeId, setHomeId] = useState<number | undefined>(zillowEstimate?.home_id);

  useEffect(() => {
    if (zillowEstimate) {
      setZestimate(zillowEstimate.zestimate);
      setDate(zillowEstimate.date);
      setHomeId(zillowEstimate.home_id);
    }
  }, [zillowEstimate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zestimate !== undefined && date !== undefined && homeId !== undefined) {
      onSubmit({
        zillow_price_id: zillowEstimate?.zillow_price_id ?? 0,
        zestimate,
        date,
        home_id: homeId,
      });
      setZestimate(undefined);
      setDate(undefined);
      setHomeId(undefined);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <label htmlFor="zestimate">Zestimate:</label>
      <input
        id="zestimate"
        type="number"
        step="0.01"
        value={zestimate ?? ""}
        onChange={(e) => setZestimate(parseFloat(e.target.value))}
        required
      />
      <label htmlFor="date">Date:</label>
      <input
        id="date"
        type="date"
        value={date ?? ""}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <label htmlFor="homeId">Home ID:</label>
      <input
        id="homeId"
        type="number"
        value={homeId ?? ""}
        onChange={(e) => setHomeId(parseInt(e.target.value))}
        required
      />
      <div className="flex space-x-2 mt-4">
        <button type="submit" className="bg-green-500 text-white py-1 px-4 rounded">
          {zillowEstimate ? "Update" : "Create"}
        </button>
        {onCancel && (
          <button
            type="button"
            className="bg-gray-500 text-white py-1 px-4 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ZillowEstimateForm;
