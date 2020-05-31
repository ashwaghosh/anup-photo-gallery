

const initialState = {
  videos:[]
};

export default function (state = initialState, action) {
    switch (action.type) {

        case "HOME_VIDEOS":
            return {
                ...state,
                videos: action.payload
            };
        default:
            return state;
    }
}
