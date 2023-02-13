import Moment from 'moment';

export const formatNumberWithComma = (number: string | number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const dateFormat = (date: string | Date | null, formatter = 'DD-MM-YYYY') => {
  return Moment(date).format(formatter);
};

export const formatSINNumber = (number: string) => {
  return number ? number.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : '';
};

export const formatHSTNumber = (number: string) => {
  return number && number.length === 15
    ? number.substr(0, 9) + ' ' + number.substr(9, 2) + ' ' + number.substr(11, 4)
    : number;
};

export const formatPhoneNumber = (number: string | number) => {
  var cleaned = ('' + number).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return match[1] + '-' + match[2] + '-' + match[3];
  }
  return null;

  // return number.toString().replace(/\F(?=(\d{3})+(?!\d))/g, '-');
};
