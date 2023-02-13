import { USER_STATUS_ENUM } from '@constants/userConstants';
interface ObjectKey {
  [key: number]: any;
}
export const STATUS_COLOR_MAP: any = {
  SUCCESS: '#31AF91',
  ERROR: '#FB3307',
  DISABLED: '#AAAABC'
};

export const TextLableEnum: { [key: number]: string } = {
  1: 'New registrant',
  2: 'Transfer',
  3: 'Reinstated with RECO'
};

export const BrokerOrSalesRepresentative: { [key: number]: string } = {
  1: 'Broker',
  2: 'Sales representative'
};

export const AgentNotificationEnum: { [key: number]: string } = {
  1: 'Text',
  2: 'Email',
  3: 'Both'
};

export const AGENT_ONBOARDING_STEPS_ROUTE: { [key: number]: string } = {
  1: 'contact-details',
  2: 'profile-info',
  3: 'employment-info',
  4: 'prec-details',
  5: 'billing-commission',
  6: 'charity-enrollments',
  7: 'review-agreements'
};

export const AGENT_ONBOARDING_STEPS: ObjectKey = {
  1: {
    title: 'Contact Details',
    key: 'contact-details',
    status: 'finish',
    index: 1,
    storeKey: 'contactDetails',
    isGet: true,
    visible: USER_STATUS_ENUM.INVITE_SENT
  },
  2: {
    title: 'Profile Information',
    key: 'profile-info',
    status: 'finish',
    index: 2,
    storeKey: 'personalInfo',
    isGet: true,
    visible: USER_STATUS_ENUM.INVITE_SENT
  },
  3: {
    title: 'Employment Status',
    key: 'employment-info',
    status: 'finish',
    index: 3,
    storeKey: 'employmentInfo',
    isGet: true,
    visible: USER_STATUS_ENUM.INVITE_SENT,
    feedback_key: 'current_employment_status'
  },
  4: {
    title: 'PREC Details',
    key: 'prec-details',
    status: 'finish',
    index: 4,
    storeKey: 'precDetails',
    isGet: true,
    visible: USER_STATUS_ENUM.INVITE_SENT,
    feedback_key: 'prec_details'
  },
  5: {
    title: 'Billing & Commission',
    key: 'billing-commission',
    status: 'finish',
    index: 5,
    storeKey: 'BillingCommission',
    isGet: true,
    visible: USER_STATUS_ENUM.INVITE_SENT
  },
  6: {
    title: 'Charity Enrollment',
    key: 'charity-enrollments',
    status: 'finish',
    index: 6,
    storeKey: 'charityEnrollments',
    isGet: true,
    visible: USER_STATUS_ENUM.INVITE_SENT
  },
  7: {
    title: 'Review Agreements',
    key: 'review-agreements',
    status: 'finish',
    index: 7,
    storeKey: 'review-agreements',
    isGet: true,
    visible: USER_STATUS_ENUM.INVITE_SENT
  },
  8: {
    title: 'Confirmation',
    key: 'confirmation',
    status: 'finish',
    index: 8,
    storeKey: 'contactDetails',
    hide: true,
    visible: USER_STATUS_ENUM.INVITE_SENT
  },
  9: {
    title: 'Application is under review',
    key: 'review',
    status: 'finish',
    index: 9,
    storeKey: 'contactDetails',
    hide: true,
    visible: USER_STATUS_ENUM.PENDING_REVIEW
  }
};
