import { API, STORAGE_KEY } from '@/constants';
import { RESPONSE_TYPE } from '@/models/global';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '@/utils';
import axios, { AxiosResponse } from 'axios';

const VITE_API_URL = import.meta.env.VITE_APP_VINOVA_API;

export const getNewToken = async (): Promise<string | null> => {
  const refreshToken = getLocalStorage(STORAGE_KEY.REFRESH_TOKEN);
  if (!refreshToken) {
    return Promise.reject({ error: 'RefreshToken Invalid' });
  }
  try {
    const response: AxiosResponse<RESPONSE_TYPE<{ access_token: string }>> = await axios.post(
      `${VITE_API_URL}/${API.AUTH.REFRESH_TOKEN}`,
      {
        refresh_token: refreshToken
      }
    );
    const { access_token } = response.data.data;
    setLocalStorage(STORAGE_KEY.ACCESS_TOKEN, access_token);

    return access_token;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to refresh access token');
  }
};

const token = getLocalStorage(STORAGE_KEY.ACCESS_TOKEN);
const _APIInstance = axios.create({
  baseURL: `${VITE_API_URL}`
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

export default _APIInstance;

export const APIInstance = _APIInstance;

_APIInstance.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
// _APIInstance.defaults.headers.common['Time-Zone'] =
//   Intl.DateTimeFormat().resolvedOptions().timeZone

export const setToken = (token: string) => {
  APIInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

if (token) setToken(token);

export const getToken = () => {
  return APIInstance.defaults.headers.common['Authorization'];
};

_APIInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const accessToken = await getNewToken();
        if (accessToken) {
          setToken(accessToken);
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          processQueue(null, accessToken);
          return axios(originalRequest);
        } else {
          clearLocalStorage();
          processQueue(new Error('Failed to refresh access token'));
          // Redirect to login page or show authentication error
        }
      } catch (refreshError) {
        clearLocalStorage();
        processQueue(refreshError);
        // Redirect to login page or show authentication error
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);
