// DataApiContext.js

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataApi = createContext();

const DataApiContext = ({ children }) => {
  const [dataAnime, setDataAnime] = useState({ listanime: [] });
  const [dataProductsNaruto, setdataProductNaruto] = useState({ ListPrNaruto: [] });
  const [dataAnimeTwo, setdataAnimeTwo] = useState({ listAnimeTwo: [] });
  const [carteItem ,setCarteItem]=useState([]);
  const [cartTotalQuantite ,setcarteTotalQuantite]=useState(0);
  const [carteTotalAmount ,setCarteTotalAmount]=useState(0);


  //

  useEffect(() => {
    axios.get('http://localhost:1337/api/animes?populate=*')
      .then((response) => {
        setDataAnime({ listanime: response.data.data });
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:1337/api/products-narutos?populate=*')
      .then((response) => {
        setdataProductNaruto({ ListPrNaruto: response.data.data });
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:1337/api/amime-twoes?populate=*')
      .then((response) => {
        setdataAnimeTwo({ listAnimeTwo: response.data.data });
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
      });
  }, []);


  console.log("Data from Anime API:", dataAnime);
  console.log("Data from Products Naruto API:", dataProductsNaruto);

  return (
    <DataApi.Provider value={{ dataAnime, dataProductsNaruto ,dataAnimeTwo}}>
      {children}
    </DataApi.Provider>
  );
};

export default DataApiContext;
