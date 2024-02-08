import React, { useContext, useState } from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {SaveContext} from '../Savin-folder/SaveContext';
import { Link } from 'react-router-dom';



import { DataApi  } from '../ContextApi/Data-context-Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faPlay } from '@fortawesome/free-solid-svg-icons';


const  ListAnime=({searchTerm})=>
 {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const { addToSave  } = useContext(SaveContext);
  
  
  const handleMouseEnter = (idx) => {
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
  };





  const contextData = useContext(DataApi);

  
  if (!contextData || !contextData.dataAnime || !contextData.dataAnimeTwo) {
   
    return <div>Loading...</div>; 
  }

  const { dataAnime } = contextData;
  const {dataAnimeTwo}=contextData;
 
  const listAnimeData = dataAnime.listanime || [];

 

  const listAnimeTwo=dataAnimeTwo.listAnimeTwo||[];



  
  const filteredList = listAnimeData.filter(
    (data) =>
      data.attributes.Title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      data.attributes.description.toLowerCase().includes(searchTerm.toLowerCase()) 
  );
  const filteredListAnimeTwe = listAnimeTwo.filter(
    (data) =>
      data.attributes.Title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      data.attributes.description.toLowerCase().includes(searchTerm.toLowerCase()) 
  );


  return (
    <>
    <div className="container">
    
      <div className="fetchin-dataAnime">
       
        {filteredList.map((data, idx) => (
          <div
            key={idx}
            className="anime-container transition duration-500 ease-in-out hover:transform hover:-translate-y-1 hover:scale-110"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="image-container mb-4">
              <img
                src={`http://localhost:1337${data.attributes.image.data.attributes.url}`}
                alt={data.attributes.Title}
                style={{ maxWidth: "85%" }}
              />
              <p className="text-center font-mono">{data.attributes.Title}</p>

              {hoveredIdx === idx && (
                <div className="overlay text-center p-3">
                  <p>{data.attributes.description}</p>
                  <div className="btn-watche-save">
                  <Link to={`/Watche/${data.attributes.Title}`}> <FontAwesomeIcon
                      className="mt-3 text-yellow-100 h-8 hover:text-yellow-300 "
                      type="submit"
                      
                      icon={faPlay}
                    /></Link>
                    <FontAwesomeIcon
  className="mt-3 text-yellow-100 h-8 hover:text-yellow-300"
  type="submit"
  onClick={() => addToSave(data)}
  icon={faBookmark}
/>

                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
      


        
       <p className="Title_Anime">More Anime</p>
        < >
        
        <Swiper
          className='w-100 container   '
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {filteredListAnimeTwe.map((data, keys) => (
            <SwiperSlide key={keys} className='  image-container mb-4 anime-container transition duration-500 ease-in-out hover:transform hover:-translate-y-1 hover:scale-110'>
              <div
                key={keys}
                className="anime-container transition duration-500 ease-in-out hover:transform hover:-translate-y-1 hover:scale-110"
                onMouseEnter={() => handleMouseEnter(keys)}
                onMouseLeave={handleMouseLeave}
              >
                <img className='h-4 rounded-lg mt-3' src={`http://localhost:1337${data.attributes.image.data.attributes.url}`} alt='' style={{ maxWidth: '70%' }} />
                <p className="text-center font-mono text-slate-50">{data.attributes.Title}</p>

                {hoveredIdx === keys && (
                  <div className="overlays text-center p-3">
                    <p>{data.attributes.description}</p>
                    <div className="btn-watche-save">
                    <Link to={`/Watche/${data.attributes.Title}`}><FontAwesomeIcon
                        className="mt-3 text-yellow-100 h-8 hover:text-yellow-300"
                        type="submit"
                     
                        icon={faPlay}
                      /></Link>
                      <FontAwesomeIcon
                        className="mt-3 text-yellow-100 h-8 hover:text-yellow-300"
                        type="submit"
                        onClick={()=>addToSave(data)}
                        icon={faBookmark}
                      />
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </>
        
        
    
     
        
      
   
        </>
   
   
  );
  
}

export default ListAnime;