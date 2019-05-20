/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'next/router';
import 'app.less';

class About extends React.Component {
  // console.log('this.props.router')
  render() {
    console.log('this.props', this.props.router);
    const { router = {} } = this.props;
    const { query = {} } = router;
    return (
      <div>
        <p>This is the shop {query.shopId}</p>
      </div>
    );
  }
}

export default withRouter(About);
