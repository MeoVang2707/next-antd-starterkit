import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import intlEN from 'react-intl/locale-data/en';
import intlVI from 'react-intl/locale-data/vi';

addLocaleData([...intlEN, ...intlVI]);

const mapStateToProps = state => {
  const { lang, messages } = state.locales;
  return { locale: lang, key: lang, messages: messages[lang] };
};

export default connect(
  mapStateToProps,
  {},
)(IntlProvider);
