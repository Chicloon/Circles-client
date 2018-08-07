import { observable, action } from 'mobx';
import axios from 'axios';

import { ROOT_URL } from '../constants';

class User {
  @observable userProfile = {};
  @observable companionProfile = {};
  @observable isLoading = false;
  @observable error = null;

  @action
  addUserFields(values) {
    this.userProfile = Object.assign(values);
    console.log(this.userProfile);
  }

  // метод регистрации пользователя
  @action
  async registerUser() {
    console.log('sending data to server....', this.userProfile);

    this.isLoading = true;
    let error;

    const request = await axios.post(`${ROOT_URL}/user/update`, this.user).then(res => res);
    // Обработка ошибки от сервера
    // .catch((err) => {
    // error = err.message === 'Network Error' ? 'Сервер не доступен' : err.message;
    // });

    if (request) {
      // обработка успешного ответа от сервера
      // const { data } = request;
      // if (data.status === 'err') {
      //   error = 'Имя пользователя или пароль введены не верно';
      // } else {
      //   this.id = data.data.id;
      // }
    }

    this.isLoading = false;
    return error;
  }

  // @action
  // logOut() {
  //   this.id = null;
  // }

  // Получение профиля пользоватя
  @action
  async fetchProfile(id) {
    if (id === this.id && this.profile) {
      return;
    }

    this.isLoading = true;

    let error = null;
    const request = await axios
      .get(`${ROOT_URL}/user/info/${id}`)
      .then(res => res)
      .catch((err) => {
        // Обработка ошибки
        error = err.message === 'Network Error' ? 'Сервер не доступен' : err.message;
      });

    if (request) {
      // Обработка успешного ответа от сервера
      // const { data } = request;
      // if (data.status === 'err') {
      //   error = 'Профиль не найден';
      // } else {
      //   const profile = data.data;
      //   const social = [profile.social.filter(el => el.label === 'web')[0]];
      //   // eslint-disable-next-line
      //   profile.social.map(el => {
      //     if (el.label !== 'web') {
      //       social.push(el);
      //     }
      //   });
      //   profile.social = social;
      //   this.profile = profile;
      // }
    }
    this.isLoading = false;
    this.error = error;
  }

  @action
  async fetchCompation() {
    this.isLoading = true;

    const request = await axios.get(`${ROOT_URL}/user`).then(res => res);

    if (request) {
      console.log(request);
      this.companionProfile = {
        name: 'Константин Константинопольский',
        age: '38',
        status: 'В поиске',
        aim: 'Брак',
        education: 'Высшее',
        about: 'Пишу, читаю',
      };
    }
    this.isLoading = false;
  }
}

export default new User();
