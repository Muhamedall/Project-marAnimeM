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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ListProductsNaruto = () => {
  const contextData = useContext(DataApi);


  // Check if dataProductsNaruto is not undefined before accessing its properties
  const { dataProductsNaruto } = contextData ?? {};
  const listProductData = dataProductsNaruto?.ListPrNaruto || [];
  console.log("Data Products Naruto:", dataProductsNaruto);
console.log("List Product Data:", listProductData);
  return (
    <>
      <div className='mt-3 w-100 h-15 Categorie-Naruto bg-amber-400'>
        <h1 className='text-center font-serif'>🥷 NARUTO 🥷</h1>
        <p className='text-center font-serif'>Kakashi, Sasuke, Naruto the unpredictable... All your favorite ninjas are there!</p>
      </div>

      {listProductData.length === 0 ? (
        <p className='text-center mt-3'>No products available</p>
      ) : (
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
                      style={{ maxWidth: '70%' }}
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
      )}

      <div className='mt-3 w-100 h-15 Categorie-Naruto bg-amber-400'>
        <h1 className='text-center font-serif'>🥷 NARUTO 🥷</h1>
      </div>
    </>
  );
};

export default ListProductsNaruto;
