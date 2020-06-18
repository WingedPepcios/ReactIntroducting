import React from 'react';
import Header from '../modules/Header';
import Content from '../modules/Content';
import Footer from '../modules/Footer';
import Image from '../atoms/Image';
import { Josephe } from '../data/images';

const listOfHeads = [
  'łysyDebil',
  'dziekanChuj',
  'DorisMenopauza',
  'PotężnyWatan',
]

const Dashboard = () => {
  return (
    <>
      <Header>
        <Image src={Josephe.link} alt={Josephe.alt} />
      </Header>
      <Content heads={listOfHeads} />
      <Footer />
    </>
  );
};

export default Dashboard;
