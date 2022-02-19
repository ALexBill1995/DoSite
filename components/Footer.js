import { useSettingsContext } from '@components/SettingsContext';

export default function Footer() {
  const { toggleFormModal } = useSettingsContext();
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__first">
          <div className="region region-footer-top">
            <div id="block-footer-logo" className="block block-footer-logo">
              <div className="block__layout">
                <a href="/" rel="home" className="site-logo">
                  <img src="/themes/personal/favicon.png" alt="Головна" />
                </a>
                <div className="site-name">
                  <a href="/" title="Головна" rel="home">
                    Вознюк І.В.
                  </a>
                </div>
                <div className="site-slogan">Фахівець публічних закупівль</div>
              </div>
            </div>
            <div
              id="block-footer-contacts"
              className="block block-footer-contacts"
            >
              <div className="block__layout">
                <div className="content">
                  <div className="field field--name-field-phone field--type-link field--label-hidden field__items">
                    <div className="field__item">
                      <a href="tel:0677350991">(067) 735 09 91</a>
                    </div>
                    <div className="field__item">
                      <a href="tel:0965838462">(096) 583 84 62</a>
                    </div>
                  </div>
                  <div className="contacts_wrap">
                    <div className="field field--name-field-email field--type-link field--label-hidden field__item">
                      <a href="mailto:success.tender@gmail.com">
                        success.tender@gmail.com
                      </a>
                    </div>
                    <div className="field field--name-field-info field--type-string field--label-hidden field__item">
                      Працюємо пн.-пт.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="block-footer-address"
              className="block block-footer-address"
            >
              <div className="block__layout">
                <div className="content">
                  <div className="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden field__item">
                    <p>
                      Адреса для кореспонденції та прийому:
                      <br />
                      24000, Вінницька область,
                    </p>
                  </div>
                  {/*<div className="field field--name-field-coord field--type-link field--label-hidden field__item">*/}
                  {/*  <a*/}
                  {/*    href="https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0,+32,+%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D1%96%D0%B2-%D0%9F%D0%BE%D0%B4%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B8%D0%B9,+%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+24001/@48.4441102,27.7996253,17z/data=!3m1!4b1!4m5!3m4!1s0x47332f08c1a6ec15:0x72636b6ca0e95755!8m2!3d48.4441067!4d27.801814"*/}
                  {/*    target="_blank"*/}
                  {/*    rel="noreferrer"*/}
                  {/*  >*/}
                  {/*    48.4441067, 27.7996253*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="region region-footer">
            <div id="block-copy" className="block block-copy">
              <div className="block__layout">
                <div className="content">
                  <div className="field field--name-field-info field--type-string field--label-hidden field__item">
                    {/*© 2004-2020. Адвокат Королюк О.В., надаю послуги з*/}
                    {/*кримінального та інших видів захисту з 2004 року*/}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button onClick={toggleFormModal} className="custom-button">
                Передзвоніть мені!
              </button>
            </div>
            <div
              id="block-footer-socials"
              className="block block-footer-socials"
            >
              <div className="block__layout">
                <div className="content">
                  <div className="field field--name-field-social field--type-link-image-field field--label-hidden field__items">
                    <div className="field__item">
                      <a
                        href="https://www.facebook.com/profile.php?id=100006522218962"
                        className="link-image"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {' '}
                        <img
                          width="9"
                          height="17"
                          src="/images/facebook.svg"
                          alt=""
                          data-src="/sites/default/files/2020-05/path.svg"
                          className=" ls-is-cached lazyloaded"
                        />
                      </a>
                    </div>
                    <div className="field__item">
                      <a
                        href="https://instagram.com/advokat.gov.help?igshid=17vr1c625f81e "
                        className="link-image"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {' '}
                        <img
                          width="16"
                          height="16"
                          src="/images/instagram.svg"
                          alt=""
                          data-src="/sites/default/files/2020-05/union.svg"
                          className=" ls-is-cached lazyloaded"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="body" className="scroll-top page-scroll" />
      </footer>
      <div className="mobile-phones">
        <div className="field field--name-field-phone field--type-link field--label-hidden field__items">
          <div className="field__item">
            <a href="tel:0677350991">(067) 735 09 91</a>
          </div>
          <div className="field__item">
            <a href="tel:0965838462">(096) 583 84 62</a>
          </div>
        </div>
      </div>
    </>
  );
}
