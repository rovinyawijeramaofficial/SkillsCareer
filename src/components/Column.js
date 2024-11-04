// src/components/Column.js

import React from 'react';

function Column({ imageSrc, title, subtitle, description }) {
  return (
    <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col min-h-[1116px] max-md:max-w-full">
        <img
          loading="lazy"
          src={imageSrc}
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col bg-blue-950 bg-opacity-20 max-md:max-w-full">
          <div className="flex flex-col justify-between p-20 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-start w-full max-md:max-w-full">
              <button
                className="flex gap-4 justify-center items-center px-8 bg-white rounded-md h-[85px] w-[85px] max-md:px-5"
                aria-label="Menu"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b84355b1c8dccf883a0a06cee598709874473f7c988db00b3078811c002b0e15?placeholderIfAbsent=true&apiKey=d4a88a5c09a74c7387ac5cb5181691d6"
                  alt="Menu Icon"
                  className="object-contain self-stretch my-auto aspect-square w-[45px] h-[45px]" // Increased size
                />
              </button>
            </div>
            <div className="flex flex-col w-full leading-tight text-white mt-[687px] max-md:mt-10 max-md:max-w-full">
              <h1 className="text-4xl font-bold text-white">{title}</h1>
              <h2 className="mt-4 text-5xl font-black text-white max-md:max-w-full max-md:text-4xl">
                {subtitle}
              </h2>
              <p className="mt-4 text-xl font-semibold leading-6 text-white max-md:max-w-full">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Column;
