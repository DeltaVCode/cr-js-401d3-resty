import React from 'react';

import RestRequest from '../rest-request';
import RestResponse from '../rest-response';

class Resty extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      response: null,
    };
  }

  handleResponse = response => {
    this.setState({
      response
    });

    console.log('Resty got response!', response);
  }

  render() {
    return (
      <main>
        <RestRequest onResponse={this.handleResponse} />
        <RestResponse response={this.state.response} />
      </main>
    );
  }
}

export default Resty;
