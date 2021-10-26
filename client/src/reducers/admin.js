const adminReducer = (state = { adminData: null }, action) => {
  switch (action.type) {
    case 'AUTH_ADMIN':
      localStorage.setItem(
        'profile_admin',
        JSON.stringify({ ...action?.data })
      );
      return { ...state, adminData: action?.data };
    case 'LOGOUT_ADMIN':
      localStorage.clear();
      return { ...state, adminData: null };
    default:
      return state;
  }
};

export default adminReducer;
