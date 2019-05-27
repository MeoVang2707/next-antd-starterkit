/* eslint-disable no-console */
import { CHANGE_LANGUAGE } from '../../actions/locales';
import messagesVn from './vn.json';
import messagesEn from './en.json';

const messages = {
  vi: messagesVn,
  en: messagesEn,
};

const initialState = {
  messages,
  lang: 'vi',
};

export default function locales(oldState = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        ...oldState,
        lang: action.data.lang,
      };
    }
    default:
      return oldState;
  }
}
