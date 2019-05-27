import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Avatar } from 'antd';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import 'app.less';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      username: null,
      email: null,
      avatar: null,
      type: null,
    };
  }

  responseFacebook = response => {
    console.log('response', response.userID);
    this.setState({
      userId: response.userID,
      username: response.name,
      email: response.email,
      type: 'fa',
    });

    //     accessToken: "EAAFQQd5e3IMBAD0TwOHATE2eeE1Bw8HDRAXqQfIS0ZCctHqZBSudM3yfe8qBYU0oKMUkZASi81sDbfzm0G4ZA77LCgdyJb73krD0rXn7F3zOtn0tHnZBCZCrvWiLaxpSLqcYIGa792QVmv17ZBPZCwZCxtXvT0hoqq0akiqcg29EZA3hZAg6GPmUyQVSyRY23XgQrWhrZBzN1ZAm7P71BVatZC2t9zZCOTOPxGmkoYZD"
    // data_access_expiration_time: 1566748455
    // email: "vuhuyhoang513@gmail.com"
    // expiresIn: 3945
    // id: "1255801867911866"
    // name: "Vũ Huy Hoàng"
    // picture: {data: {…}}
    // reauthorize_required_in: 7776000
    // signedRequest: "Lp8nklWNdxoAl7jju1GGTFWwdUK_qs4TE_b-geFUimQ.eyJ1c2VyX2lkIjoiMTI1NTgwMTg2NzkxMTg2NiIsImNvZGUiOiJBUUFNTUVFSEItNTdyeFhVTjlHMVVLdnJxNThrNFNiaHhJTWp0SUpBWXVTNEhkNzExWnM4Q0d2Wjc4LUM1OVk2Q0NuZjhWMmFrZnVYT2NtTVpKZzdSLWxRb2xTS1VOd2hMb1lxRFF5cEo1dlFrQ3ZBcDRPNzdBbzVQOTVjYjlKQlFFNkZSZHFpRlJNVzlxRXNjdlBZeFhzRkxDcm00REIwOXNoYjg1MmFtSG9hS0VnX09KajA5X1kwQU9kUFVDU0VmTHZDX05kWF9CZnVnZkt5MGtRZ0J5OVB2SUo5emRkMXEyX1BSeHJKYUw3U1ltb1FySFk0ZTFlMHl4b2lFQzNvVmt5dTdWeGotRkRkY2szcVZOZDRQbnJHODRpY09tQzJ4a2JrX1JPLUxkZ1EtNTFnaHQ1YmY2WTBMbm85cXNFOEVCZ0RKS3BVcGhobklPdE1KZndwV2ZGSnFURExVTUlweXM2ZmpFRFA3ZUZ5RWciLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTU1ODk3MjQ1NX0"
    // userID: "1255801867911866"
  };

  responseGoogle = response => {
    console.log('google', response);
    const { profileObj } = response;
    this.setState({
      userId: profileObj.googleId,
      username: profileObj.name,
      email: profileObj.email,
      type: 'gg',
      avatar: `${profileObj.imageUrl}?sz=200`,
    });

    //     El: "114892036986412862708"
    // Zi: {token_type: "Bearer", access_token: "ya29.GlsWB7RHbGV0ZXaUHzUiIhiR7RxUsnETpAetqqZoDWaVn…CnlZLgGaUGmvA-hbCz_IYDEwVoxSrJx8umnI2veAaBviHD-Cg", scope: "email profile https://www.googleapis.com/auth/user…id https://www.googleapis.com/auth/userinfo.email", login_hint: "AJDLj6JUa8yxXrhHdWRHIV0S13cAqKQFGMrzw4C96DSe_PwGGwWk1--hJ1WSDWmnlphzx2yymMOs9j7feveR1LMOIfxpxbjFNw", expires_in: 3600, …}
    // accessToken: "ya29.GlsWB7RHbGV0ZXaUHzUiIhiR7RxUsnETpAetqqZoDWaVns62OusKpBCQT7-nOuEFxd6Bxv_7IFvCnlZLgGaUGmvA-hbCz_IYDEwVoxSrJx8umnI2veAaBviHD-Cg"
    // googleId: "114892036986412862708"
    // profileObj:
    // email: "20141825@student.hust.edu.vn"
    // familyName: "Hoàng"
    // givenName: "Vũ Huy"
    // googleId: "114892036986412862708"
    // imageUrl: "https://lh4.googleusercontent.com/-OWfCGzAV2Pg/AAAAAAAAAAI/AAAAAAAAABE/1mXQIqsJXu8/s96-c/photo.jpg"
    // name: "Vũ Huy Hoàng"
    // __proto__: Object
    // tokenId: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA3YTA4MjgzOWYyZTcxYTliZjZjNTk2OTk2Yjk0NzM5Nzg1YWZkYzMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNzg5MjE0MzU0NTkzLTNkYXBlYjRidWR2Z3JsNWQxOGF2bm92bXIxZ2k5bnVnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNzg5MjE0MzU0NTkzLTNkYXBlYjRidWR2Z3JsNWQxOGF2bm92bXIxZ2k5bnVnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0ODkyMDM2OTg2NDEyODYyNzA4IiwiaGQiOiJzdHVkZW50Lmh1c3QuZWR1LnZuIiwiZW1haWwiOiIyMDE0MTgyNUBzdHVkZW50Lmh1c3QuZWR1LnZuIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJKMkJneVZUYVJLLTVOQTM1bGF1ZVJ3IiwibmFtZSI6IlbFqSBIdXkgSG_DoG5nIiwicGljdHVyZSI6Imh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tT1dmQ0d6QVYyUGcvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQkUvMW1YUUlxc0pYdTgvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6IlbFqSBIdXkiLCJmYW1pbHlfbmFtZSI6Ikhvw6BuZyIsImxvY2FsZSI6InZpIiwiaWF0IjoxNTU4OTc2NzgxLCJleHAiOjE1NTg5ODAzODEsImp0aSI6IjE5MjZmOTUyYzAzMDAxNjRkNTkwYmM2YTQ0NGI0NTEwZTEzOTBjMGYifQ.1HUHa2twX1GvZWKOhxl6GyIcREvuowhTiwAejmnE-1oHUxCFFu-0JmVPzG4W5K0v-22-8KTwbX-tm_i58zmt7y6ODkQSXW-Ebb8wMd97lVpfYQu4m8YBMhGifo73l4T-vlBFbuQ6hKGTrKr0hQNFGqo1QPEftatVp0DG4KOu92Pv5wEjKCvr6tICbwf24HgME4DfwkC1lzi8dUHED7NV2loFCEL8muHfqavi3vNMTUqJQwGF2Ldye1zQY2FKj08cY-Qc0i5eoQzWqYVfP2l3R2YKROquSm9PTioBVn_rsx6j4zAPRSS0oY9VNZxW6FHmdaydog29o2Yy4Z1EXgW49w"
    // tokenObj: {token_type: "Bearer", access_token: "ya29.GlsWB7RHbGV0ZXaUHzUiIhiR7RxUsnETpAetqqZoDWaVn…CnlZLgGaUGmvA-hbCz_IYDEwVoxSrJx8umnI2veAaBviHD-Cg", scope: "email profile https://www.googleapis.com/auth/user…id https://www.googleapis.com/auth/userinfo.email", login_hint: "AJDLj6JUa8yxXrhHdWRHIV0S13cAqKQFGMrzw4C96DSe_PwGGwWk1--hJ1WSDWmnlphzx2yymMOs9j7feveR1LMOIfxpxbjFNw", expires_in: 3600, …}
    // w3: PG
    // Eea: "114892036986412862708"
    // Paa: "https://lh4.googleusercontent.com/-OWfCGzAV2Pg/AAAAAAAAAAI/AAAAAAAAABE/1mXQIqsJXu8/s96-c/photo.jpg"
    // U3: "20141825@student.hust.edu.vn"
    // ig: "Vũ Huy Hoàng"
    // ofa: "Vũ Huy"
    // wea: "Hoàng"
  };

  render() {
    const { userId, username, email, type, avatar } = this.state;
    return (
      <div>
        <Row type="flex" justify="center">
          Đăng nhập với facebook, google
        </Row>
        <br />

        {userId && (
          <Row justify="center">
            <Row type="flex" justify="center">
              <Avatar
                size={100}
                src={
                  type === 'fa'
                    ? `https://graph.facebook.com/${userId}/picture?width=1000&height=1000`
                    : avatar
                }
              />
            </Row>

            <Row type="flex" justify="center">
              {username}
            </Row>
            <br />
            <Row type="flex" justify="center">
              {email}
            </Row>
          </Row>
        )}

        {!userId && (
          <Row type="flex" justify="center">
            <FacebookLogin
              appId="369718810565763"
              fields="name,email,picture"
              callback={this.responseFacebook}
              size="small"
              icon="fa-facebook"
            />
          </Row>
        )}

        <br />

        {!userId && (
          <Row type="flex" justify="center">
            <GoogleLogin
              clientId="789214354593-3dapeb4budvgrl5d18avnovmr1gi9nug.apps.googleusercontent.com"
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
            />
          </Row>
        )}
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
