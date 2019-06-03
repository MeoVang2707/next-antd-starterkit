import React from 'react';
import { Row } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import './style.less';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Row>
        <Header />
        <Row className="main-content">{children}</Row>
        <Footer />
      </Row>
    );
  }
}

export default Layout;
