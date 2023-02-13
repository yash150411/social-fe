import * as Yup from 'yup';
import services from '@services/index';



export const getInitValues = (values?: any, isQuote?: boolean) => {
  let initialData: any = {
    caption: values?.caption || undefined,
    images: values?.images || []
  };
  return initialData;
};

export const getPost = async (id: any) => {
  try {
    const res = (await services.get(`/product/edit-detail/${id}`)) as {
      data: any;
    };
    return res.data;
  } catch (err: any) {
    return { error: err && err?.error ? err?.error?.error : 'Something went wrong!' };
  }
};

interface ResponseType {
  data: any;
  error: string | null;
  message?: string;
}

export const uploadFileHandler = async (file: File, type: number): Promise<ResponseType> => {
  console.log('File', file)
  try {
    const formData = new FormData();
    formData.append('file', file);
    const res = (await services.post(`/post/upload`, formData, undefined, null, {
      'Content-Type': 'multipart/form-data'
    })) as any;
    return { data: res, error: null };
  } catch (error: any) {
    return {
      data: null,
      error: error?.error?.message || error?.message || 'Something went wrong!'
    };
  }
};

export enum POST_FORM_STATUS {
  UNCHANGED = 0,
  MODIFIED = 1,
  SAVING = 2,
  SAVED = 3
}

export const addEditPostValidationSchema = Yup.object({
  post: Yup.object({
    description: Yup.string()
      .max(128, 'Description cannot be more than 128 characters.')
      .nullable(),
    image: Yup.string().nullable(),
  })
});