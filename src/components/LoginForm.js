import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-9 w-full font-semibold text-center text-blue-950 max-md:max-w-full"
    >
      <div className="flex flex-col w-full text-base whitespace-nowrap max-md:max-w-full">
        {/* Email Field */}
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="gap-2.5 self-stretch py-6 pr-2.5 pl-4 w-full bg-white rounded-md border border-indigo-300 border-solid backdrop-blur-[26px] min-h-[64px] max-md:max-w-full"
          required
        />

        {/* Password Field */}
        <label htmlFor="password" className="sr-only">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="gap-2.5 self-stretch py-6 pr-2.5 pl-4 mt-8 w-full bg-white rounded-md border border-indigo-300 border-solid backdrop-blur-[26px] min-h-[64px] max-md:max-w-full"
          required
        />

        {/* Forget Password Field */}
        <a
          href="#"
          className="self-start mt-4 text-sm text-blue-950 underline"
        >
          Forget Password
        </a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="flex flex-wrap gap-4 justify-center items-center px-16 py-5 mt-9 w-full text-lg text-white whitespace-nowrap rounded-md bg-blue-950 min-h-[64px] max-md:px-5 max-md:max-w-full"
      >
        <span className="self-stretch my-auto">Login</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/46271052550947a6e61671658dba5008b331c8579d180543b0d5d0fa7a98f8c9?placeholderIfAbsent=true&apiKey=d4a88a5c09a74c7387ac5cb5181691d6"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.04] w-[25px]"
        />
      </button>
    </form>
  );
}

export default LoginForm;
