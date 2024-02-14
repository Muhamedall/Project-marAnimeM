// DataApiContext.js

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataApi = createContext();

const DataApiContext = ({ children }) => {
  const [dataAnime, setDataAnime] = useState({ listanime: [] });
  const [dataProductsNaruto, setdataProductNaruto] = useState({ ListPrNaruto: [] });
  const [productsHero ,setHero]=useState({listproductHero:[]});
  const [dataAnimeTwo, setdataAnimeTwo] = useState({ listAnimeTwo: [] });
  const [accessoires ,setaccessoires]=useState({listAcesoires:[]})
  const [Animefull ,setAnimeFull]=useState({listAnimeFull:[]});
  const [Mangas ,setMangas]=useState({listManga:[]});



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
    axios.get('http://localhost:1337/api/my-hero-acadymes?populate=*')
      .then((response) => {
        setHero({ listproductHero: response.data.data });
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:1337/api/accessoires-animes?populate=*')
      .then((response) => {
        setaccessoires({ listAcesoires: response.data.data });
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
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
 useEffect(() => {
    axios.get('https://api.jikan.moe/v4/manga')
      .then((response) => {
        setMangas({listManga:response.data.data})
        
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
      });
  }, []);



  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/anime?populate=*')
      .then((response) => {
        setAnimeFull({ listAnimeFull: response.data.data });
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
      });
  }, []);


  return (
    <DataApi.Provider value={{ dataAnime, dataProductsNaruto ,productsHero,accessoires,dataAnimeTwo ,Animefull,Mangas}}>
      {children}
    </DataApi.Provider>
  );
};

export default DataApiContext;
