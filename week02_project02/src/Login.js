import React, { Component,  BrowserRouter as Router, Route } from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css'
import App from './App';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: "",
      loggedIn: false
    };
  }
   responseFacebook = (response) => {
     if (response.status !== "unknown") {
       this.setState({ name: response.name })
       this.setState({ email: response.email })
       this.setState({ picture: response.picture.data.url })
       this.setState({ token: response.accessToken })
       this.setState({ loggedIn: "true" })
         }
     else {
       console.log("you are not singned in");
     }
  }
  render() {
    return (
        
        this.state.loggedIn === false ?
      <center>
        <FacebookLogin
          appId="387843689219447"
          autoLoad={false}
          fields="name,email,picture"
          on
          callback={this.responseFacebook} />
        {this.state.token ?
            <App></App>
          : null
        }
      </center>
      : 
      <div>
      
      <div class="card">
      <div class="row">
          <div class="col-lg-3 col-sm-6">
              <div class="card hovercard">
                  <div class="cardheader"  style={{ color: 'black' }}>
                        <p>Welcome</p>
                  </div>
                  <div class="avatar" >
                      <img alt="" src={this.state.picture}/>
                  </div>
                  <div class="info">
                      <div class="title">
                         {this.state.name}
                      </div>
                      <div class="desc">{this.state.email}</div>
                     
                  </div>
                  <div class="bottom">
                      <a class="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                          <i class="fa fa-twitter"></i>
                      </a>
                      <a class="btn btn-danger btn-sm" rel="publisher"
                         href="https://plus.google.com/+ahmshahnuralam">
                          <i class="fa fa-google-plus"></i>
                      </a>
                      <a class="btn btn-primary btn-sm" rel="publisher"
                         href="https://plus.google.com/shahnuralam">
                          <i class="fa fa-facebook"></i>
                      </a>
                      <a class="btn btn-warning btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                          <i class="fa fa-behance"></i>
                      </a>
                  </div>
              </div>
  
          </div>
  
      </div>
  </div>
  </div>
    )
  }
}