export const localStorageUtil = {
  setValue: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getValue: (key: string) => {
    const value = localStorage.getItem(key);
    return value && JSON.parse(value);
  }
};
