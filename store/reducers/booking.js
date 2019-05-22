/* eslint-disable no-console */
import { UPDATE_BOOKING } from '../actions/booking';

const initialState = {
  listBooking: {},
};

export default function booking(oldState = initialState, action) {
  switch (action.type) {
    case UPDATE_BOOKING: {
      // console.log('action', action.data);
      const { listBooking = {} } = oldState;
      const { data = {} } = action;
      const { name, price, numberItem, shopId } = data;
      const bookingShopId = listBooking[shopId] ? listBooking[shopId] : [];
      const newBookingShopId = bookingShopId.filter(item => item.name !== name);
      return {
        ...oldState,
        listBooking: {
          ...listBooking,
          [shopId]: [
            ...newBookingShopId,
            {
              name,
              price,
              numberItem,
            },
          ],
        },
      };
    }
    default:
      return oldState;
  }
}
