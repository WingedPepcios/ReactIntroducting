import React from 'react';
import Logo from '../atoms/Logo';

import { LogoImageData } from '../data/images';
import Image from '../atoms/Image';
import Navigation from "./Navigation";

const Header = () => {

  return (
    <header>
      <Logo>
          <Image src={LogoImageData.link} alt={LogoImageData.alt} />
      </Logo>
        <Navigation/>
    </header>
  );
};

export default Header;
