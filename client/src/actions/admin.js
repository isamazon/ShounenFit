import * as api from '../api';

export const adminsignin = (formDatas, history) => async (dispatch) => {
  try {
    //   sign in user
    const { data } = await api.adminSignIn(formDatas);

    dispatch({ type: 'AUTH_ADMIN', data });

    history.push('/');
    window.location.reload(false);
  } catch (error) {
    console.log(error);
  }
};

export const adminsignup = (formDatas, history) => async (dispatch) => {
  try {
    // Sign up the user
    const { data } = await api.adminSignUp(formDatas);

    dispatch({ type: 'AUTH_ADMIN', data });

    history.push('/');
    window.location.reload(false);
  } catch (error) {
    console.log(error);
  }
};
