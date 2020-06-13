

const initialState = {
  isMobileView: window.innerWidth <= 992
};

export default function (state = initialState, action) {
  switch (action.type) {

    case "APP_RESIZE":
      return {
        ...state,
        isMobileView: action.payload
      };
    default:
      return state;
  }
}
