import axios from 'axios';

const url2 = 'https://localhost:5000/user/signin';
const url3 = 'https://localhost:5000/user/signup';

const API = axios.create({ baseUrl: 'https://localhost:5000' });

export const fetchPosts = () => API.get('/workouts');
// Auth
export const signIn = (formData) => axios.post(url2, formData);
export const signUp = (formData) => axios.post(url3, formData);
// Admin
export const adminSignIn = (formDatas) =>
  API.post('/admin/signinadmin', formDatas);
export const adminSignUp = (formDatas) =>
  API.post('/admin/signupadmin', formDatas);
