import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
    // baseURL: 'http://localhost:8080'
    baseURL: import.meta.env.VITE_BACKEND_URL
});

// Alter defaults after instance has been created
//   instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //đúng trả về đây.
    // trả về giá trị response.data để đẩy qua 
    if (response.data && response.data.data) return response.data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    //lỗi trả về hàm error mình dung debugger để dừng lại
    // debugger
    if (error.response && error.response.data) return error.response.data;
    return Promise.reject(error);
});

export default instance;