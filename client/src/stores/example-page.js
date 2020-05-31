import {observable, action, computed} from 'mobx';
import axios from 'axios';

import {SERVER_HOST} from 'Config';

class ExamplePage {
  @observable status;

  constructor() {
    this.status = 'Started';
  }

  @computed
  get isStartedStatus() {
    return this.status === 'Started';
  }

  @action
  setStatus = (value) => {
    this.status = value;
  }

  fetchStatus = async () => {
    try {
      const response = await axios.get(`${SERVER_HOST}/example/status`);
      this.setStatus(response.data.result);
    } catch (error) {
      console.error(error);
    }
  }
};

export default ExamplePage;
