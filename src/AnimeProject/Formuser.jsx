//Form.jsx
import { useRef, useState } from "react";

const Form = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const acceptConditionRef = useRef(false);

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    password: "",
    accept: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const fields = [
      { ref: nameRef, name: "name", message: "Please enter a username." },
      { ref: emailRef, name: "email", message: "Email is required." },
      { ref: passwordRef, name: "password", message: "Please enter a password." },
      {
        ref: acceptConditionRef,
        name: "accept",
        message: "Please check your condition.",
      },
    ];

    const errors = {};

    fields.forEach(({ ref, name, message }) => {
      const value = ref.current.value.trim();

      if (value === "") {
        errors[name] = message;
        ref.current.style.border = "1px solid red";
      } else if (name === "email" && !value.match(/^\S+@\S+\.\S+$/)) {
        errors[name] = "Please enter a valid email address.";
      } else if (name === "accept" && !ref.current.checked) {
        errors[name] = message;
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
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    acceptConditionRef.current.checked = false;

    setErrorMessages({
      name: "",
      email: "",
      password: "",
      accept: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };

  return (
    <>
      {successMessage && (
        <div className="alert-suc bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <div className="flex">
            <div className="py-1">
              <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Form submitted successfully!</p>
              <p className="text-sm">Thanks for inscription, you are welcome to family marAnime 😉</p>
            </div>
          </div>
        </div>
      )}
      
      <form className=" form-containair " onSubmit={handleSubmit}>
        <div className=" model flex flex-wrap -mx-3 mb-6">
          <div className="  w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              User Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="name"
              type="text"
              ref={nameRef}
              placeholder="Jane Doe"
            />
            {errorMessages.name && <p style={{ color: "red" }}>{errorMessages.name}</p>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="grid-email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="text"
              placeholder="Exemple@gmail.com"
              ref={emailRef}
              name="email"
            />
            {errorMessages.email && <p style={{ color: "red" }}>{errorMessages.email}</p>}
          </div>
          <div className="w-full px-3">
            <label htmlFor="grid-password" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              name="password"
              ref={passwordRef}
              type="password"
              placeholder="******************"
              
            />
           
            
            {errorMessages.password && <p style={{ color: "red" }}>{errorMessages.password}</p>}
          </div>
          
    <div class="md:w-1/3"></div>
    <label className="md:w-2/3 block text-slate-950 font-bold">
      <input className="mr-2 leading-tight" type="checkbox" name="chexInput" ref={acceptConditionRef}/>
      <span className="text-sm">
      I agree to the Terms of Use and Privacy Policy
      {errorMessages.accept && <p style={{ color: "red" }}>{errorMessages.accept}</p>}
      </span>
      
    </label>
    <button
          className="shadow bg-slate-950 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded"
          type="submit"
        >
          Sign Up
        </button>
    

        </div>
        
      </form>
    </>
  );
};

export default Form;
