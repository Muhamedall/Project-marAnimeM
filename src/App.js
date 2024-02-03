// App.js
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataApiContext from './AnimeProject/ContextApi/DataApi';
import CarteProvider from './AnimeProject/Shoping/Cartecontext';
import Shop from './AnimeProject/Shoping/Shop';
import Navbar from './AnimeProject/NavBar';
import Home from './AnimeProject/Home';
import MoviesAnime from './AnimeProject/MoviesAnime';
import Fromuser from './AnimeProject/Formuser';
import Login from './AnimeProject/Login';
import DetailShop from './AnimeProject/Shoping/DetailShop';
import SaveAnime from './AnimeProject/SaveAnime';
import Cartetdisplay  from './AnimeProject/Shoping/Cartetdisplay';
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <DataApiContext>
      <CarteProvider>
        <BrowserRouter>
          <Navbar onSearchChange={handleSearchChange} />
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="MoviesAnime" element={<MoviesAnime />} />
            <Route path="Fromuser" element={<Fromuser />} />
            <Route path="Login" element={<Login />} />
            <Route path="/detail/:productNam" element={<DetailShop />} />
            <Route path="SaveAnime" element={<SaveAnime />} />
            <Route path="Cartetdisplay" element={<Cartetdisplay/>} />
            
          </Routes>
        </BrowserRouter>
      </CarteProvider>
    </DataApiContext>
  );
}

export default App;