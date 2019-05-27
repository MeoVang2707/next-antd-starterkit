import React, { Component } from 'react';
import Link from 'next/link';
import { Button, Row } from 'antd';
import { connect } from 'react-redux';
import { getUserInfor } from 'store/actions/user';
import { changeLanguage } from 'store/actions/locales';
import { injectIntl, FormattedMessage, defineMessages } from 'react-intl';

import 'app.less';

class Index extends Component {
  getUserInfor = () => {
    const { getUserInfor } = this.props;
    getUserInfor();
  };

  render() {
    const { username, changeLanguage } = this.props;
    // console.log('this.props', this.props);
    return (
      <div>
        <Row>
          <Button onClick={() => changeLanguage({ lang: 'vi' })}>
            Tiếng Việt
          </Button>
          <Button onClick={() => changeLanguage({ lang: 'en' })}>
            Tiếng Anh
          </Button>
        </Row>

        <p>
          <FormattedMessage id="hello" /> {username}
        </p>
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
  console.log('state.user', state);
  return {
    username,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserInfor: () => dispatch(getUserInfor()),
    changeLanguage: data => dispatch(changeLanguage(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
