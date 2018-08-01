import { observable, action } from 'mobx';
// import Api from '../lib/helpers/api';
import axios from 'axios';

// import { ROOT_URL } from '../utils/constants';
const ROOT_URL = '/api';

class Store {
  @observable id = null;
  @observable profile = null;
  @observable isLoading = false;
  @observable error = null;
  @observable user = null;
  @observable isAuthorized = false;

  constructor() {
    this.authorize();
  }

  @action
  async getUser() {
    const user = await axios.get(`${ROOT_URL}/Users`);

    console.log('user is', user);
    this.user = user.data;
  }

  @action
  async login(params) {
    this.isLoading = true;
    let error;
    let userId;

    console.log('sending data', { ...params });
    const request = await axios
      .post(`${ROOT_URL}/People/login`, { ...params })
      .then(res => res)
      .catch((err) => {
        error = err.response ? err.response.data.error.code : 'Что-то пошло не так';
      });

    if (request) {
      // eslint-disable-next-line
      userId = request.data.userId;
    }

    this.isLoading = false;
    return { error, userId };
  }

  @action
  async signup(params) {
    this.isLoading = true;
    let error;
    let userId;

    console.log('sending data', { ...params });
    const request = await axios
      .post(`${ROOT_URL}/People`, { ...params })
      // .post(`${ROOT_URL}/People`, { user: 'user' })
      .then(res => res)
      .catch((err) => {
        console.dir(err);
        error = err.response ? err.response.data.error.details.messages : 'Что-то пошло не так';
      });

    console.log('got requets', request, error);
    if (request) {
      // eslint-disable-next-line
      userId = request.data.id;
    }

    this.isLoading = false;
    return { error, userId };
  }

  @action
  async authorize(userId) {
    console.log('authorizating with id.....', userId);
    let user = {};
    if (!userId) {
      user = await axios.get(`${ROOT_URL}/users/me`).catch((err) => {
        console.error('authorization failed', err);
      });
    } else user.id = userId;
    this.user = user ? user.data : null;
    this.isAuthorized = user;
    console.log('=============user', user);
  }

  @action
  logOut() {
    this.id = null;
  }

  @action
  async fetchProfile(id) {
    if (id === this.id && this.profile) {
      return;
    }

    this.isLoading = true;

    let error = null;
    const request = await axios
      .get(`${ROOT_URL}/user-info/${this.id}`)
      .then(res => res)
      .catch((err) => {
        error = err.message === 'Network Error' ? 'Сервер не доступен' : err.message;
      });

    if (request) {
      const { data } = request;
      if (data.status === 'err') {
        error = 'Профиль не найден';
      } else {
        const profile = data.data;
        const social = [profile.social.filter(el => el.label === 'web')[0]];
        // eslint-disable-next-line
        profile.social.map(el => {
          if (el.label !== 'web') {
            social.push(el);
          }
        });
        profile.social = social;
        this.profile = profile;
      }
    }
    this.isLoading = false;
    this.error = error;
  }
}

export default new Store();
