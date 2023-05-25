import axios from 'axios';

const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_URL_API,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const setToken = (token: string) => {
	axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
export const removeToken = () => {
	delete axiosClient.defaults.headers.common['Authorization'];
};

axiosClient.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

axiosClient.interceptors.response.use(
	function (response) {
		// Do something before request is sent
		return response.data;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);
