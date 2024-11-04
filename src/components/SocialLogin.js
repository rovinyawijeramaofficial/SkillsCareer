import React from 'react';

function SocialLogin() {
  const socialButtons = [
    { name: 'Google', icon: '/images/google-icon.png' },
    { name: 'Linkedin', icon: '/images/linkedin-icon.png' }
  ];

  return (
    <div className="flex flex-col mt-9 w-full text-sm text-neutral-200 max-md:max-w-full">
      {socialButtons.map((button, index) => (
        <button
          key={index}
          className={`flex items-center justify-center gap-4 py-6 w-full bg-blue-950 rounded-md ${
            index > 0 ? 'mt-8' : ''
          }`}
        >
          <img src={button.icon} alt={`${button.name} icon`} className="w-[18px]" />
          <span>Sign in with {button.name}</span>
        </button>
      ))}
    </div>
  );
}

export default SocialLogin;
