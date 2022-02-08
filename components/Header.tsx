import React from 'react';
import Image from 'next/image';
import logoImage from '../assets/Ritta_White.svg';

const Header = () => {
  return (
    <div className="w-full flex sticky top-0 left-0 h-20 bg-primary items-center">
      <div className="relative h-full w-36 m-4">
        <Image layout="fill" src={logoImage} alt="Ritta Logo" />
      </div>
    </div>
  );
};

export default Header;
