import { useContext } from 'react';
import {DataApi } from '../ContextApi/DataApi';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';




const DetailShop = () => {
    const products=useContext(DataApi)
    const { productNam } = useParams();

    const filteredProduct = products?.dataProductsNaruto?.ListPrNaruto.filter(data =>
        data.attributes.Title.trim().toLowerCase() === productNam.trim().toLowerCase()
    );
    const handelShow =(e)=>{
        e.preventDefault();
        document.querySelector("#formulair").style.display="block"


    }
    const handelDeelt=(e)=>{
        e.preventDefault();
        document.querySelector("#formulair").style.display="none"

    }

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
              
            <button onClick={handelShow} class="shadow bg-slate-950 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded">
            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            
            </div>
           
            </div>
            
            </div>
           
            <div id='formulair' class=" static w-30  hidden py-16 bg-amber-200 rounded "> 

           <FontAwesomeIcon className='h-8 absolute  right-1 top-28 ' onClick={handelDeelt} type="submit" icon={faTimes} />
            
    <div class=" container m-auto px-8 text-gray-500 md:px-12 xl:px-40">
        
            <div class=" rounded-xl bg-slate-950 shadow-xl ">
                <div class=" p-6 sm:p-16">
                    <div class="space-y-5">
                    <FontAwesomeIcon className='text-slate-50 w-10 ' icon={faShoppingCart}  />             
                      <h2 class="mb-8 text-2xl text-cyan-900 font-bold">Your cart</h2>
                   

                      <img className="shadow-2xl "
                
                      src={`http://localhost:1337${filteredProduct[0].attributes.image.data.attributes.url}`}
                      alt={filteredProduct[0].attributes.Title}
                      style={{ maxWidth: "25%" }}
                      />
                      
                    </div>
                    <div className="mt-16 grid space-y-4">
                        <label>Taille</label>
                        <select className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                        hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" name='selectTail' >
                                   <option>S</option>
                                   <option>M</option>
                                   <option>L</option>
                                   <option>XL</option>
                                   <option>XXL</option>
                                   <option>3XL</option>
                       </select>
                       <label htmlFor="grid-email" className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                       Quantité
            </label>
            <input
              className=" quantity__input text-center h-8  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              
            
              type="number"
              min="1"
              name="Qte"
            />
                    </div>
                </div>
            </div>
    </div>
</div> 

           </section>
        </>
    );
};

export default DetailShop;
