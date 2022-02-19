import React from 'react';
import Head from 'next/head';

export const Meta = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Tender success</title>
      <meta name="title" content="<?php t('title')?>" />
      <meta name="description" content="<?php t('og-description')?>" />
    </Head>
  );
};
