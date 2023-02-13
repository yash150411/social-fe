import services from '@services/index';
import { showErrorToast } from '@utils/index';

export const GetAccountManagers = async (name?: string) => {
  try {
    const res: any = await services.get(`/employees/get-account-manager${name ? '/' + name : ''}`);
    if (res?.data?.success) return { data: res?.data?.data, success: true };
  } catch (err: any) {
    return {
      error: err && err?.error ? err?.error?.error : 'Something went wrong!',
      success: false
    };
  }
};

export const GetCustomersList = async (name?: string) => {
  try {
    const res: any = await services.get(`/quotes/customer-list${name ? '/' + name : ''}`);
    if (res?.data?.success) return { data: res?.data?.data, success: true };
  } catch (err: any) {
    return {
      error: err && err?.error ? err?.error?.error : 'Something went wrong!',
      success: false
    };
  }
};

export const GetVenuesList = async (name?: string) => {
  try {
    const res: any = await services.get(`/quotes/venue-list${name ? '/' + name : ''}`);
    if (res?.data?.success) return { data: res?.data?.data, success: true };
  } catch (err: any) {
    return {
      error: err && err?.error ? err?.error?.error : 'Something went wrong!',
      success: false
    };
  }
};

export const GetVenueContactList = async (id: string | number) => {
  try {
    const res: any = await services.get(`/quotes/venue-contact/${id}`);
    if (res?.data?.success) return { data: res?.data?.data, success: true };
  } catch (err: any) {
    return {
      error: err && err?.error ? err?.error?.error : 'Something went wrong!',
      success: false
    };
  }
};

export const GetTabData = async (tab: string, id: string | number, isEvent?: boolean) => {
  const url = isEvent ? `/events/${tab}/${id}` : `/quotes/${id}/${tab}`;
  try {
    const res: any = await services.get(url);
    if (res?.data?.success) return { data: res?.data.data, success: true };
  } catch (err: any) {
    return {
      error: err?.error?.error ? err?.error?.error : 'Something went wrong!',
      success: false
    };
  }
};

export const getTabData = async (
  tab: string,
  id: string | number,
  isEvent?: boolean,
  eventParam?: string
) => {
  const url = isEvent ? `/events/${tab}?${eventParam}` : `/quotes/${id}/${tab}`;
  try {
    const res: any = await services.get(url);
    if (res?.data?.success) return { data: res?.data.data, success: true };
  } catch (err: any) {
    return {
      error: err?.error?.error ? err?.error?.error : 'Something went wrong!',
      success: false
    };
  }
};

export const PutTabData = async (tab: string, data: any) => {
  try {
    const res: any = await services?.put(`/quotes/${tab}`, data);
    if (res?.data?.success) return { data: res?.data?.data, success: true };
  } catch (err: any) {
    return {
      error: err?.error?.error ? err?.error?.error : 'Something went wrong!',
      success: false
    };
  }
};

export const GetBundlesList = async () => {
  try {
    const res: any = await services.get('/quotes/bundles-list');
    if (res?.data?.success) return { data: res?.data?.data, success: true };
  } catch (err: any) {
    return {
      error: err?.error?.error ? err?.error?.error : 'Something went wrong!',
      success: false
    };
  }
};

export const GetProductTypesList = async () => {
  try {
    const res: any = await services.get('/settings/product-types');
    if (res?.data?.success) return { data: res?.data?.data, success: true };
  } catch (err: any) {
    return {
      error: err?.error?.error ? err?.error?.error : 'Something went wrong!',
      success: false
    };
  }
};

export const GetProductsList = async (productType?: string | number, quoteId?: string | number) => {
  try {
    const res: any = await services.get(
      `/quotes/products-list${productType ? '/' + productType : ''}${
        quoteId ? '?quote_id=' + quoteId : ''
      }`
    );
    if (res?.data?.success) return { data: res?.data?.data, success: true };
  } catch (err: any) {
    showErrorToast({
      message: 'Something went wrong',
      description: 'Failed to fetch Products List.'
    });
    return {
      error: err?.error?.error ? err?.error?.error : 'Something went wrong!',
      success: false
    };
  }
};

export const GetBundleProductsList = async (bundleId?: string | number) => {
  try {
    const res: any = await services.get(`/quotes/bundle-products-list/${bundleId}`);
    if (res?.data?.success) return { data: res?.data?.data, success: true };
  } catch (err: any) {
    return {
      error: err?.error?.error ? err?.error?.error : 'Something went wrong!',
      success: false
    };
  }
};

export const GetPositionsListForDropdown = async () => {
  try {
    const res: any = await services.get('/settings/departments/positions/drop-down');
    if (res?.data?.success) return { data: res?.data?.data, success: true };
  } catch (err: any) {
    return {
      error: err?.error?.error ? err?.error?.error : 'Something went wrong!',
      success: false
    };
  }
};
