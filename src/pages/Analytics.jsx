import React from "react";

import {
  barData,
  barDataOptions,
  pieDataAge,
  pieDataGender,
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
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import { jsonGoogleAnalytics } from "../data/Data";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

import { FaChild } from "react-icons/fa";
import { FaGenderless } from "react-icons/fa6"

const Analytics = () => {
  return (
    <div className="w-full min-h-[85vh] p-4 space-y-6 bg-secondary-200">
      <h2 className="text-opacity-70 text-left font-primary font-medium  mb-4 text-textSecondary">
        Datos de Google Analytics
      </h2>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-opacity-70 font-primary font-medium  mb-4 text-primary">
          Vistas de página y sesiones
        </h3>
        <div className="w-auto xl:h-[300px] flex justify-center items-center">
          <Bar data={barData} options={barDataOptions} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr_1fr] gap-6">
        {/**Edad */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-opacity-70 font-primary font-medium  mb-4 text-primary">
            Distribución de edad
          </h3>
          {jsonGoogleAnalytics?.demografía?.edad?.length === 0 && (
            <h4 className="text-gray-400 font-light text-[14px]">
              No se encontraron datos disponibles para mostrar. Por favor,
              inténtalo más tarde.
            </h4>
          )}
          <div className="w-auto xl:h-[300px] flex justify-center items-center">
            <Pie
              data={pieDataAge}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
        {/**Género */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-opacity-70 font-primary font-medium  mb-4 text-primary">
            Distribución de género
          </h3>
          {jsonGoogleAnalytics?.demografía?.género?.length === 0 && (
            <h4 className="text-gray-400 font-light text-[14px]">
              No se encontraron datos disponibles para mostrar. Por favor,
              inténtalo más tarde.
            </h4>
          )}
          <div className="w-auto xl:h-[300px] flex justify-center items-center">
            <Pie
              data={pieDataGender}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>

        {/**Cards */}
        <div className="flex flex-col gap-4 justify-center ">

        <div className="bg-secondary-100 p-8 rounded-xl card">
          <div className="flex items-center justify-start gap-4 mb-4">
          <FaChild className="text-4xl bg-primary/70 text-white p-2 box-content rounded-xl"/>
            <h3 className="text-opacity-70 text-left font-primary font-medium  mb-4 text-primary">
              Edades
            </h3>
          </div>

          {jsonGoogleAnalytics?.demografía?.edad?.map((item, index) => (
            <div key={index} className=" w-full flex justify-start items-center gap-6">
              <h4 className="text-[15px] font-light text-textSecondary opacity-70">
              Rango: { `${item.rango} -`} <span className="font-semibold"> {`${item.porcentaje}%`} </span>
              </h4>
            </div>
          ))}
        </div>

        <div className="bg-secondary-100 p-8 rounded-xl card">
          <div className="flex items-center justify-start gap-4 mb-4">
          <FaGenderless className="text-4xl bg-primary/70 text-white p-2 box-content rounded-xl"/>
            <h3 className="text-opacity-70 text-left font-primary font-medium  mb-4 text-primary">
              Géneros
            </h3>
          </div>

          {jsonGoogleAnalytics?.demografía?.género?.map((item, index) => (
            <div key={index} className=" w-full flex justify-start items-center gap-6">
              <h4 className="text-[15px] font-light text-textSecondary opacity-70">
              {`${item.tipo}:`} <span className="font-semibold"> {`${item.porcentaje}%`} </span>
              </h4>
            </div>
          ))}
        </div>
        </div>


      </div>
    </div>
  );
}; 

export default Analytics;
