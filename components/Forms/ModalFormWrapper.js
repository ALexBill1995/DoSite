import React from 'react';
import { ModalFormBody } from '@components/Forms/ModalFormBody';
import { useTranslation } from '@components/translations/TranslationsContext';
import { useSettingsContext } from '@components/SettingsContext';

export const ModalFormWrapper = () => {
  const { t } = useTranslation();
  const { toggleFormModal } = useSettingsContext();
  return (
    <div className="submit-form-container">
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={toggleFormModal}
      >
        <span />
      </button>
      <div className="above-heading">{t('help-form.subtitle')}</div>
      {/*<h2 className="news-subtitle">newsletter.news-subtitle</h2>*/}
      <ModalFormBody />
    </div>
  );
};
