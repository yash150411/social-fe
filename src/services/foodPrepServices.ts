// import {
//   FoodPrepListFilterTypes,
//   FoodPrepTypes,
//   SelectedSubcategoryType
// } from '@pages/FoodPrepreationPage/FoodPreprationList/types';
import services from '@services/index';
import { showErrorToast, updateRawData } from '@utils/index';

export const getProductsList = async (props: any) => {
  try {
    const {
      start_date,
      end_date,
      event_id,
      head_chef_id,
      packed_sort,
      product_name,
      quantity_sort,
      subcategory_id
    } = props;

    const url =
      (event_id ? `&event_id=${event_id}` : '') +
      (head_chef_id ? `&head_chef_id=${head_chef_id}` : '') +
      (packed_sort ? `&packed_sort=${packed_sort}` : '') +
      (product_name ? `&product_name=${product_name}` : '') +
      (quantity_sort ? `&quantity_sort=${quantity_sort}` : '') +
      (subcategory_id ? `&subcategory_id=${subcategory_id}` : '');

    const res: any = await services.get(
      `/food-preparation?start_date=${start_date}&end_date=${end_date}${url}`
    );
    if (res?.data?.success) {
      return { data: res?.data?.data, success: true };
    }
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

export const getIngredientList = async () => {
  try {
    const res: any = await services.get(`/settings/menu-management/ingredients`);
    if (res?.data?.success) {
      return { data: res?.data?.data, success: true };
    }
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

export const getAssigneeList = async () => {
  try {
    const res: any = await services.get('/food-preparation/assignee-users');
    if (res?.data?.success) {
      return { data: res?.data?.data, success: true };
    }
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

export const updatePrepList = async (data: any) => {
  try {
    const res: any = await services.post(`/food-preparation/save-prep-list`, data);
    return res.data;
  } catch (err: any) {
    return { error: err && err?.error ? err?.error?.error : 'Something went wrong!' };
  }
};

export const getPrepListData = async (props: any) => {
  try {
    const {
      start_date,
      end_date,
      prep_list_id,
      event_id,
      sort_by_date,
      updated_by_name,
      assignee_name,
      ingredient_name,
      sort_by_amount,
      measurement_id
    } = props;

    const url =
      (event_id ? `&event_id=${event_id}` : '') +
      (sort_by_date ? `&sort_by_date=${sort_by_date}` : '') +
      (updated_by_name ? `&updated_by_name=${updated_by_name}` : '') +
      (assignee_name ? `&assignee_name=${assignee_name}` : '') +
      (ingredient_name ? `&ingredient_name=${ingredient_name}` : '') +
      (sort_by_amount ? `&sort_by_amount=${sort_by_amount}` : '') +
      (measurement_id ? `&measurement_id=${measurement_id}` : '');

    const res: any = await services.get(
      `/food-preparation/prep-list/${prep_list_id}?start_date=${start_date}&end_date=${end_date}${url}`
    );
    if (res?.data?.success) {
      return { data: res?.data?.data, success: true };
    }
  } catch (err: any) {
    showErrorToast({
      message: err?.error?.error ? err?.error?.error : 'Something went wrong!',
      description: 'Failed to fetch Products List.'
    });
    return {
      error: err?.error?.error ? err?.error?.error : 'Something went wrong!',
      success: false
    };
  }
};

export const getPrepMenu = async () => {
  try {
    const res: any = await services.get('/settings/menu-management/prep-menu');
    if (res?.data?.success) {
      return { data: res?.data?.data, success: true };
    }
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

export const getProductNamesData = async () => {
  try {
    const res: any = await services.get('/food-preparation/products');
    if (res?.data?.success) {
      return { data: res?.data?.data, success: true };
    }
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

export const getSubCategories = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = (await services.get('/settings/menu-management/categories/sub-categories')) as {
        data: any;
      };
      resolve(res.data);
    } catch (err: any) {
      reject({ error: err && err?.error ? err?.error?.error : 'Something went wrong!' });
    }
  });
};

export const getEventCodeList = async (filter: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { start_date, end_date } = filter;

      const res = (await services.get(
        `/food-preparation/events?start_date=${start_date}&end_date=${end_date}`
      )) as {
        data: any;
      };
      resolve(res.data);
    } catch (err: any) {
      reject({ error: err && err?.error ? err?.error?.error : 'Something went wrong!' });
    }
  });
};
export const getEventHeadChefsList = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = (await services.get('/food-preparation/head-chef')) as {
        data: any;
      };
      resolve(res.data);
    } catch (err: any) {
      reject({ error: err && err?.error ? err?.error?.error : 'Something went wrong!' });
    }
  });
};

export const getManageProductData = async (props: any) => {
  const { event_id, product_id, subcategory_id, ingredient_name, assignee, amount } = props;
  let data = '';
  if (ingredient_name) {
    data = data + `?ingredient_name=${ingredient_name}`;
  }
  if (amount) {
    data = data + `${ingredient_name ? '&' : '?'}sort_by_amount=${amount}`;
  }
  if (assignee) {
    data = data + `${ingredient_name || amount ? '&' : '?'}assignee_id=${assignee}`;
  }
  let api_url = `/food-preparation/manage/product-data/${event_id}/${product_id}/${subcategory_id}${data}`;
  try {
    const res: any = await services.get(api_url);
    if (res?.data?.success) {
      return { data: res?.data?.data, success: true };
    }
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

export const submitManageProductData = async (data: any) => {
  try {
    const res = (await services.post(`/food-preparation/manage/product-data`, {
      ...data
    })) as {
      data: any;
    };
    return res?.data;
  } catch (err: any) {
    return { error: err && err?.error ? err?.error?.error : 'Something went wrong!' };
  }
};

export const getManageAssigneeData = async () => {
  let api_url = `/food-preparation/assignee-users`;

  try {
    const res: any = await services.get(api_url);
    if (res?.data?.success) {
      return { data: res?.data?.data, success: true };
    }
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
