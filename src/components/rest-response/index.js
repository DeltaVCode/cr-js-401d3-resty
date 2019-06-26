import React from 'react';

export default props  => {
  if (!props.response) {
    return (<div>Enter URL and click Go!</div>)
  }

  return (
    <section className="response">
      <h3>Headers</h3>
      <pre>
        {JSON.stringify(props.response.header)}
      </pre>
      <h3>Body</h3>
      <pre>
        {JSON.stringify(props.response.body)}
      </pre>
    </section>
  );
};
