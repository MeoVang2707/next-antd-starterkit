/* eslint-disable react/react-in-jsx-scope */
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <title>NextJs Template</title>
        <link
          rel="shortcut icon"
          href="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/60582607_2504554862940242_1523837732147691520_n.jpg?_nc_cat=104&_nc_oc=AQmGI2HbpbEqDF_Po2oirDiFBoX90QFD7Sm3SQvzEvuLNRyKzY1qY4irT2Q3W4f7ouM&_nc_ht=scontent.fhan4-1.fna&oh=d87919d566d1d81c29d76dd8d396e288&oe=5D567F00"
        />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Đây là trang web hay vcl" />

          <meta name="robots" content="follow, index" />
          <meta property="og:title" content="NextJs Template" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.facebook.com/images/fb_icon_325x325.png"
          />
          <meta property="og:description" content="Test share fb" />
          <meta
            property="og:url"
            content="https://test-nextjs.herokuapp.com/test/4"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:url"
            content="https://test-nextjs.herokuapp.com/test/4"
          />
          <meta name="twitter:title" content="Title twitter" />
          <meta name="twitter:description" content="twitter description" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
