import axios from 'axios';
import store from '../store'; // Ensure correct path
const APIUrl = 'http://127.0.0.1:8000';

const axiosBase = axios.create({
  baseURL: APIUrl,
  headers: { 'Content-Type': 'application/json' } // Correct header key
});

const getAPI = axios.create({
  baseURL: APIUrl
});

getAPI.interceptors.response.use(undefined, function (err) {
  if (err.config && err.response && err.response.status === 401) {
    // Retry the request after refreshing the token
    return store.dispatch('refreshToken').then(access => {
      // Clone the original request
      const config = {
        ...err.config,
        headers: {
          ...err.config.headers,
          Authorization: `Bearer ${access}` // Add the new access token
        }
        
      };
     
      return axios.request(config); // Reattempt the request with the new token
    }).catch(err => {
      // Handle failure in token refresh or subsequent request retries
      console.error('Refresh token failed or retry failed', err);
      return Promise.reject(err);
    });
  }
  return Promise.reject(err);
});

export { axiosBase, getAPI };
