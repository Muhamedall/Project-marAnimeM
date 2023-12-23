import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ListProductsNaruto = ({ dataProductsNaruto }) => {
    
  return (
    <>
    
    <Swiper
    
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
   
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    
    >
      {dataProductsNaruto.ListPrNaruto.map((data,index)=>(
        <SwiperSlide key={index} >

              <img className=''
                
                src={`http://localhost:1337${data.attributes.image.data.attributes.url}`}
                alt={data.attributes.Title}
                style={{ maxWidth: "70%" }}
              />
              <div>
              <p className=" text-center underline font-mono ml-12 w-50  mt-4 ">{data.attributes.Title}</p>
              <div className='m-0  ml-7 w-20 flex flex-row gap-5 '>
              <span>{data.attributes.prixSolde}€</span><span>{data.attributes.prixHabituel} €</span>
              </div>
              </div>
        </SwiperSlide>
       

      ))}
      
     
   
    </Swiper>



    


    </>
  );
};

export default ListProductsNaruto;
