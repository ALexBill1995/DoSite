import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useSettingsContext } from '@components/SettingsContext';
import { useTranslation } from '@components/translations/TranslationsContext';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const isDataChanged = (beforeObject = {}, afterObject = {}) => {
  return Object.keys(afterObject).some(
    (key) => beforeObject[key] !== afterObject[key]
  );
};

const submitData = (data) => {
  console.log(data);
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'modalForm', ...data }),
  });
};

const baseFormInputClass = 'form-control-input';
const notEmptyClass = 'notEmpty';

const getInputClass = (isDirty) =>
  isDirty ? `${baseFormInputClass} ${notEmptyClass}` : baseFormInputClass;

export const ModalFormBody = () => {
  const { formData } = useSettingsContext();
  const { t } = useTranslation();
  const [isCommentOpen, setCommentOpen] = useState(false);
  const [isSubmitButtonActive, setSubmitButtonStatus] = useState(true);
  const [inputClasses, setInputClasses] = useState({
    name: baseFormInputClass,
    email: baseFormInputClass,
    phone: baseFormInputClass,
    comments: baseFormInputClass,
  });
  const { register, handleSubmit, errors, formState, getValues } = useForm({
    reValidateMode: 'onchange',
    mode: 'all',
  });

  useEffect(() => {
    const newButtonValue =
      (formState.isValid || !Object.keys(formState.touched).length) &&
      !Object.keys(formState.errors).length;

    if (newButtonValue !== isSubmitButtonActive) {
      setSubmitButtonStatus(newButtonValue);
    }

    const newInputClasses = {
      name: getInputClass(formState.dirtyFields.name),
      email: getInputClass(formState.dirtyFields.email),
      phone: getInputClass(formState.dirtyFields.phone),
      comments: getInputClass(formState.dirtyFields.comments),
    };

    if (isDataChanged(inputClasses, newInputClasses)) {
      setInputClasses(newInputClasses);
    }
  }, [
    formState,
    setSubmitButtonStatus,
    setInputClasses,
    inputClasses,
    isSubmitButtonActive,
  ]);

  return (
    <form
      noValidate
      name="modalForm"
      onSubmit={handleSubmit(submitData)}
      data-netlify="true"
    >
      <div className="form-group">
        <input
          type="text"
          className={inputClasses.name}
          id="name"
          name="name"
          ref={register({
            required: 'formErrors.firstNameRequired',
            maxLength: {
              value: 20,
              message: 'formErrors.firstNameTooBig',
            },
          })}
        />
        <label className="label-control" htmlFor="name">
          {t('help-form.your-name')}
        </label>
        {errors?.name && (
          <div className="with-errors">{t(errors.name.message)}</div>
        )}
      </div>
      <div className="form-group">
        <input
          type="email"
          className={inputClasses.email}
          id="email"
          name="email"
          ref={register({
            required: 'formErrors.emailRequired',
          })}
        />
        <label className="label-control" htmlFor="email">
          {t('help-form.your-email')}
        </label>
        {errors?.email && (
          <div className="with-errors">{t(errors.email.message)}</div>
        )}
      </div>
      <div className="form-group">
        <input
          type="tel"
          className={inputClasses.phone}
          id="phone"
          name="phone"
          ref={register({
            required: 'formErrors.phoneRequired',
          })}
        />
        <label className="label-control" htmlFor="phone">
          {t('help-form.your-phone')}
        </label>
        {errors?.phone && (
          <div className="with-errors">{t(errors.phone.message)}</div>
        )}
      </div>
      {formData.priceTablePlan && (
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="servicePlan"
              id="annualService"
              value="annual"
              ref={register()}
            />
            <label className="form-check-label" htmlFor="annualService">
              {t('help-form.annualService')}
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="servicePlan"
              id="disposableService"
              value="disposable"
              ref={register()}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="disposableService">
              {t('help-form.disposableService')}
            </label>
          </div>
        </div>
      )}
      <div
        className="add-comment-wrapper"
        onClick={() => setCommentOpen((value) => !value)}
      >
        <span className="add-comment">
          <i className={`fas ${isCommentOpen ? 'fa-minus' : 'fa-plus'}`} />
        </span>
        {t('help-form.add-comment')}
      </div>
      {isCommentOpen && (
        <div className="form-group">
          <textarea
            className={inputClasses.comments}
            id="comments"
            name="comments"
            ref={register({ maxLength: 300 })}
          />
        </div>
      )}
      <div className="form-group">
        <button
          type="submit"
          className={`form-control-submit-button ${
            !isSubmitButtonActive ? 'disabled' : ''
          } btn`}
        >
          {t('help-form.submit')}
        </button>
      </div>
    </form>
  );
};
