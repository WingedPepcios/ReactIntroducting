import React, { useContext, useEffect } from 'react';
import ThemeButton from '../atoms/ThemeButton';
import { Theme } from '../contexts/Theme';
import { http } from '../utils/http';
import Header from "../modules/Header";
import Content from "../modules/Content";
import Footer from "../modules/Footer";

const Dashboard = () => {
  const { changeTheme } = useContext(Theme);
  
  return (
    <>
        <Header/>
        <Content/>
        <Footer/>
    </>
  );
};

export default Dashboard;
