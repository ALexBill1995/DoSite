import React from 'react';
import { useTranslation } from '@components/translations/TranslationsContext';
import { useSettingsContext } from '@components/SettingsContext';

export const Customers = () => {
  const { t, langDict, activeLocale } = useTranslation();
  const { toggleFormModal } = useSettingsContext();
  return (
    <div id="customers" className="basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center section-title">
              <h2 className="d-title">{t('menu.customers')}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h4 className="title-quote" style={{color: '#3c464f', fontFamily: 'Marcellus SC', fontSize: '18px'}}>{t('customerQuote')}</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="image-container">
              <img 
                className="img-fluid"
                src="/images/customersImg.png"
                alt="alternative"
                style={{width: "79%", height: "79%"}}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="text-container">
              <p className="d-text">{t('customersGive')}</p>
              <ul className="list-unstyled li-space-lg">
                {Object.keys(
                  langDict[activeLocale].customerReceiveServices
                ).map((key) => {
                  return (
                    <li key={key} className="media">
                      <i className="fas fa-circle"></i>
                      <div className="media-body media-body_1" style={{ color: '#4f5b67', textAlign: 'justify'}}>
                        {t(`customerReceiveServices.${key}`)}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* ----------------------------------- */}
      <div id="pricing" className="cards-2" style={{paddingBottom: "0px"}}>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading" style={{color: "#3c464f"}}>
              {t('customerKindServices.title')}
              <p>{t('customerKindServices.title1')}</p>
            </h2>
          </div>
        </div>
        <div className="row" style={{paddingBottom: "0px"}}>
          <div className="col-lg-12" style={{paddingBottom: "0px"}}>
            <div className="card">
              <div className="card-body">
                <div className="card-title card-title_1">
                  {t('customerKindServices.open')}
                </div>
                <div className="price">
                  <span className="currency">{t('customerKindServices.openPrice')}</span>
                </div>
                <div className="divider"></div>
                <div className="button-wrapper">
                  <button
                    className="btn-solid-reg btn-solid-docs page-scroll"
                    onClick={() =>
                      toggleFormModal({ priceTablePlan: 'standard' })
                    }
                  >
                    {t('priceTableButton')}
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-title card-title_1">
                  {t('customerKindServices.procedure')}
                </div>
                <div className="price">
                  <span className="currency">{t('customerKindServices.procedurePrice')}</span>
                </div>
                <div className="divider"></div>
                <div className="button-wrapper">
                  <button
                    className="btn-solid-reg btn-solid-docs page-scroll"
                    onClick={() =>
                      toggleFormModal({ priceTablePlan: 'standard' })
                    }
                  >
                    {t('priceTableButton')}
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-title card-title_1">
                  {t('customerKindServices.simplified')}
                </div>
                <div className="price">
                  <span className="currency">{t('customerKindServices.simplifiedPrice')}</span>
                </div>
                <div className="divider"></div>
                <div className="button-wrapper">
                  <button
                    className="btn-solid-reg btn-solid-docs page-scroll"
                    onClick={() =>
                      toggleFormModal({ priceTablePlan: 'standard' })
                    }
                  >
                    {t('priceTableButton')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

        <div className="row">
          <div className="col-lg-12">
            <p className='footnote12px'>{t('customerKindServices.fullSupport')}</p>
            <p className='footnote12px'>{t('customerKindServices.partSupport')}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 style={{ paddingBottom: '25px', marginTop: "80px" }}>
              {t('additionalCustomer')}
            </h3>
            <ul className="list-unstyled li-space-lg text-left">
              {Object.keys(langDict[activeLocale].customerAdditionalServices).map(
                (key) => {
                  return (
                    <li key={key} className="media">
                      <i className="fas fa-circle"></i>
                      <div className="media-body media-body_1 text-justify" style={{ color: '#4f5b67'}}>
                        {t(`customerAdditionalServices.${key}`)}
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
