import React, { useCallback } from 'react';

export const Header = () => {
  const mouseAnimationClickHandler = useCallback(() => {
    window.scrollTo({
      top: window.document.getElementById('experience').offsetTop,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="#header">
      <div className="site-content__top">
        <div className="region">
          <div id="block-banner" className="block block-banner">
            <div className="block__layout">
              <div className="content">
                <div
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  className="banner__left"
                >
                  <div className="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden field__item">
                    <p style={{ color: '#dfe6e8' }}>
                      <span>
                        Професійний супровід
                      </span>
                      <br /> в публічних закувілях
                    </p>
                  </div>
                </div>

                <div className="field field--name-field-bg field--type-image field--label-hidden field__item">
                  <img
                    src="/images/home-background2.png"
                    width="1920"
                    height="760"
                    alt=""
                    className="image-style-_920x760"
                  />
                </div>
                <div className="banner__top">
                  <div className="field field--name-field-call-back field--type-webform field--label-hidden field__item">
                    <a
                      id="webform-submission-call-back-block-content-4-form-ajax-content"
                      tabIndex="-1"
                      aria-hidden="true"
                    ></a>
                    <div
                      id="webform-submission-call-back-block-content-4-form-ajax"
                      className="webform-ajax-form-wrapper"
                      data-effect="none"
                      data-progress-type="throbber"
                    >
                      <form className="webform-submission-form" method="post">
                        <div className="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-name form-item-name form-no-label">
                          <input
                            data-drupal-selector="edit-name"
                            type="text"
                            id="edit-name"
                            name="name"
                            value=""
                            size="60"
                            maxLength="255"
                            placeholder="Ваше ім’я"
                            className="form-text"
                          />
                        </div>
                        <div className="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-phone form-item-phone form-no-label">
                          <input
                            className="js-webform-input-mask form-text required"
                            type="text"
                            id="edit-phone"
                            name="phone"
                            value=""
                            size="60"
                            maxLength="255"
                            placeholder="Ваш телефон*"
                            required="required"
                            aria-required="true"
                            inputMode="text"
                          />
                        </div>
                        <div
                          className="form-actions webform-actions js-form-wrapper form-wrapper"
                          id="edit-actions"
                        >
                          <button className="custom-button">
                            Передзвоніть мені!
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={mouseAnimationClickHandler}
              className="mouse-scroll"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
