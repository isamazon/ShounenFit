import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
  try {
    //   sign in user
    const { data } = await api.signIn(formData);

    dispatch({ type: 'AUTH', data });

    history.push('/');
    window.location.reload(false);
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // Sign up the user
    const { data } = await api.signUp(formData);

    dispatch({ type: 'AUTH', data });

    history.push('/');
    window.location.reload(false);
  } catch (error) {
    console.log(error);
  }
};
