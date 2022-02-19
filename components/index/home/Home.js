import React from 'react';
import { Navbar } from '@components/index/home/Navbar';
import { Header } from '@components/index/home/Header';
import { FormWrapper } from '@components/FormWrapper';

export const Home = () => {
  return (
    <>
      <FormWrapper />
      <Navbar />
      <Header />
    </>
  );
};
