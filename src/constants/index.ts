import Facebook from '@assets/social-media/facebook.svg';
import Instagram from '@assets/social-media/instagram.svg';
import LinkIdn from '@assets/social-media/linkIdn.svg';
import Twitter from '@assets/social-media/twitter.svg';

export const BASE_URL = process.env.REACT_APP_BASE_URL_original;
export const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
export const urlRegExp =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
export const digitsRegExp = /^[0-9]+$/;
export const floatingPointRegExp = /^([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

export const hstRegExp = /\d{9}(R|r)[CMTP|cmtp]\d{4}/;

export const getBaseURL = () => {
  const pathName = window.location.pathname.split('/')[1];
  //@ts-ignore
  return BASE_URL_MAP[pathName] || process.env.REACT_APP_BASE_URL_original;
};

export const googleMapCenterLocation = {
  lat: 43.5931073,
  lng: -79.6422539
};

export const SOCIAL_MEDIA_OPTIONS = {
  facebook: { img: Facebook, id: 1, url: 'https://www.facebook.com/RightatHomeCAN/' },
  linkedIn: { img: LinkIdn, id: 2, url: 'https://www.linkedin.com/company/right-at-home-canada/' },
  twitter: { img: Twitter, id: 3, url: 'https://twitter.com/RightatHome_CAN' },
  instagram: { img: Instagram, id: 4, url: 'https://www.instagram.com/rightathomewinnipeg/?hl=en' }
};

export const QUOTE_PROPOSAL_IMAGES = {
  coverImage:
    'https://foodude.s3.us-east-2.amazonaws.com/products/RD1xBYKwnyWKPWMzkJzn4IXcGamuzdKXDbHH9Gaa.jpg',
  endPage:
    'https://foodude.s3.us-east-2.amazonaws.com/products/ydJfrz5PUM6JdzThqwgedIjzwAsMyEVtSAQ7rlj5.png',
  logo: 'https://foodude.s3.us-east-2.amazonaws.com/image-gallery/AozVSoAZc8rZRHpYZMeyHPo6H6DBndoHzcAZGwo9.png'
};

export const DATE_FORMAT = 'MMMM  Do, YYYY';

export const DEVICE = {
  MOBILE: 'mobile',
  TAB: 'tab',
  DESKTOP: 'desktop'
};
export const ordinals = [
  'Zeroth',
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
  'Sixth',
  'Seventh',
  'Eighth',
  'Ninth',
  'Tenth',
  'Eleventh',
  'Twelfth',
  'Thirteenth',
  'Fourteenth',
  'Fifteenth',
  'Sixteenth',
  'Seventeenth',
  'Eighteenth',
  'Nineteenth'
];

export const CURRENCY = '$';
