import React, { useContext, useState ,useRef } from 'react';
import { CarteContext } from './Carte-shop-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faBackward, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

import Foter from '../../Components/Foter';

const CarteContextDisplay = () => {

  const { cartItems, removeFromCart,cleareCaret } = useContext(CarteContext);
  const [showcart ,setShowcart]=useState(false);
  const [payWithCard, setPayWithCard] = useState(true);
  //declartion useRef inputes 
  const nmbCard = useRef("");
  const email = useRef("");
  const nameCard = useRef("");
  const cvc= useRef();
  const description =useState("");
  const experDate=useState("");
  const nmbCardPaypal=useRef()
  
  const emailPay=useRef()
  const cvcPay=useRef()
  const experDatePaypal=useRef()
  //display error 

  const [errorMessages, setErrorMessages] = useState({
    Numero:"",
    NumeroPaypal:"",
    
    Name: "",
    
    Email: "",
    EmailPay:"",
    Name_card: "",
    Cvc : "",
    CvcPay:"",
    Description:"",
    Exper_Date:"",
    Exper_DatePay:"",

  });
  const [successMessage, setSuccessMessage] = useState("");


  const cardNumberRegex = /^[0-9]{16}$/;
  const cvcRegex = /^[0-9]{3,4}$/;
  const expDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

  //Validation Formulair :
  const validForm = () => {
    const errors = {};
  
    if (payWithCard) {
      const fields = [
        { ref: nmbCard, name: "Numero", message: "Enter a card number" },
        { ref: experDate, name: "Exper_Date", message: "Enter a valid expiration date" },
        { ref: cvc, name: "Cvc", message: "Enter the CVV or security code on your card" },
        { ref: nameCard, name: "Name", message: "Enter a name" },
        { ref: email, name: "Email", message: "Enter an email" },
      ];
      fields.forEach(({ ref, name, message }) => {
        const value = ref.current?.value?.trim();

        const isValidCardNumber = cardNumberRegex.test(ref.current.value);
        const isValideCvc=cvcRegex.test(ref.current.value);
        const isValidDate=expDateRegex.test(ref.current.value)
        if (!value || value === "") {
          errors[name] = message;
          if (ref.current) {
            ref.current.style.border = "1px solid red";
          }
        } else if (name === "Email" && !value.match(/^\S+@\S+\.\S+$/)) {
          errors[name] = "Please enter a valid email address.";
        }else if(name==="Numero" && !isValidCardNumber){
          errors[name] ="Please enter a valid card number (16 digits)."

        }
        else if(name==="Cvc" && !isValideCvc){
          errors[name] ="Invalid CVC"

        }
        else if(name==="Exper_Date" && !isValidDate){
          errors[name]="Invalid date (ex:01/38)" 

        }
         else {
          errors[name] = "";
          if (ref.current) {
            ref.current.style.border = ""; // Reset border style
          }
        }
      });
    } else {
      //Valid with  PayPal 
      const fields = [

        { ref: nmbCardPaypal, name: "NumeroPaypal", message: "Enter a card number" },
        { ref: experDatePaypal, name: "Exper_DatePay", message: "Enter a valid expiration date" },
        { ref: cvcPay, name: "CvcPay", message: "Enter the CVV or security code on your card" },
        { ref: emailPay, name: "EmailPay", message: "Enter an email" },
      ];
      fields.forEach(({ ref, name, message }) => {
        const value = ref.current?.value?.trim();
        if (!value || value === "") {
          errors[name] = message;
          if (ref.current) {
            ref.current.style.border = "1px solid red";
          }
        } else if (name === "EmailPay" && !value.match(/^\S+@\S+\.\S+$/)) {
          errors[name] = "Please enter a valid email address.";
        } else {
          errors[name] = "";
          if (ref.current) {
            ref.current.style.border = ""; // Reset border style
          }
        }
      });
    }
  
    setErrorMessages(errors);
    const isValid = Object.values(errors).every((message) => message === "");
  
    if (isValid) {
      setSuccessMessage("Form submitted successfully!");
    }
  
    return isValid;
  };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("its work")
      const isValid = validForm();
      if (isValid) {
        setTimeout(() => {
          setSuccessMessage("");
          cartItems.length=0
          cleareCaret()
        }, 3000);
        
        setShowcart(false)
        
      }
    
      
      
      


  }



  // Adjust state to manage quantities for each product
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );
  const handelOrder=()=>{
     setShowcart(true)
  }
  const handlePayWithCard = () => {
    setPayWithCard(true);
  };

  const handlePayWithPayPal = () => {
    setPayWithCard(false);
  };

  const clickIncrement = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: prevQuantities[itemId] + 1,
    }));
  };

  const clickDecrement = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  // Calculate total price for all products in the cart
  const total = cartItems.reduce((acc, item) => {
    const quantity = quantities[item.id];
    if (item.attributes && item.attributes.prixHabituel) {
      return acc + item.attributes.prixHabituel * quantity;
    }
    return acc;
  }, 0);

  return (
    <div className="static h-100 w-100">
      {!cartItems.length > 0 ? (
        <>
          <h2 className="text-center font-serif text-2xl ">
            Your cart is empty <br />
            <span className="font-serif text-sm text-gray-400">
              Add products while you shop, so they'll be ready for checkout later.
            </span>
          </h2>
          <Link to="/shop">
            <button style={{ marginLeft: '45%', marginTop: '20%' }} className=" shadow bg-slate-950 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded">
              {' '}
              <FontAwesomeIcon icon={faBackward} /> Back shoping
            </button>
          </Link>
        </>
      ) : (
        <h2 className="text-center font-serif text-2xl ">Cart </h2>
      )}
      <div className="flex flex-wrap gap-4 ">
        <div style={{ border: 'solid 1px green' }} className=" flex flex-col gap-1 static  ">
          {cartItems.map((item) => (
            <div className=" container  flex flex-wrap gap-6 static rounded" key={item.id}>
              <div className="flex flex-wrap gap-10 ">
                <div className="w-40 mr-20 mb-5 ">
                  <p className="font-serif mb-2">{item.attributes.Title}</p>
                  <img
                    className="rounded shadow-2xl"
                    src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                    alt={item.attributes.Title}
                    style={{ maxWidth: '80%' }}
                  />
                </div>

                <div className="mr-5 w-40">
                  <div className="flex flex-row gap-3">
                    <span>{item.attributes.prixHabituel} $</span>
                    <span className="line-through text-gray-400">{item.attributes.prixSolde} $</span>
                  </div>
                  <label>Taille</label>
                  <br />
                  <select className="h-6 text-xs rounded-md py-1 pt-1   shadow-sm  " name="selectTail">
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
                  <div className="static">
                    <div className="buttonss absolute flex flex-wrap gap-10 ">
                      <button
                        onClick={() => clickIncrement(item.id)}
                        className="w-5 h-5 text-white bg-slate-600 hover:bg-blue-700  font-bold px-1 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => clickDecrement(item.id)}
                        className=" w-5 h-5 text-white bg-slate-600 hover:bg-blue-700  font-bold px-1 rounded"
                      >
                        -
                      </button>
                    </div>
                    <input
                      type="text"
                      value={quantities[item.id]}
                      readOnly
                      className="ml-4 text-center w-12 h-5 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pt-1 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    />
                    <FontAwesomeIcon
                      size="sm"
                      style={{ marginTop: '15px' }}
                      className="text-slate-950 cursor-pointer text-xs h-8 w-4   "
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
          <div style={{ position: 'absolute', marginLeft: '500px', width: '40%', height: '70%' }}>
            <h2 className="font-serif ">CART SUMMARY</h2>
            <div style={{ border: 'solid 1px black' }} className="mr-5 mt-3">
              <p className="font-serif ml-3">
                Subtotal <span className="ml-8 font-mono font-bold ">{total}$</span>{' '}
              </p>
              <p className="font-mono text-xs ml-3">
                marAnime items are eligible for free shipping <FontAwesomeIcon icon={faCheck} className="text-green-500" />{' '}
              </p>
            
                <button onClick={handelOrder} className="ml-60 mb-2 shadow bg-slate-950 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 ml-80 mt-30 rounded">
                  Order 
                </button>


            
            </div>
          </div>
        )}


        {/* For paye Carte ! */}



        
      

        {successMessage && (
        <div style={{marginTop:"25%" ,width:"25%" ,height:"25%" ,marginLeft:"30%" }} className="alert-suce   bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <div className="flex">
            <div className="py-1">
              <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Paye successfully!</p>
              <p className="text-sm">Thanks for shoping 😉</p>
            </div>
          </div>
        </div>
      )}

       {showcart  ?
       
       
       <div  style={{marginTop:'15%'}} className='Carte-paye '>
       
       <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>


<section className="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
  <div className="h-full">
    <div>
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
      </div>
   
      <div className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
        <div className="bg-white px-8 pb-6 rounded-b shadow-lg">
      
          <div className="text-center mb-6">
           
            <h1 className="text-xl leading-snug text-gray-800 font-semibold mb-2"> 
            </h1>
            <div style={{display:'flex' ,marginLeft:'40%'}} >
            <h1 className='font-serif'>Anime</h1> <span className='bg-slate-950 font-serif text-slate-50 rounded '>Shop </span>
            </div>
           
          </div>

          {/* Toggle */}
          <div className="flex justify-center mb-6">
            <div className="relative flex w-full p-1 bg-gray-50 rounded">
              <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                <span
                  className="absolute inset-0 w-1/2 bg-white rounded border border-gray-200 shadow-sm transform transition duration-150 ease-in-out"
                  style={{ transform: payWithCard ? 'translateX(0)' : 'translateX(100%)' }}
                ></span>
              </span>
              <button className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 ${payWithCard ? 'text-sky-700' : ''}`} onClick={handlePayWithCard}>
                Pay With Card
              </button>
              <button className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 ${!payWithCard ? 'text-sky-700' : ''}`} onClick={handlePayWithPayPal}>
                Pay With PayPal<FontAwesomeIcon style={{width:'10%'}} className='text-sky-700 ' icon={faPaypal} />
              </button>
            </div>
          </div>

          {/* Card form */}
          {  payWithCard ? (
            <div  className="space-y-4">
              {/* Card Number */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="card-nr">Card Number <span className="text-red-500">*</span></label>
                <input
                  ref={nmbCard}
                  id="card-nr"
                  className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                  type="text"
                  placeholder="1234 1234 1234 1234"
                />
                {errorMessages.Numero && <p style={{ color: "red" }}>{errorMessages.Numero}</p>}
              </div>
              {/* Expiry and CVC */}
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-expiry">Expiry Date <span className="text-red-500">*</span></label>
                  <input
                    ref={experDate}
                    id="card-expiry"
                    className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                    type="text"
                    placeholder="MM/YY"
                  />
                  {errorMessages.Exper_Date && <p style={{ color: "red" }}>{errorMessages.Exper_Date}</p>}
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-cvc">CVC <span className="text-red-500">*</span></label>
                  <input
                    ref={cvc}
                    id="card-cvc"
                    className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                    type="text"
                    placeholder="CVC"
                  />
                  {errorMessages.Cvc && <p style={{ color: "red" }}>{errorMessages.Cvc}</p>}

          
                </div>
              </div>
              {/* Name on Card */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="card-name">Name on Card <span className="text-red-500">*</span></label>
                <input
                
                ref={nameCard}
                  id="card-name"
                  className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                  type="text"
                  placeholder="John Doe"
                />
                {errorMessages.Name && <p style={{ color: "red" }}>{errorMessages.Name}</p>}
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="card-email">Email <span className="text-red-500">*</span></label>
                <input
                 ref={email}
                  id="card-email"
                  className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                  type="email"
                  placeholder="john@company.com"
                />
                {errorMessages.Email && <p style={{ color: "red" }}>{errorMessages.Email}</p>}
              </div>
            </div>
          ) : (
            <div>
              {/* PayPal payment form */}
              <div  >
           
            <div class="mb-4">
                <label for="description" class="block text-sm font-medium text-gray-700">Description<span className='text-xs'>(optionale)</span></label>
                <textarea id="description" ref={description} name="description" rows="3" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" ></textarea>
                
            </div>
            <div class="mb-4">
                <label for="card_number" class="block text-sm font-medium text-gray-700">Card Number</label>
                <input type="text" id="card_number" name="card_number" ref={nmbCardPaypal} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                {errorMessages.NumeroPaypal && <p style={{ color: "red" }}>{errorMessages.NumeroPaypal}</p>}
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label for="expiry_date" class="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <input type="text" id="expiry_date" ref={experDatePaypal} name="expiry_date" placeholder="MM/YY" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    {errorMessages.Exper_DatePay && <p style={{ color: "red" }}>{errorMessages.Exper_DatePay}</p>}
                </div>
                <div>
                    <label for="cvv" class="block text-sm font-medium text-gray-700">CVV</label>
                    <input type="text" id="cvv" ref={cvcPay} name="cvv"  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    {errorMessages.CvcPay && <p style={{ color: "red" }}>{errorMessages.CvcPay}</p>}
                </div>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" ref={emailPay} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                {errorMessages.EmailPay && <p style={{ color: "red" }}>{errorMessages.EmailPay}</p>}
            </div>
           
        </div>
              
            </div>
          )}
          {/* Form footer */}
          <div className="mt-6">
            <div className="mb-4">
              <button  type='submit' onClick={handleSubmit}
                className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-slate-950 hover:bg-slate-700 text-white focus:outline-none focus-visible:ring-2"
              
              >
                Pay ${total}
              </button>
            </div>
            <div className="text-xs text-gray-500 italic text-center">You'll be charged $253, including $48 for VAT in Italy</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60" x-show="open" x-data="{ open: true }">

</div>
    
      </div>:""
        
       } 
      </div>
      <footer style={{ position: 'absolute', marginTop: '450px', width: '100%' }}>
        <Foter />
      </footer>
    </div>
  );
};

export default CarteContextDisplay;




