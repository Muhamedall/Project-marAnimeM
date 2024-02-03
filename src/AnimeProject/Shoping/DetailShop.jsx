//DetailShop.jsx

import { useContext } from 'react';
import {DataApi } from '../ContextApi/DataApi';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { CarteContext } from '../Shoping/Cartecontext';




const DetailShop = () => {
    const products=useContext(DataApi)
    const { addToCart } = useContext(CarteContext);
    const { productNam } = useParams();

    const filteredProduct = products?.dataProductsNaruto?.ListPrNaruto.filter(data =>
        data.attributes.Title.trim().toLowerCase() === productNam.trim().toLowerCase()
    );
    


    return (
        <>
    
        <section className='mt-10 Information-Shop flex flex-row gap-2  '>

        <div className='Product-description-general'>
            <div className='  flex flex-row gap-7'>
            {filteredProduct.length > 0 ? (
                <img className="shadow-2xl "
                src={`http://localhost:1337${filteredProduct[0].attributes.image.data.attributes.url}`}
                alt={filteredProduct[0].attributes.Title}
                style={{ maxWidth: "40%" }}
                />
            ):(
                <p >No product found</p>
            )}
            <div>
            <h1 className="text-2xl font-serif">{filteredProduct[0].attributes.Title}</h1>
            <div className=' flex flex-row gap-3 '>
              <span>{filteredProduct[0].attributes.prixHabituel} €</span><span className='line-through text-gray-400'>{filteredProduct[0].attributes.prixSolde} €</span>
              </div>
              <h2 className='font-mono text-green-500'>Free Shipping </h2>
              <br></br>
              
              <button   onClick={()=>addToCart(filteredProduct[0])} className="shadow bg-slate-950 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded">
              <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
      </button>
            
            </div>
           
            </div>
            
            </div>
           
           

           </section>
        </>
    );
};

export default DetailShop;
