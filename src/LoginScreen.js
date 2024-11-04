import React from 'react';
import Column from './components/Column';
import LoginForm from './components/LoginForm';
import SocialLogin from './components/SocialLogin';

function LoginScreen() {
  return (
    <main className="overflow-hidden pb-1.5 bg-white">
      <div className="flex gap-5 max-md:flex-col">
        <Column
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a3e9ac8513436cb3474ccdc4ebeb06463dffe291983245b39a527f24cfecab45?placeholderIfAbsent=true&apiKey=d4a88a5c09a74c7387ac5cb5181691d6"
          title="Login"
          subtitle="SKILLS CAREERS"
          description="Welcome to Skill Careers, where finding your dream job or the right talent is just a click away."
        />
        <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-between px-16 py-24 mx-auto mt-2 w-full bg-white rounded-[100px_5px_5px_100px] max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/513cae04b0157b640784cb34e437043f0edb82a6c6755395772aa209dbacd185?placeholderIfAbsent=true&apiKey=d4a88a5c09a74c7387ac5cb5181691d6"
              alt="Skills Careers Logo"
              className="self-center w-[209px]"
            />
            <h2 className="mt-9 text-xl text-center text-blue-950">Welcome Back! Let's Get You Started.</h2>
            <p className="mt-9 text-base font-semibold text-center text-blue-950">
              Log in to access your account and continue your career journey or recruitment process.
            </p>
            <LoginForm />
            <div className="mt-9 w-full bg-indigo-300 h-[2px]" />
            <p className="mt-9 text-xl font-semibold text-center text-black">Continue with Google or LinkedIn.</p>
            <SocialLogin />
            <p className="mt-9 text-xl text-center text-blue-950">
              <span className="font-semibold">Don't have an account?,</span> <a href="#" className="text-blue-950">Register</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginScreen;

