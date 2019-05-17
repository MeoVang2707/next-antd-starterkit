import React, { Component } from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { connect } from 'react-redux';

import 'app.less';

class Index extends Component {
  render() {
    console.log('aaaaaa', this.props.userName);
    return (
      <div>
        <p>Hello Next.js</p>
        <Link href="/about">
          <Button>About</Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userName } = state.user;
  return {
    userName,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
