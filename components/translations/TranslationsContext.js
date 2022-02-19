import React, { createContext, useContext } from 'react';
import rosetta from 'rosetta';

import localesJson from './locales.json';

const i18n = rosetta();
export const defaultLanguage = 'ua';
i18n.locale(defaultLanguage);
i18n.set(defaultLanguage, localesJson.ua);

const tWithFallback = (...args) => {
  const translation = i18n.t(...args);
  // i18n.t returns empty string if translation is not in dictionary
  // we need to return key istead
  if (translation !== '') return translation;
  if (Array.isArray(args[0])) {
    return args[0].join('.');
  }
  return args[0];
};

export const I18nContext = createContext({
  activeLocale: defaultLanguage,
  t: tWithFallback,
  langDict: localesJson,
});

export const I18nProvider = ({ children }) => {
  return <I18nContext.Provider>{children}</I18nContext.Provider>;
};

export const useTranslation = () => {
  return useContext(I18nContext);
};

export const withTranslate = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const tsContext = useContext(I18nContext);
    return <Component {...props} {...tsContext} />;
  };
};
