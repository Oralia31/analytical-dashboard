import React from "react";

import { jsonGoogleAnalytics } from "../data/Data";
import { FaChild } from "react-icons/fa";
import { FaGenderless } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="w-full min-h-[85vh] p-4 space-y-6 bg-secondary-200">
      <h2 className="text-opacity-70 text-left font-primary font-medium  mb-4 text-textSecondary">
        Google analytics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {/**Card*/}
        
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
  );
};

export default Home;
