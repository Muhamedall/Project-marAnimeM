
import React, { useState, useEffect } from "react";

import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './AnimeProject/Shoping/Shop';
import NavBar from './AnimeProject/NavBar';
import Homme from './AnimeProject/Home';
import MoviesAnime from './AnimeProject/MoviesAnime';
import Fromuser from './AnimeProject/Formuser';
import Login from './AnimeProject/Login';


function App() {
  const [dataAnime, setDataAnime] = useState({ listanime: [] });

  useEffect(() => {
    axios.get('http://localhost:1337/api/animes?populate=*')
      .then((response) => {
          setDataAnime({ listanime: response.data.data });
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  
  return (
  <>
  <BrowserRouter>
  <NavBar /> 
        <Routes>
            <Route>
                <Route path="/" element={<NavBar  dataAnime={dataAnime}/>}/>

                <Route index element={<Homme dataAnime={dataAnime}  />}/>
                <Route path="Manga" element={<Shop/>}/>
                <Route path="MoviesAnime" element={<MoviesAnime/>}/>
                <Route path='Fromuser' element={<Fromuser/>}/>
                <Route path="Login" element={<Login/>}/>





            </Route>




        </Routes>
        
        
        
        
        </BrowserRouter>
  
  
  </>
  );
}

export default App;
