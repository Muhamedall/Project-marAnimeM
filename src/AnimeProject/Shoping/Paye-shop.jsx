import React, { useState } from 'react';

const Paye = () => {
  const [payWithCard, setPayWithCard] = useState(true);

  const handlePayWithCard = () => {
    setPayWithCard(true);
  };

  const handlePayWithPayPal = () => {
    setPayWithCard(false);
  };

  return (
    <>
      {/* Include Tailwind JIT CDN compiler
          More info: https://beyondco.de/blog/tailwind-jit-compiler-via-cdn */}
      <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>

      {/* Snippet */}
      <section className="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
        <div className="h-full">
          {/* Pay component */}
          <div>
            {/* Card background */}
            <div className="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
              <img
                className="rounded-t shadow-lg"
                src="https://preview.cruip.com/mosaic/images/pay-bg.jpg"
                width="460"
                height="180"
                alt="Pay background"
              />
            </div>
            {/* Card body */}
            <div className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
              <div className="bg-white px-8 pb-6 rounded-b shadow-lg">
                {/* Card header */}
                <div className="text-center mb-6">
                  <div className="mb-2">
                    <img
                      className="-mt-8 inline-flex rounded-full"
                      src="https://preview.cruip.com/mosaic/images/user-64-13.jpg"
                      width="64"
                      height="64"
                      alt="User"
                    />
                  </div>
                  <h1 className="text-xl leading-snug text-gray-800 font-semibold mb-2">Front-End Learning 🔥</h1>
                  <div className="text-sm">
                    Learn how to create real web apps using HTML & CSS. Code templates included.
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
                    <button className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 ${payWithCard ? 'text-indigo-600' : ''}`} onClick={handlePayWithCard}>
                      Pay With Card
                    </button>
                    <button className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 ${!payWithCard ? 'text-indigo-600' : ''}`} onClick={handlePayWithPayPal}>
                      Pay With PayPal
                    </button>
                  </div>
                </div>

                {/* Card form */}
                {payWithCard ? (
                  <div className="space-y-4">
                    {/* Card Number */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="card-nr">Card Number <span className="text-red-500">*</span></label>
                      <input
                        id="card-nr"
                        className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                        type="text"
                        placeholder="1234 1234 1234 1234"
                      />
                    </div>
                    {/* Expiry and CVC */}
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="card-expiry">Expiry Date <span className="text-red-500">*</span></label>
                        <input
                          id="card-expiry"
                          className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                          type="text"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="card-cvc">CVC <span className="text-red-500">*</span></label>
                        <input
                          id="card-cvc"
                          className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                          type="text"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                    {/* Name on Card */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="card-name">Name on Card <span className="text-red-500">*</span></label>
                      <input
                        id="card-name"
                        className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                        type="text"
                        placeholder="John Doe"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="card-email">Email <span className="text-red-500">*</span></label>
                      <input
                        id="card-email"
                        className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                        type="email"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* PayPal payment form */}
                    {/* Add your PayPal payment form JSX here */}
                    <div>PayPal Payment Form</div>
                  </div>
                )}
                {/* Form footer */}
                <div className="mt-6">
                  <div className="mb-4">
                    <button
                      className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2"
                      onClick={() => {}}
                    >
                      Pay $253.00
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
        <div className="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
          <div>👉 <a className="hover:underline ml-1" href="https://cruip.com/mosaic/?ref=codepen-cruip-customers-table" target="_blank">More components on Cruip.com</a></div>
          <button className="text-gray-500 hover:text-gray-400 ml-5" onClick={() => {}}>
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Paye;
