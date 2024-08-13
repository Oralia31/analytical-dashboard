import React, { useCallback, useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import { auth, newAuth, testAccount, urls } from "../Config/global";
import { jsonMetaAds } from "../data/Data";

const DataProvider = ({ children }) => {
  const [dataAds, setDataAds] = useState([]);

  /** Esta función manda a llamar al api de MetaAds para obtener la información de los anuncios. Los parémetros que necesitamos pasarle para
   * acceder a esa información es el ID de la cuenta y nuestro token de acceso
   * **/

  const getDataMetaAds = useCallback(async (addAccountId) => {
    try {
      const response = await fetch(`${urls.urlAds}${addAccountId}/ads`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${newAuth.access_token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error(`Error status: ${response.status}`);

        /** En este caso como no tengo los pemisos necesarios para acceder a la información, dado que la cuenta no me dejó cambiar, agregar o quitar permisos,
         * decidí manejar la situación de la siguiente forma:
         
         * 1. Realizar una validación de que si el error entra en alguno de los 400 se notifique en consola.
         * 2. Para no dejar sin datos a la gráfica decidi setearle el JSON con la información estatica que me proporcionaron al estado dataAdss, que es donde
         * se almacenaria la información que me regresaría el API.
         **/

        if (response.status >= 400 && response.status < 500) {
          const errorData = await response.json(); // Obtenemos los errores
          console.error(`Error message: ${errorData.error.message}`); //Mostramos los errores en la consola
          //Asignamos el json con la información estática
          setDataAds(jsonMetaAds);
          return;
        }
        return;
      }
      const data = await response.json();
      setDataAds(data.results);
    } catch (error) {
      console.error("Error al acceder a la data", error);
    }
  }, []);

  useEffect(() => {
    getDataMetaAds(testAccount.id);
  }, []);

  //Agrego el estado al context para que cualquier componente hijo pueda acceder a la información.
  return (
    <DataContext.Provider value={{ dataAds }}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
