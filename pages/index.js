import React from 'react';

import { Home } from '@components/index/home/Home';
import { Experience } from '@components/index/Experience';
import { Participants } from '@components/index/Participants';
import { Pricing } from '@components/index/Pricing';
import Footer from '@components/Footer';
import { Meta } from '@components/Meta';
import { Customers } from '@components/index/Customers';

export default function BasePage() {
  return (
    <>
      <Meta />
      <Home />
      <Experience />
      <Participants />
      <Pricing />
      <Customers />
      <Footer />
    </>
  );
}
