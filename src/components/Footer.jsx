import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-center py-10 mt-16 border-t border-white/10 text-gray-500 text-sm">
      <p>
        &copy; {new Date().getFullYear()} EmryBoi. All Rights Reserved.
      </p>
      <p className="mt-2">
        Built with React, Tailwind CSS, and Framer Motion.
      </p>
    </footer>
  );
};

export default Footer; 