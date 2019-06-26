import React from 'react';
import superagent from 'superagent';

export default class RestRequest extends React.Component {

  doRequest = event => {
    event.preventDefault();

    let url = event.target.url.value;
    let method = event.target.method.value;
    superagent(method, url)
      .then(response => {
        let header = response.header;
        let body = response.body;
        console.log({ header, body });
      });
  }

  render() {
    return (
      <section className="request">
        <form onSubmit={this.doRequest}>
          <section className="url">
            <input type="text" name="url" placeholder="https://example.com/api" />
            <button type="submit">Go!</button>
          </section>
          <input type="hidden" name="method" value="get" />
        </form>
      </section>
    )
  }
}
