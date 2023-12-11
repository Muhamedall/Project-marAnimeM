import { useRef } from "react";


const Form=()=>{
       
         const nameRef=useRef("");
         const emailRef=useRef("");      
         const passwordRef=useRef("");
         const cityRef=useRef("");
         const stateRef=useRef("")
         const codepRef =useRef("")
         const chexkRef=useRef(false);
         



const validForm = () => {
  const nameValue = nameRef.current.value;
  const emailValue = emailRef.current.value;
  const passwordValue = passwordRef.current.value;
  const cityValue = cityRef.current.value;
  const codepValue = codepRef.current.value;
  const statValue = stateRef.current.value;
  const checkValue = chexkRef.current.checked;

  if (
    nameValue.trim() === "" ||
    emailValue.trim() === "" ||
    passwordValue.trim() === "" ||
    checkValue === false ||
    cityValue.trim() === "" ||
    codepValue.trim() === "" || 
    statValue === ""
  ) {
    console.log("Validation failed");
  } 
  else if (!emailValue.match(/^\S+@\S+\.\S+$/)){
    console.log("The format email is not correct !")
  }
 
  else {
    console.log("Form submitted");
  }
};









 const resetForm=()=>{

  nameRef.current.value="";
  emailRef.current.value="";
  passwordRef.current.value="";
  cityRef.current.value="";
  codepRef.current.value="";
  stateRef.current.value="";
  chexkRef.current.checked=false;


 }

  const handelClick=(e)=>{
    e.preventDefault();
    validForm();
    resetForm();
   

    
   

  }



  
    

  
    return (
        <>
       <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        User Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="name" type="text" ref={nameRef} placeholder="Jane Doe"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="Exemple@gmail.com" ref={emailRef} name="email"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" name="password" ref={passwordRef} type="password" placeholder="******************"/>
      
    </div>
  </div>
        <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" name="city" type="text" ref={cityRef} placeholder="Rabat"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="state" ref={stateRef}>
        <option value="">----Choisi----</option>
          <option value="mar">Morroco</option>
          <option value="egy">Egybt</option>
          <option value="jap">Japan</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip"  name ="codepost"type="text" ref={codepRef} placeholder="90210"/>
    </div>
    <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-500 font-bold">
      <input class="mr-2 leading-tight" name ="chex"type="checkbox" ref={chexkRef} />
      <span class="text-sm">
        Send me your newsletter!
      </span>
    </label>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="sm:w-2/3">
      <button className="shadow bg-slate-950 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-0 px-4 rounded" type="submit" onClick={handelClick}>
        Sign Up
      </button>
    </div>
  </div>
  </div>
</form>
</>
      )
    };
    



export default Form;