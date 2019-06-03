import React from 'react';
import { Row, Affix, Icon } from 'antd';
import './style.less';

class Header extends React.Component {
  render() {
    return (
      <Affix offsetTop={0}>
        <Row
          className="header-main"
          type="flex"
          justify="space-between"
          align="middle"
        >
          <Row className="td fs32">Thanh niên ID</Row>
          <Row justify="center" type="flex">
            <Icon className="td fs32" type="user" />
            <Row
              className="td fs14"
              style={{ width: '100%', textAlign: 'center' }}
            >
              Login
            </Row>
          </Row>
        </Row>
      </Affix>
    );
  }
}

export default Header;
