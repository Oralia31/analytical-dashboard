import React, { useContext } from "react";
import { barDataOptionsAds } from "../data/DataChart";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { DataContext } from "../Context/DataContext";
import { colorsChart } from "../Config/colorsCharts";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const Ads = () => {
  //Con esta linea de código mandamos a llamar a nuestro estado global para usarlo en este componente
  const { dataAds } = useContext(DataContext);

  //Meta ads
  const barDataAds = {
    labels: dataAds.anuncios?.map((item) => item.nombre) || [],
    datasets: [
      {
        type: "bar",
        label: "Alcance",
        data: dataAds?.anuncios?.map((item) => item.alcance) || [],
        backgroundColor: colorsChart.purple[100],
        borderColor: colorsChart.purpleHover[100],
        borderWidth: 1,
        yAxisID: "y",
      },
      {
        type: "bar",
        label: "Participación",
        data: dataAds?.anuncios?.map((item) => item.participación) || [],
        backgroundColor: colorsChart.purple[200],
        borderColor: colorsChart.purpleHover[200],
        borderWidth: 1,
        yAxisID: "y",
      },
      {
        type: "bar",
        label: "Gastos publicidad",
        data: dataAds?.anuncios?.map((item) => item.gastoPublicidad) || [],
        backgroundColor: colorsChart.purple[300],
        borderColor: colorsChart.purpleHover[300],
        borderWidth: 1,
        yAxisID: "y",
      },
      {
        type: "line",
        label: "Conversiones",
        data: dataAds?.anuncios?.map((item) => item.conversiones) || [],
        backgroundColor: colorsChart.purple[400],
        borderColor: colorsChart.purpleHover[400],
        fill: false,
        tension: 0.4,
        pointBackgroundColor: colorsChart.purple[100],
        pointBorderColor: colorsChart.purple[200],
        pointRadius: 5,
        pointHoverRadius: 7,
        yAxisID: "y1",
      },
    ],
  };

  return (
    <div className="w-full min-h-[85vh] p-4 space-y-6 bg-secondary-200">
      <h2 className="text-opacity-70 text-left font-primary font-medium  mb-4 text-textSecondary">
        Datos de Meta Ads
      </h2>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-opacity-70 font-primary font-medium  mb-4 text-primary">
          Desempeño de anuncios
        </h3>
        <div className="w-auto xl:h-[300px] flex justify-center items-center">
          <Bar data={barDataAds} options={barDataOptionsAds} />
        </div>
      </div>
    </div>
  );
};

export default Ads;
