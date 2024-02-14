//ListProductsNaruto.jsx
import React from 'react';
import { useContext } from 'react';

import { DataApi } from '../../Components/ContextApi/Data-context-Api';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Naruto from './db1487b08f4c5e594443ac0533f6e9dc-removebg-preview.png';
import Midorya from './fe6a1a87376c6c0e52e12bef7139c0ec-removebg-preview.png';
import GojoSaturo from './9579ab0a9b2d2c8760355260c1c7cf67-removebg-preview.png';
import Foter from '../../Components/Foter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ListProductsNaruto = () => {
  const contextData = useContext(DataApi);


  // Check if dataProductsNaruto is not undefined before accessing its properties
  const { dataProductsNaruto ,productsHero ,accessoires } = contextData ?? {};
  const listProductData = dataProductsNaruto?.ListPrNaruto || [];
  const productHeroacadymy=productsHero?.listproductHero||[];
  const Productsaccessoires=accessoires?.listAcesoires || [];

  return (
    <>
      
      {listProductData.length === 0 ? (
        <p className='text-center mt-3'>No products available</p>
      ) : (
        <div className='border-1 border-slate-600 '> 
        <div className=' w-100 h-15 bg-amber-400  '>
          
        <h1 className='text-center font-serif text-3xl '>🥷 NARUTO 🥷</h1>
        <img src={Naruto} alt='' style={{width:'10%'}}></img>
        <p className='text-center font-serif'>Kakashi, Sasuke, Naruto the unpredictable... All your favorite ninjas are there!</p>
      </div>
        <Swiper
          className='w-100'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {listProductData.map((data) => {
            const imageURL = data.attributes.image?.data?.attributes?.url;

            return (
              <SwiperSlide key={data.id}>
                <Link to={`/detail/${data.attributes.Title}`}>
                  {imageURL && (
                    <img
                      className='shadow-2xl'
                      src={`http://localhost:1337${imageURL}`}
                      alt={data.attributes.Title}
                      style={{ maxWidth: '70%' ,marginTop:'15px'}}
                    />
                  )}
                  
                </Link>
                <div className='grid justify-items-center mr-24 gap-2'>
                  <p className='text-center underline font-mono'>{data.attributes.Title}</p>
                  <div className='flex flex-row gap-3'>
                    <span>{data.attributes.prixHabituel} $</span>
                    <span className='line-through text-gray-400'>{data.attributes.prixSolde} $</span>
                  </div>
                  <span>
                    {data.attributes.rate}
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </div>
      )}




      

      {productHeroacadymy.length === 0 ? (
        <p className='text-center mt-3'>No products available</p>
      ) : (
        <div className='border-1 border-slate-600 '>
          <div className=' w-100 h-15 bg-teal-500 '>
        <h1 className='text-center font-serif text-3xl'>🦸🏻⚡ MY HERO ACADEMIA ⚡🦸🏻</h1>
        <img src={Midorya} alt='' style={{width:'10%'}}></img>
        <p className='text-center font-serif'>Join the Second A, become a Hero and face off against the alliance of Super Villains!</p>
      </div>
        
        <Swiper 
          className='w-100 '
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {productHeroacadymy.map((data) => {
            const imageURL = data.attributes.image?.data?.attributes?.url;

            return (
              <SwiperSlide key={data.id}>
                <Link to={`/detail/${data.attributes.Title}`}>
                  {imageURL && (
                    <img
                      className='shadow-2xl'
                      src={`http://localhost:1337${imageURL}`}
                      alt={data.attributes.Title}
                      style={{ maxWidth: '70%' ,marginTop:'15px'}}
                    />
                  )}
                  
                </Link>
                <div className='grid justify-items-center mr-24 gap-2'>
                  <p className='text-center underline font-mono'>{data.attributes.Title}</p>
                  <div className='flex flex-row gap-3'>
                    <span>{data.attributes.prixHabituel} $</span>
                    <span className='line-through text-gray-400'>{data.attributes.prixSolde} $</span>
                  </div>
                  <span>
                    {data.attributes.rate}
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </div>
      )}

      


{Productsaccessoires.length === 0 ? (
        <p className='text-center mt-3'>No products available</p>
      ) : (
        <div className='border-1 border-slate-600 '>
          <div className=' w-100 h-15  bg-slate-500 '>
        <h1 className='text-center font-serif text-3xl'>✨Accessoires Anime✨</h1>
        <img src={GojoSaturo} alt='' style={{width:'15%'}}></img>
        <p className='text-center font-serif'>Join the Second A, become a Hero and face off against the alliance of Super Villains!</p>
      </div>
        
        <Swiper 
          className='w-100 '
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {Productsaccessoires.map((data) => {
            const imageURL = data.attributes.image?.data?.attributes?.url;

            return (
              <SwiperSlide key={data.id}>
                <Link to={`/detail/${data.attributes.Title}`}>
                  {imageURL && (
                    <img
                      className='shadow-2xl rounded border border-red-200 '
                      src={`http://localhost:1337${imageURL}`}
                      alt={data.attributes.Title}
                      style={{ maxWidth: '70%',height:'10%' ,marginTop:'15px'}}
                    />
                  )}
                  
                </Link>
                <div className='grid justify-items-center mr-24 gap-2'>
                  <p className='text-center underline font-mono'>{data.attributes.Title}</p>
                  <div className='flex flex-row gap-3'>
                    <span>{data.attributes.prixHabituel} $</span>
                    <span className='line-through text-gray-400'>{data.attributes.prixSolde} $</span>
                  </div>
                  <span>
                    {data.attributes.rate}
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </div>
      )}
      <footer>
        <Foter/>
      </footer>
      
    </>
  );
};

export default ListProductsNaruto;
