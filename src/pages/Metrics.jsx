import React from "react";
import {
  barDataMetrics,
  barDataOptionsMetrics,
  lineCosteDataMetrics,
  lineOptionsMetrics,
  lineValueDataMetrics,
} from "../data/DataChart";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  Filler,
  PointElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  Filler,
  PointElement
);

const Metrics = () => {
  return (
    <div className="w-full min-h-[85vh] p-4 space-y-6 bg-secondary-200">
      <h2 className="text-opacity-70 text-left font-primary font-medium  mb-4 text-textSecondary">
        Métricas de CRM
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-opacity-70 font-primary font-medium  mb-4 text-primary">
        Costo de adquisición vs valor de vida
        </h3>
        <div className="w-auto xl:h-[300px] flex justify-center items-center">
          <Bar data={barDataMetrics} options={barDataOptionsMetrics} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-opacity-70 font-primary font-medium  mb-4 text-primary">
            Costo de adquisición
          </h3>
          <div className="w-auto xl:h-[300px] flex justify-center items-center">
            <Line data={lineCosteDataMetrics} options={lineOptionsMetrics} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-opacity-70 font-primary font-medium  mb-4 text-primary">
            Valor de vida
          </h3>
          <div className="w-auto xl:h-[300px] flex justify-center items-center">
            <Line data={lineValueDataMetrics} options={lineOptionsMetrics} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
