import {httpGet, httpPost, removeAutorizationToken, setAuthorizationToken} from "../utils/httpHelper";

export const registerUser =(userData) => (dispatch) => {

httpPost('/api/user/register',userData)
    .then((res)=>{

      if(res.status === 200 ) {

        let responseData = res.data;
        if(responseData.success){
          dispatch({
            type:'USER_REGISTERED',
            payload: responseData
          });
          if(responseData.token) {
            setAuthorizationToken(responseData.token, true);
          }
        }
      }


    });
};


export const loginUser =(userData) => (dispatch) => {
  httpPost('/api/user/login',userData)
      .then((res)=>{

        console.log('res is', res);
        if(res.status === 200 ) {
          let responseData = res.data;
          if(responseData.success){
            dispatch({
              type:'USER_REGISTERED',
              payload: responseData
            });
            setAuthorizationToken(responseData.token, true);
          }
        }


      });
};

export const getMyProfile =() => (dispatch) => {
  httpGet('/api/user/profile')
      .then((res)=>{

        if(res.status === 200 ) {
          let responseData = res.data;
          if(responseData.success){
            dispatch({
              type:'GOT_USER_PROFILE',
              payload: responseData
            });
          }
        }



      });
};
export const logoutUser =() => (dispatch) => {
  removeAutorizationToken();
  dispatch({
    type:'LOGOUT_USER'
  });

};
