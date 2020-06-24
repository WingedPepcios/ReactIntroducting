import React from 'react';
import Header from '../modules/Header';
import Menu from '../modules/Menu/Menu'
import Content from '../modules/Content';
import Footer from '../modules/Footer';
import Image from '../atoms/Image';
import { Josephe } from '../data/images';

import '../styles.scss';

const Dashboard = () => {
  return (
    <>
      <Header>
        <Image src={Josephe.link} alt={Josephe.alt} />
      </Header>
      <Menu />
      <Content />
      <Footer />
    </>
  );
};

export default Dashboard;
