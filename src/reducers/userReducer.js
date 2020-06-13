

const initialState = {
  userToken: null,
  profile: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "USER_REGISTERED":
    case "GOT_USER_PROFILE":
      return {
        ...state,
        userToken: action.payload.token,
        profile: action.payload.user
      };
    case 'LOGOUT_USER':
      return {
        userToken: null,
        profile: null
      };
    default:
      return state;
  }
}
