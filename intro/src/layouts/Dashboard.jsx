import React from 'react';

import { ThemeProvider } from '../contexts/newTheme';
import Header from '../modules/Header';
import { Form } from '../contexts/Form';

import { http } from '../utils/http';
import { useEffect } from 'react';

const Dashboard = () => {
  useEffect(
    () => {
      const getData = async () => {
        const res = await http.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(res);
      };
      getData();
    },
    [],
  );
  return (
    <>
      <ThemeProvider>
        <Form>
          <Header />
        </Form>
      </ThemeProvider>
    </>
  );
};

export default Dashboard;
