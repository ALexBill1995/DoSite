import React from 'react';
import { SettingsProvider } from '@components/SettingsContext';

function MyApp({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <Component {...pageProps} />
    </SettingsProvider>
  );
}

export default MyApp;
