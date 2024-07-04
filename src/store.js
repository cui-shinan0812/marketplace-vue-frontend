import { createStore } from 'vuex';
import { axiosBase } from './api/axios-base';

const store = createStore({
  state() {
    return {
      accessToken: localStorage.getItem('access_token') || null,
      refreshToken: localStorage.getItem('refresh_token') || null,
      APIData: '', // data received from the backend API
    };
  },
  getters: {
    loggedIn(state) {
      return state.accessToken != null;
    }
  },
  mutations: {
    updateLocalStorage(state, { access, refresh }) {
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      state.accessToken = access;
      state.refreshToken = refresh;
    },
    updateAccess(state, access) {
      state.accessToken = access;
    },
    destroyToken(state) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      state.accessToken = null;
      state.refreshToken = null;
    }
  },
  actions: {
    refreshToken({ commit, state }) {
      return new Promise((resolve, reject) => {
        axiosBase.post('/api/token/refresh/', {
          refresh: state.refreshToken
        })
        .then(response => {
          console.log('New access successfully generated');
          commit('updateAccess', response.data.access);
          resolve(response.data.access);
        })
        .catch(err => {
          console.log('error in refreshToken Task');
          reject(err);
        });
      });
    },
    registerUser({ commit }, data) {
      return new Promise((resolve, reject) => {
        axiosBase.post('/register/', data)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
      });
    },
    logoutUser({ getters, commit }) {
      if (getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axiosBase.post('/logout/')
          .then(() => {
            commit('destroyToken');
            resolve();
          })
          .catch(err => {
            commit('destroyToken');
            reject(err);
          });
        });
      }
      else {
        console.log('not login')
      }
    },
    loginUser({ commit }, credentials) {
        console.log(credentials);
      return new Promise((resolve, reject) => {
        axiosBase.post('/api/token/', credentials)
        .then(response => {
          commit('updateLocalStorage', { access: response.data.access, refresh: response.data.refresh });
          resolve();
        })
        .catch(err => {
          reject(err);
        });
      });
    }
  }
});

export default store;
