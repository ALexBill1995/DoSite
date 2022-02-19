import React from 'react';
import { useTranslation } from '@components/translations/TranslationsContext';

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <div id="experience" className="tabs">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center section-title">
              <h2 className="d-title">{t('experience.header')}</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="image-container">
              <img className="rounded mx-auto d-block imageStyle" src='/images/educationTitleImg.png'/>
            </div>
            <p className="mt-3" style={{textAlign: 'center'}}>
              {t('experience.education')}
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="image-container">
              <img className="rounded mx-auto d-block imageStyle" src='/images/workExperienceTitleImg.png'/>
            </div>
            <p className="mt-3" style={{textAlign: 'center'}}>
              {t('experience.workExperience')}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="image-container">
              <img className="rounded mx-auto d-block imageStyle" src='/images/purchasesTitleImg.png'/>
            </div>
            <p className="mt-3" style={{textAlign: 'center'}}>
              {t('experience.purchases')}
            </p>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="image-container">
              <img className="rounded mx-auto d-block imageStyle" src='/images/documentationTitleImg.png'/>
            </div>
            <p className="mt-3" style={{textAlign: 'center'}}>
              {t('experience.documentation')}
            </p>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="image-container">
              <img className="rounded mx-auto d-block imageStyle" src='/images/analysisTitleImg.png'/>
            </div>
            <p className="mt-3" style={{textAlign: 'center'}}>
              {t('experience.analysis')}
            </p>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="row text-center">
        </div>
      </div>
    </div>
  );
};
