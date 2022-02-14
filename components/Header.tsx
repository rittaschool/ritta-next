import React from 'react';
import Image from 'next/image';
import logoImage from '../assets/Ritta_White.svg';

const Header = () => {
  return (
    <header className="w-full flex h-20 bg-primary items-center">
      <div className="relative h-full w-36 m-4">
        <Image layout="fill" src={logoImage} alt="Ritta Logo" />
      </div>
    </header>
  );
};

export default Header;
