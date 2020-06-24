import React from 'react';
import Header from '../modules/Header';
import Content from '../modules/Content';
import Footer from '../modules/Footer';
import Image from '../atoms/Image';
import Settings from '../modules/Settings';
import { Josephe } from '../data/images';
import 'bootstrap/dist/css/bootstrap.css';

import '../styles.scss';

const Dashboard = () => {
  return (
    <>
      <Header>
        <Image src={Josephe.link} alt={Josephe.alt} />
      </Header>
      <Settings />
      <Content />
      <Footer />
    </>
  );
};

export default Dashboard;
