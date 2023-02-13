import React, { useEffect } from 'react';

const ScrollToFieldError = (props: any) => {
  const { formik } = props;
  const { submitCount, isValid, errors, touched } = formik;

  const getFieldErrorNames = (formikErrors: any) => {
    const transformObjectToDotNotation = (obj: any, prefix: any = '', result: any = []) => {
      Object.keys(obj).forEach((key: any) => {
        const value = obj[key];
        if (!value) return;

        const nextKey = prefix ? `${prefix}.${key}` : key;
        if (typeof value === 'object') {
          transformObjectToDotNotation(value, nextKey, result);
        } else {
          result.push(nextKey);
        }
      });

      return result;
    };

    return transformObjectToDotNotation(formikErrors);
  };

  useEffect(() => {
    if (isValid) return;

    //created array of error keys
    const fieldErrorNames = getFieldErrorNames(errors);
    const fieldTouchedNames = getFieldErrorNames(touched);
    //fetch all DOM element nodes from current form, and created array of id's
    // @ts-ignore
    const domElements = [
      ...document.querySelectorAll(
        'form, input, radio, textarea, checkbox, .fileUploadBox, .documentUploader, .boards'
      )
    ].map((input: any) => input?.name || input?.id || input?.getAttribute('name'));
    // removed null values
    const filteredElement = domElements.filter((item) => item);
    // re-sequence the fieldErrorNames with the reference to filteredElement
    const errorList = fieldErrorNames.sort(
      (a: any, b: any) => filteredElement.indexOf(a) - filteredElement.indexOf(b)
    );

    if (errorList.length <= 0) return;

    const element = document.getElementById(errorList[0]);
    if (!element || !fieldTouchedNames?.includes(errorList[0])) return;

    // Scroll to first known error into view
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    //@ts-ignore
    element.focus();
  }, [submitCount, isValid]);

  return null;
};

export default ScrollToFieldError;
