import React, { useContext, useState } from 'react';
import { CarteContext } from './Carte-shop-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTag } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


import Foter from '../../Components/Foter';


const CarteContextDisplay = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(CarteContext);
  const [quantity, setQuantity] = useState(1);

  const clickIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const clickDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Calculate total price for all products in the cart
  const total = cartItems.reduce((acc, item) => {
    if (item.attributes && item.attributes.prixHabituel) {
      return acc + item.attributes.prixHabituel * quantity;
    }
    return acc;
  }, 0);

  return (
    <div className='static h-100 w-100'>
   {!cartItems.length > 0 ? (
    <>
        <h2 className='text-center font-serif text-2xl '>
          Your cart is empty <br />
          <span className='font-serif text-sm text-gray-400'>
            Add products while you shop, so they'll be ready for checkout later.
          </span>
        </h2>
        <Link to="/shop"> <button style={{marginLeft:'45%' , marginTop:'20%'}} className=' shadow bg-slate-950 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded' > <FontAwesomeIcon icon={faBackward} /> Back shoping</button></Link>
        </>
      ) : (
        <h2 className='text-center font-serif text-2xl '>Cart </h2>
      )}
    <div className='flex flex-wrap gap-4 '>
      

      <div style={{ border: 'solid 1px green' }} className=' flex flex-col gap-1 static  '>
        {cartItems.map((item) => (
          <div className=' container  flex flex-wrap gap-6 static rounded' key={item.id}>
          
            <div className='flex flex-wrap gap-10 '>
              <div className='w-40 mr-20 mb-5 '>
              <p className='font-serif mb-2'>{item.attributes.Title}</p>
                <img className='rounded shadow-2xl'
                  src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                  alt={item.attributes.Title}
                  style={{ maxWidth: '80%'}}
                />
              </div>

              <div  className='mr-5 w-40'>
               
              <div className='flex flex-row gap-3'>
                    <span>{item.attributes.prixHabituel} $</span>
                    <span className='line-through text-gray-400'>{item.attributes.prixSolde} $</span>
                  </div>
                <label>Taille</label>
                <br />
                <select className='h-6 text-xs rounded-md py-1 pt-1   shadow-sm  ' name='selectTail'>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>3XL</option>
                </select>
                <br />
                <label>Quantity</label>
                <br />
                <div className='static'>
                  <div className='buttonss absolute flex flex-wrap gap-10 '>
                    <button
                      onClick={clickIncrement}
                      className='w-5 h-5 text-white bg-slate-600 hover:bg-blue-700  font-bold px-1 rounded'
                    >
                      +
                    </button>
                    <button
                      onClick={clickDecrement}
                      className=' w-5 h-5 text-white bg-slate-600 hover:bg-blue-700  font-bold px-1 rounded'
                    >
                      -
                    </button>
                  </div>
                  <input
                    type='text'
                    value={quantity}
                    readOnly
                    className="ml-4 text-center w-12 h-5 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pt-1 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  />
                    <FontAwesomeIcon  size="sm"
             style={{marginTop:'15px' }}
              className='text-slate-950 cursor-pointer text-xs h-8 w-4   '
              icon={faTrash}
               onClick={() => removeFromCart(item.id)}
            />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div style={{position:'absolute',marginLeft:'500px', width:'40%' ,height:'70%'}}   >
          <h2 className='font-serif '>CART SUMMARY</h2>
          <div style={{ border: 'solid 1px black' }} className='mr-5 mt-3'>
            <p className='font-serif ml-3'>Subtotal <span className='ml-8 font-mono font-bold '>{total}$</span> </p>
            <p className='font-mono text-xs ml-3'>   marAnime items are eligible for free shipping <FontAwesomeIcon icon={faCheck} className='text-green-500' /> </p>
            <button className='ml-60 mb-2 shadow bg-slate-950 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 ml-80 mt-30 rounded'>
              Order <FontAwesomeIcon icon={faTag} />
            </button>
          </div>
        </div>
      )}
    
    </div>
    <footer  style={{position:'absolute' ,marginTop:"450px" ,width:"100%"}}>
      <Foter/>
     </footer>
     </div>
  );
};

export default CarteContextDisplay;
