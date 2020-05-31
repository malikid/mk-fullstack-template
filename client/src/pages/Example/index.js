import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {PageContainer, Status, Button} from './styles';

@inject('store')
@observer
class ExamplePage extends Component {
  render() {
    const {
      status,
      fetchStatus
    } = this.props.store.examplePage;

    return (
      <PageContainer>
        Example Page
        <Status>{status}</Status>
        <Button onClick={fetchStatus}>Update Status</Button>
      </PageContainer>
    );
  }
}

export default ExamplePage;
