import React from 'react';
import { useTranslation } from '@components/translations/TranslationsContext';
import { useSettingsContext } from '@components/SettingsContext';

export const Pricing = () => {
  const { t, langDict, activeLocale } = useTranslation();
  const { toggleFormModal } = useSettingsContext();
  return (
    <div id="pricing" className="cards-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading" style={{color: "#3c464f"}}>
              {t('priceTableHeader')}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="card-title card-title_1">
                  {t('standard-plan.title')}
                </div>
                <div className="price">
                  <span className="currency">{t('standard-plan.price')}</span>
                </div>
                <div className="divider"></div>
                <ul className="list-unstyled li-space-lg">
                  {Object.keys(langDict[activeLocale].priceTable)
                    .map((key) => {
                      return langDict[activeLocale].priceTable[key];
                    })
                    .map((item, index) => {
                      return (
                        <li key={`standard-${index}`} className="media">
                          <i
                            className={`fas ${
                              item.standard ? 'fa-check' : 'fa-times'
                            }`}
                          />
                          <div className="media-body">{item.key}</div>
                        </li>
                      );
                    })}
                </ul>
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
                  {t('professional-plan.title')}
                </div>
                <div className="price">
                  <span className="currency">
                    {t('professional-plan.price')}
                  </span>
                </div>
                <div className="divider"></div>
                <ul className="list-unstyled li-space-lg">
                  {Object.keys(langDict[activeLocale].priceTable)
                    .map((key) => {
                      return langDict[activeLocale].priceTable[key];
                    })
                    .map((item, index) => {
                      return (
                        <li key={`professional-${index}`} className="media">
                          <i
                            className={`fas ${
                              item.professional ? 'fa-check' : 'fa-times'
                            }`}
                          />
                          <div className="media-body">{item.key}</div>
                        </li>
                      );
                    })}
                </ul>
                <div className="button-wrapper">
                  <button
                    className="btn-solid-reg btn-solid-docs page-scroll"
                    onClick={() =>
                      toggleFormModal({ priceTablePlan: 'professional' })
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
                  {t('lux-plan.title')}
                </div>
                <div className="price">
                  <span className="currency">{t('lux-plan.price')}</span>
                </div>
                <div className="divider"></div>
                <ul className="list-unstyled li-space-lg">
                  {Object.keys(langDict[activeLocale].priceTable)
                    .map((key) => {
                      return langDict[activeLocale].priceTable[key];
                    })
                    .map((item, index) => {
                      return (
                        <li key={`lux-${index}`} className="media">
                          <i
                            className={`fas ${
                              item.lux ? 'fa-check' : 'fa-times'
                            }`}
                          />
                          <div className="media-body">{item.key}</div>
                        </li>
                      );
                    })}
                </ul>
                <div className="button-wrapper">
                  <button
                    className="btn-solid-reg btn-solid-docs page-scroll"
                    onClick={() => toggleFormModal({ priceTablePlan: 'lux' })}
                  >
                    {t('priceTableButton')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h3 style={{ paddingBottom: '25px' }}>
              {t('additionPricingTitle')}
            </h3>
            <ul className="list-unstyled li-space-lg text-left">
              {Object.keys(langDict[activeLocale].additionalPricing).map(
                (key) => {
                  return (
                    <li key={key} className="media">
                      <i className="fas fa-circle"></i>
                      <div className="media-body media-body_1 text-justify" style={{ color: '#4f5b67'}}>
                        {t(`additionalPricing.${key}`)}
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
