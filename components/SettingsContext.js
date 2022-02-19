import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext({});

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }) => {
  const [formModal, setFormModal] = useState(false);
  const [formData, setFormData] = useState({
    priceTablePlan: null,
  });

  const contextValue = {
    isFormModalOpened: formModal,
    formData,
    toggleFormModal: (data) => {
      setFormModal((oldValue) => !oldValue);
      formData && setFormData(data);
    },
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
