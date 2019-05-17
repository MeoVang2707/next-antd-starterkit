import React from 'react';

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null; // eslint-disable-line no-nested-ternary
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <Row>
        {statusCode
          ? `An error ${statusCode} occurred on server!`
          : 'An error occurred on client!'}
      </Row>
    );
  }
}
