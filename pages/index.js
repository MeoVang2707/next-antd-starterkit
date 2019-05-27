import React, { Component } from 'react';
import Link from 'next/link';
import { Button, Row } from 'antd';
import { connect } from 'react-redux';
import { getUserInfor } from 'store/actions/user';
import { changeLanguage } from 'store/actions/locales';
import { injectIntl, FormattedMessage, defineMessages } from 'react-intl';
import { apiBase } from 'api/config';
import socketIOClient from 'socket.io-client';

import 'app.less';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temprature: null,
    };
  }

  componentDidMount() {
    const socket = socketIOClient(apiBase);
    socket.on('templature', data =>
      this.setState({ temprature: data.username }),
    );
  }

  getUserInfor = () => {
    const { getUserInfor } = this.props;
    getUserInfor();
  };

  render() {
    const { username, changeLanguage } = this.props;
    const { temprature } = this.state;
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
        <p>Nhiệt độ: {temprature}</p>
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
    changeLanguage: data => dispatch(changeLanguage(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
