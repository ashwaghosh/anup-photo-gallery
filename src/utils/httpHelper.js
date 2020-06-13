import * as axios from "axios";

export function getAuthorizationToken() {
  if (localStorage.hasOwnProperty('jwtToken')) {
    return localStorage.getItem('jwtToken');
  }
  if (sessionStorage.hasOwnProperty('jwtSessionToken')) {
    return sessionStorage.getItem('jwtSessionToken');
  }
  return null;
}

export function setAuthorizationToken(token, toRemember) {
  if (toRemember) {
    localStorage.setItem('jwtToken', token);

    // if there is any session stored by mistake remove it
    if (sessionStorage.hasOwnProperty('jwtSessionToken')) {
      sessionStorage.removeItem('jwtSessionToken');
    }

  } else {
    sessionStorage.setItem('jwtSessionToken', token);
// if there is any local key stored by mistake remove it
    if (localStorage.hasOwnProperty('jwtToken')) {
      localStorage.removeItem('jwtToken');
    }
  }
}



export function removeAutorizationToken() {
  if (localStorage.hasOwnProperty('jwtToken')) {
    localStorage.removeItem('jwtToken');
  }
  if (sessionStorage.hasOwnProperty('jwtSessionToken')) {
    sessionStorage.removeItem('jwtSessionToken');
  }

}

const instance = axios.create({
  baseURL: 'http://localhost:8081/',
  timeout: 10000,
});
instance.defaults.headers.common['Authorization'] = 'Bearer ' + getAuthorizationToken();
export const httpPost = (url, data) => {

  return instance({
    method: 'post',
    url: url,
    data: data
  });

  return fetch('http://localhost:8081' + url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + getAuthorizationToken()
        },
        body: JSON.stringify(data)
      })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
          console.log('error occured during post api ', url , err);
      })

};

export const httpGet = (url) => {

  return instance({
    method: 'get',
    url: url,
  });

  return fetch('http://localhost:8081' + url,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + getAuthorizationToken()
        }
      })
      .then(response => {
        return response.json();
      });
};

