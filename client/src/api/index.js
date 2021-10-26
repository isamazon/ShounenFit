import axios from 'axios';

const signin = 'http://localhost:5000/user/signin';
const signup = 'http://localhost:5000/user/signup';

export const signIn = (formData) => axios.post(signin, formData);
export const signUp = (formData) => axios.post(signup, formData);
// Admin
const signinadminurl = 'http://localhost:5000/admin/signinadmin';
const signupadminurl = 'http://localhost:5000/admin/signupadmin';

export const adminSignIn = (formDatas) => axios.post(signinadminurl, formDatas);
export const adminSignUp = (formDatas) => axios.post(signupadminurl, formDatas);
