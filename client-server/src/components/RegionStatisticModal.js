import { useState, useEffect } from "react";

const RegionStatisticModal = ({
  isEdit,
  showModal,
  closeModal,
  handleSubmit,
  selectedStatistic,
}) => {
  const [statistic, setStatistic] = useState({
    region_id: "",
    avg_price_per_sq_ft: "",
    mean_housing_price: "",
    five_year_price_gradient: "",
    ten_year_price_gradient: "",
    median_housing_price: "",
    date: "",
  });

  useEffect(() => {
    if (selectedStatistic) {
      setStatistic(selectedStatistic);
    }
  }, [selectedStatistic]);

  const handleChange = (e) => {
    setStatistic({ ...statistic, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    handleSubmit(statistic);
    closeModal();
  };

  return (
    <div
      className={`${
        showModal ? "fixed" : "hidden"
      } z-10 inset-0 overflow-y-auto`}
    >
      {/* Modal content */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-1/2 p-8 rounded-lg">
          <h2 className="text-2xl mb-6">
            {isEdit ? "Edit Region Statistic" : "Add Region Statistic"}
          </h2>
          {/* Add form fields */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Region ID
            </label>
            <input
              type="number"
              name="region_id"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={statistic.region_id}
              onChange={handleChange}
            />
          </div>
          {/* Add other fields for the remaining statistic properties */}
          {/* ... */}
          <div className="flex justify-end mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={onSubmit}
            >
              {isEdit ? "Save Changes" : "Add Statistic"}
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionStatisticModal;
