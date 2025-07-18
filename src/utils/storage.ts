export const getLocalStorage = (key: string): string => {
  return localStorage.getItem(key) ?? '';
};

export const setLocalStorage = (key: string, data: string) => {
  localStorage.setItem(key, data);
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
