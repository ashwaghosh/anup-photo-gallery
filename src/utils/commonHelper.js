import store from "../store";

export const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    let context = this, args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


export const isEmpty = (value) => {
  return value === undefined ||
      value === null ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0);
};

window.addEventListener("resize", ()=>{
  setMobileView();
});

const setMobileView = debounce( ()=>{
 store.dispatch({
   type : 'APP_RESIZE',
   payload: window.innerWidth <= 992
 });
} ,500);


export const isValidEmail = (email) => {
  return !(/(.+)@(.+){2,}\.(.+){2,}/.test(email));
};
export const isValidPassword = (password) => {
  let flag = true;
  if (/^([^0-9]*)$/.test(password)) {
    flag = false;
  }
  if (!(/[^a-zA-Z\d]/.test(password))) {
    flag = false;
  }
  return flag;
};

