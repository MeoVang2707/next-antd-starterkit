/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Row, Icon } from 'antd';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';

import ItemShop from 'src/component/item';
import 'app.less';

const Items = [
  {
    name: 'Item 1',
    price: 100,
  },
  {
    name: 'Item 2',
    price: 200,
  },
  {
    name: 'Item 3',
    price: 300,
  },
  {
    name: 'Item 4',
    price: 400,
  },
];

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { router = {}, username, listBooking } = this.props;
    const { query = {} } = router;
    let totalPrice = 0;
    let listBookingShopId = [];
    if (listBooking[query.shopId]) {
      listBooking[query.shopId].forEach(element => {
        totalPrice += element.numberItem * element.price;
      });
      listBookingShopId = listBooking[query.shopId];
    }
    // console.log('listBooking', listBooking);
    return (
      <div>
        <p>
          Shop {query.shopId} of {username}
        </p>

        {Items.map(item => (
          <ItemShop
            key={item.name}
            item={item}
            listBookingShopId={listBookingShopId}
          />
        ))}

        <Row>Tổng: {totalPrice} </Row>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { username } = state.user;
  const { listBooking } = state.booking;
  return {
    username,
    listBooking,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(About));

// export default withRouter(About);
