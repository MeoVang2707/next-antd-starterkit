import React, { Component } from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { getUserInfor } from 'store/actions/user';

import 'app.less';

class Index extends Component {
  getUserInfor = () => {
    const { getUserInfor } = this.props;
    getUserInfor();
  };

  render() {
    const { username } = this.props;
    return (
      <div>
        <p>Hello {username}</p>
        <Link href="/test/3">
          <Button type="primary">About</Button>
        </Link>
        <Button
          type="primary"
          style={{ marginLeft: 10 }}
          onClick={this.getUserInfor}
        >
          Get User
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { username } = state.user;
  return {
    username,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserInfor: () => dispatch(getUserInfor()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
