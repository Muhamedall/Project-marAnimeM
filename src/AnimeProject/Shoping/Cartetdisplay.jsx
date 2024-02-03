// CarteContextDisplay.jsx
import React, { useContext } from 'react';
import { CarteContext } from './Cartecontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

const CarteContextDisplay = () => {
  const { cartItems, removeFromCart } = useContext(CarteContext);

  return (
    <div className="container m-auto px-8 text-gray-500 md:px-12 xl:px-40">
      <div className="rounded-xl bg-slate-950 shadow-xl">
        <div className="p-6 sm:p-16">
          <div className="space-y-5">
            <FontAwesomeIcon className="text-slate-50 w-10" icon={faShoppingCart} />
            <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Your cart</h2>

            {cartItems.map((item) => (
              <div key={item.id} className="grid space-y-4">
                <img
                  className="shadow-2xl"
                  src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                  alt={item.attributes.Title}
                  style={{ maxWidth: "25%" }}
                />

                <label>Taille</label>
                <select
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                        hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  name="selectTail"
                >
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>3XL</option>
                </select>

                <label htmlFor="grid-email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Quantité
                </label>
                <input
                  className="quantity__input text-center h-8  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="number"
                  min="1"
                  name="Qte"
                />

                <FontAwesomeIcon
                  className="text-red-500 cursor-pointer"
                  icon={faTimes}
                  onClick={() => removeFromCart(item.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarteContextDisplay;
