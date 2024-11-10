import React from 'react';

const FooterMobile = ({ links }) => {
  return (
    <div className='fixed bottom-0 left-0 w-full sm:hidden bg-gray-900 text-white'>
      <div className='flex justify-around p-2'>
        {links.map((link, index) => (
          <a key={index} href={link.url} className='text-center'>
            {/* Render the icon directly from the link.icon */}
            <link.icon className='h-6 w-6 mx-auto' />
            <span className='text-xs'>{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterMobile;
