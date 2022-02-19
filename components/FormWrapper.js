import React, { useEffect, useState } from 'react';
import { ModalFormWrapper } from '@components/Forms/ModalFormWrapper';
import { useSettingsContext } from '@components/SettingsContext';

export const FormWrapper = () => {
  const { isFormModalOpened } = useSettingsContext();
  const [modalKey, setKey] = useState('defaultKey');
  useEffect(() => {
    if (!isFormModalOpened) {
      setTimeout(() => {
        setKey('_' + Math.random().toString(36).substr(2, 9));
      }, 700);
    }
  }, [isFormModalOpened, setKey]);
  return (
    <div
      className={`form-transition-wrapper ${
        isFormModalOpened ? 'open-form-wrapper' : ''
      }`}
    >
      <ModalFormWrapper key={modalKey} />
    </div>
  );
};
