import { observable, action } from 'mobx';
import moment from 'moment';

class UIstore {
  @observable duration = moment().add(5, 'm');

  @action
  addMoreTime(newDuration) {
    this.duration = newDuration;
  }
}

export default new UIstore();
