import axios from 'axios';

const url = 'https://localhost:5000/workouts';
const url2 = 'https://localhost:5000/user/signin';
const url3 = 'https://localhost:5000/user/signup';

export const signIn = (formData) => axios.post(url2, formData);
export const signUp = (formData) => axios.post(url3, formData);
