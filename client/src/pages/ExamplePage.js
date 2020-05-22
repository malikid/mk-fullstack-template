import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject('store')
@observer
class ExamplePage extends Component {
  constructor(props) {
    super(props);

    let store = props.store;
    console.log("store", store);
  }

  render() {
    return (
      <div>
        Example Page
      </div>
    );
  }
}

export default ExamplePage;
