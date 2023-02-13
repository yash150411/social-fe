import services from '.';

export const uploadFileHandler = async (file: File, type: number): Promise<ResponseType> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const res = (await services.post(`/post/upload`, formData, undefined, null, {
      'Content-Type': 'multipart/form-data'
    })) as any;
    //@ts-ignore
    return { data: res?.data?.data, error: null };
  } catch (error: any) {
    //@ts-ignore
    return {
      data: null,
      error: error?.error?.message || error?.message || 'Something went wrong!'
    };
  }
};
