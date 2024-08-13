import React from "react";
import { barDataCampaigns, barDataCampaignsOptions } from "../data/DataChart";


import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Campaigns = () => {
  return (
    <div className="w-full min-h-[85vh] p-4 space-y-6 bg-secondary-200">
      <h2 className="text-opacity-70 text-left font-primary font-medium  mb-4 text-textSecondary">
        Datos de Google Ads
      </h2>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-opacity-70 font-primary font-medium  mb-4 text-primary">
          Comparación de campañas
        </h3>
        <div className="w-auto xl:h-[300px] flex justify-center items-center">
          <Bar data={barDataCampaigns} options={barDataCampaignsOptions} />
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
