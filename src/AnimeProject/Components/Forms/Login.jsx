
import { useRef, useState } from "react";
import Foter from "../Foter";

import logo from '../Picturs/06208cd1-478d-4b23-9165-4edc3a15b3e4-removebg-preview.png'
export default function Logine(){
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [errorMessages, setErrorMessages] = useState({
        email: "",
        password: "",
      });

      const [successMessage, setSuccessMessage] = useState("");
      const validateForm = () => {
        const fields = [
         
          { ref: emailRef, name: "email", message: "Email is required." },
          { ref: passwordRef, name: "password", message: "Please enter a password." },
          
        ];
    
        const errors = {};
    
        fields.forEach(({ ref, name, message }) => {
          const value = ref.current.value.trim();
    
          if (value === "") {
            errors[name] = message;
            ref.current.style.border = "1px solid red";
          } else if (name === "email" && !value.match(/^\S+@\S+\.\S+$/)) {
            errors[name] = "Please enter a valid email address.";
          } else {
            errors[name] = "";
            ref.current.style.border = ""; // Reset border style
          }
        });
    
        setErrorMessages(errors);
    
        const isValid = Object.values(errors).every((message) => message === "");
    
        if (isValid) {
          setSuccessMessage("Form submitted successfully!");
          resetForm();
        }
    
        return isValid;
      };
      const resetForm = () => {
       
        emailRef.current.value = "";
        passwordRef.current.value = "";
        
    
        setErrorMessages({
         
          email: "",
          password: "",
          
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hyyy")
        const isValid = validateForm();
        if (isValid) {
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        }
      };


return(

    <>
     
     {successMessage && (
      
        <div class="alert-suc mt-1 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
        <p class="font-bold">Login submitted successfully!</p>
      
      </div>
      )}
     
    <div style={{marginLeft:'35%' ,marginTop:'5%'}} class="w-full max-w-xs static ">
    
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "  >
      <nav className="flex flex-wrap gap-2"> 
      <div>
      <span ><img   style={{width:'35%'}} src={logo} alt=""></img></span> 
      </div>
      <div>
      <h2 className="font-serif  ml-18 text-wheat text-2xl ">Log in to <span className="m-0 font-mono ">mar</span>Anime</h2>
      </div>
      </nav >
    <div class="mt-16 grid space-y-4">
    <a href="https://accounts.google.com/v3/signin/identifier?hl=fr&ifkv=ASKXGp3cGE09nsjhO13NsfqusZj8ef5QsqatulUAptBAL6qUjEZZvIm2wUFaWvSkn6fLYF9uFs7hlg&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin&continue=https%3A%2F%2Faccounts.google.com%2FManageAccount%3Fnc%3D1" target="_blank" rel="noopener noreferrer" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 flex items-center justify-center text-center">
    <div class="relative flex items-center space-x-4">
        <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo"/>
        <span style={{marginLeft:'27px'}} class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
    </div>
</a>


<a href="https://github.com/login" target="_blank" rel="noopener noreferrer" className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 flex items-center justify-center text-center">
    <div className="relative flex items-center space-x-4 justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <span style={{marginLeft:'25px'}} className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
    </div>
</a>

<a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer" className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 flex items-center justify-center text-center">
    <div className="relative flex items-center space-x-4 justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="absolute left-0 w-5" alt="Facebook logo"/>
        <span style={{ marginLeft: '27px' }} className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Facebook</span>
    </div>
</a>

                    </div>
   
                    <div class="flex items-center">
  <div class="flex-1 h-0.5 bg-gray-500"></div>
  <div class="mx-4 text-gray-500">Or</div>
  <div class="flex-1 h-0.5 bg-gray-500"></div>
</div>


    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" >
        Username
      </label>
      <input  ref={emailRef} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
      {errorMessages.email && <p style={{ color: "red" }}>{errorMessages.email}</p>}
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" >
        Password
      </label>
      <input  ref={passwordRef}  class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      {errorMessages.password && <p style={{ color: "red" }}>{errorMessages.password}</p>}
    
    </div>
    <div class="flex items-center justify-between">
      <button onClick={handleSubmit}  className="shadow bg-slate-950 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-slate-950 hover:text-blue-800" href="https://www.facebook.com/login/identify/?ctx=recover&ars=royal_blue_bar&from_login_screen=0" target="_blank" rel="noopener noreferrer">
        Forgot Password?
      </a>
    </div>
  </form>

  </div>
  <footer>
    <Foter/>
  </footer>
   </>


)

}