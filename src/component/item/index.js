/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Row, Icon } from 'antd';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { updateBooking } from 'store/actions/booking';

class ItemShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberItem: 0,
    };
  }

  componentDidMount() {
    const { listBookingShopId, item } = this.props;
    if (this.props.listBookingShopId) {
      const itemInCard = listBookingShopId.filter(
        element => element.name === item.name,
      );
      if (itemInCard && itemInCard.length) {
        this.setState({
          numberItem: itemInCard[0].numberItem,
        });
      }
    }
  }

  reduce = () => {
    const { numberItem } = this.state;
    if (numberItem <= 0) {
      return;
    }
    this.setState(state => ({
      numberItem: state.numberItem - 1,
    }));
    this.updateBooking(-1);
  };

  increase = () => {
    this.setState(state => ({
      numberItem: state.numberItem + 1,
    }));
    this.updateBooking(1);
  };

  updateBooking = i => {
    const { item, router = {}, updateBooking } = this.props;
    const { numberItem } = this.state;
    const { query = {} } = router;
    updateBooking({
      ...item,
      numberItem: numberItem + i,
      shopId: query.shopId,
    });
  };

  render() {
    // console.log('this.props', this.props.router);
    const { item = {} } = this.props;
    return (
      <Row
        type="flex"
        justify="start"
        align="middle"
        style={{ padding: '5px 0' }}
      >
        <Row style={{ padding: '0 20px' }}>{`${item.name}: ${item.price}`}</Row>
        <Row type="flex" align="middle">
          <Icon
            type="minus-circle"
            style={{ fontSize: 20 }}
            onClick={this.reduce}
          />
          <span style={{ padding: '0 10px' }}>{this.state.numberItem}</span>
          <Icon
            type="plus-circle"
            style={{ fontSize: 20 }}
            onClick={this.increase}
          />
        </Row>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  const { username } = state.user;
  return {
    username,
  };
};

const mapDispatchToProps = dispatch => ({
  updateBooking: data => dispatch(updateBooking(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ItemShop));

// export default withRouter(About);
