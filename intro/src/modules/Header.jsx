import React from 'react';
import Logo from '../atoms/Logo';

import { Josephe } from '../data/images';
import Image from '../data/Image';

const Header = () => {
  const returnImage = () => <Image src={Josephe.link} alt={Josephe.alt} />

  return (
    <div>
      <Logo someProps="dupa" children={returnImage}>
         // children
      </Logo>
    </div>
  );
};

export default Header;
