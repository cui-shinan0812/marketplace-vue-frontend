import { createStore } from 'vuex';
import { axiosBase } from './api/axios-base';

const store = createStore({
  state() {
    return {
      accessToken: localStorage.getItem('access_token') || null,
      refreshToken: localStorage.getItem('refresh_token') || null,
      userId: localStorage.getItem('user_id') || null,
      userEmail: localStorage.getItem('user_email') || null,
      userName: localStorage.getItem('user_name') || null,
      companyId: localStorage.getItem('company_id') || null,
      APIData: '', // data received from the backend API
    };
  },
  getters: {
    loggedIn(state) {
      return state.accessToken != null;
    }
  },
  mutations: {
    updateLocalStorage(state, { access, refresh, userEmail, userName, userId}) {
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      localStorage.setItem('user_email', userEmail);
      localStorage.setItem('user_name', userName);
      localStorage.setItem('user_id', userId);
      state.accessToken = access;
      state.refreshToken = refresh;
      state.userEmail = userEmail;
      state.userName = userName;
      state.userId = userId;
    },
    updateLocalStorageWithCompanyInfo(state, { companyId }) {
      localStorage.setItem('company_id', companyId);
      console.log('company id is ' + state.companyId)
    },
    updateAccess(state, access) {
      state.accessToken = access;
    },
    destroyToken(state) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user_email');
      localStorage.removeItem('user_name');
      localStorage.removeItem('user_id');
      localStorage.removeItem('company_id');
      state.accessToken = null;
      state.refreshToken = null;
    }
  },
  actions: {
    getCompanyMember({ commit, state }) {
      return new Promise((resolve, reject) => {
        axiosBase.get(`/api/CompanyMembers/${state.userId}/`)
        .then(response => {
          state.companyId = response.data.company;
          commit('updateLocalStorageWithCompanyInfo', response.data.company);
          resolve(response);
        })
        .catch(err => {
          console.log('error in get company member');
          reject(err);
        });
      });
    },
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
          commit('updateLocalStorage', { access: response.data.access, refresh: response.data.refresh, userEmail: response.data.email, userName: response.data.username, userId: response.data.user_id});
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
            //reject(err);
          });
        });
      }
      else {
        console.log('not login')
      }
    },

    loginUser({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axiosBase.post('/api/token/', credentials)
        .then(response => {
          console.log(response.data)
          commit('updateLocalStorage', { access: response.data.access, refresh: response.data.refresh, userEmail: response.data.email, userName: response.data.username, userId: response.data.user_id});
          resolve();
        })
        .catch(err => {
          reject(err);
        });
      });
    },
    
    getCompanyBasicInfo({ commit }, credentials) {
      console.log(credentials);
      return new Promise((resolve, reject) => {
        axiosBase.get('/api/CompanyBasicInfo/', credentials)
        .then(response => {
          console.log(response.data);
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
