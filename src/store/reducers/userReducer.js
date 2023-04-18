
const initialState = {
    userName: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USER_NAME':
        return {
          ...state,
          userName: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;