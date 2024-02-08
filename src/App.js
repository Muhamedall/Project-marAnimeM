// App.js
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataApiContext from './AnimeProject/Components/ContextApi/Data-context-Api';
import CarteProvider from './AnimeProject/Shoping/Card-shop/Carte-shop-context';
import SaveProvider from './AnimeProject/Components/Savin-folder/SaveContext';
import Shop from './AnimeProject/Shoping/Shop';
import Navbar from './AnimeProject/Components/NavBar';
import Home from './AnimeProject/Components/Home';
import Manga from './AnimeProject/Components/Anime/Manga';
import Watching from './AnimeProject/Components/Anime/Watching-anime';
import Singup from './AnimeProject/Components/Forms/Sing-up';
import Login from './AnimeProject/Components/Forms/Login';
import DetailShop from './AnimeProject/Shoping/DetailShop';
import SaveAnime from './AnimeProject/Components/Savin-folder/SaveAnime';
import CartetShop  from './AnimeProject/Shoping/Card-shop/Card-shop';
import Notfound from './AnimeProject/Components/Not-found';
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <DataApiContext>
      <SaveProvider>
      <CarteProvider>
        <BrowserRouter>
          <Navbar onSearchChange={handleSearchChange} />
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="Manga" element={<Manga />} />
            <Route path="Sing-up" element={<Singup />} />
            <Route path="Login" element={<Login />} />
            <Route path="/detail/:productNam" element={<DetailShop />} />
            
            <Route path="/Watche/:animeName" element={<Watching />} />


            <Route path="SaveAnime" element={<SaveAnime />} />
            <Route path="Carte-Shop" element={<CartetShop/>} />
            <Route path="*" element={<Notfound/>} />
            


            
          </Routes>
        </BrowserRouter>
      </CarteProvider>
      </SaveProvider>
    </DataApiContext>
  );
}

export default App;