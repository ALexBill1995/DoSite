import React from 'react';
import { useTranslation } from '@components/translations/TranslationsContext';
import { useSettingsContext } from '@components/SettingsContext';

export const Navbar = () => {
  const { t } = useTranslation();
  const { toggleFormModal } = useSettingsContext();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-awesome fas fa-bars"></span>
          <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link nav-link_1 page-scroll text-uppercase"
                href="#header"
              >
                {t('menu.home')} <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-link_3 page-scroll text-uppercase"
                href="#experience"
              >
                {t('menu.experience')}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-link_4 page-scroll text-uppercase"
                href="#participants"
              >
                {t('menu.participants')}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-link_4 page-scroll text-uppercase"
                href="#customers"
              >
                {t('menu.customers')}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-link_4 page-scroll text-uppercase"
                href="#contacts"
              >
                {t('menu.contacts')}
              </a>
            </li>
          </ul>
          <span className="nav-item">
            <button
              type="button"
              className="btn-outline-sm"
              onClick={toggleFormModal}
            >
              {t('menu.order')}
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
};
