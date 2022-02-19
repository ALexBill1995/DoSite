import React from 'react';
import { useTranslation } from '@components/translations/TranslationsContext';

export const Participants = () => {
  const { t, langDict, activeLocale } = useTranslation();
  return (
    <div id="participants" className="basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center section-title">
              <h2 className="d-title">{t('menu.participants')}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h4 className="title-quote" style={{color: '#3c464f', fontFamily: 'Marcellus SC', fontSize: '18px'}}>{t('are-you-know')}</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="image-container">
              <img
                className="img-fluid"
                src="/images/detailsImg.png"
                alt="alternative"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="text-container">
              <p className="d-text" style={{ color: '#4f5b67', textAlign: 'justify'}}>{t('why-you-need-title')}</p>
              <ul className="list-unstyled li-space-lg">
                {Object.keys(langDict[activeLocale].whyYouNeed).map((key) => {
                  return (
                    <li key={key} className="media">
                      <i className="fas fa-circle" style={{ color: '#eb9659' }}></i>
                      <div className="media-body media-body_1" style={{ color: '#4f5b67', textAlign: 'justify'}}>
                        {t(`whyYouNeed.${key}`)}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center" style={{ padding: '50px' }}>
            <h2 className="d-title">{t('whatReceiveTitle')}</h2>
          </div>
        </div>
        <div className="row text-center what-you-receive-list">
          <div className="col-lg-6 col-xl-4 col-sm-12">
            <img className="rounded mx-auto d-block imageStyle" src='/images/ReceiveAdditionalMarketImg.png'/>
            <p className="mt-3 paragraphStyle">{t('what-you-receive.key1')}</p>
          </div>
          <div className="col-lg-6 col-xl-4 col-sm-12">
            <img className="rounded mx-auto d-block imageStyle" src='/images/ReceiveSupportImg.png'/>
            <p className="mt-3 paragraphStyle">{t('what-you-receive.key2')}</p>
          </div>
          <div className="col-lg-6 col-xl-4 col-sm-12">
            <img className="rounded mx-auto d-block imageStyle" src='/images/ReceiveControlImg.png'/>
            <p className="mt-3 paragraphStyle">{t('what-you-receive.key3')}</p>
          </div>
          <div className="col-lg-6 col-xl-4 col-sm-12">
            <img className="rounded mx-auto d-block imageStyle" src='/images/ReceiveIndividualApproachImg.png'/>
            <p className="mt-3 paragraphStyle">{t('what-you-receive.key4')}</p>
          </div>
          <div className="col-lg-6 col-xl-4 col-sm-12">
            <img className="rounded mx-auto d-block imageStyle" src='/images/ReceiveReliabilityImg.png'/>
            <p className="mt-3 paragraphStyle">{t('what-you-receive.key5')}</p>
          </div>
          <div className="col-lg-6 col-xl-4 col-sm-12">
            <img className="rounded mx-auto d-block imageStyle" src='/images/ReceiveAuthorityImg.png'/>
            <p className="mt-3 paragraphStyle">{t('what-you-receive.key6')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
