export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return {
        uid: action.uid
      };
    // return state.concat(action.expense);
    case 'AUTH_LOGOUT':
      return {};
    default:
      return state;
  }
};
