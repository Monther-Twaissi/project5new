import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router';
import "linearicons";
import "./ma-form.css";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameR: '',
      mobileR: '',
      passwordR: '',
      confirmPasswordR: '',
      userErrorR: '',
      usernameL: '',
      passwordL: '',
      userErrorL: "",
      redirect: false,
    }
  }
  handelInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value)
  };
  onSubmitR = (e) => {
    e.preventDefault();
    const  rData = this.state;
    const newUser = {
      username: rData.usernameR,
      mobile: rData.mobileR,
      password: rData.passwordR,
    };
    axios.post('http://localhost:5000/api/users/register', newUser)
      .then((res) => {
        if (res.data === "User already exist") {
          this.setState({
            userErrorR: "User already exist",
          });
        } else {
          this.setState({
            redirect: true,
          });
        }
      })
      .catch((err) => console.log(err));
  }
  onSubmitL = (e) => {
    e.preventDefault();
    const  rData = this.state;
    const user = {
      username: rData.usernameL,
      password: rData.passwordL,
    };
    axios.post('http://localhost:5000/api/auth/login', user)
      .then((res) => {
        if (res.data === "User not found") {
          this.setState({
            userErrorL: "User not found",
          });
        } else if (res.data === "Wrong Username or password") {
          this.setState({
            userErrorL: "Wrong Username or password",
          });
        } else {
          this.setState({
            redirect: true,
          })
        }
      })
      .catch((err) => console.log(err));
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <section id="landing">
        <div className="container" style={{ fontFamily: "Itim" }}>
          <div className="row ">
            <div
              className="col-lg-5 col-md-5 col-sm-12 "
              style={{ margin: "12vh auto 15vh auto" }}
            >
              <img
                src="https://www.dotit.com/media/allergen-awareness-training/chef.png"
                alt=""
                class="image-1"
              />
              <form onSubmit={this.onSubmitR} className="ma-form">
                <h2>
                  <b>Register</b>
                  <br />
                  Your Account Now
                </h2>
                <br />
                <div className="form-holder">
                  <span className="lnr lnr-user"></span>
                  <input
                    type="text"
                    placeholder="Username"
                    name="usernameR"
                    onChange={this.handelInputChange}
                    className={
                      this.state.userErrorR ?
                        "form-control form-group is-invalid" :
                        "form-control form-group"
                    }
                    required
                  />
                </div>
                <div className="form-holder">
                  <span className="lnr lnr-phone-handset"></span>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    name="mobileR"
                    onChange={this.handelInputChange}
                    className={
                      this.state.userErrorS ?
                      "form-control form-group is-invalid" :
                      "form-control form-group"
                    }
                    required
                  />
                  <div className = {
                    this.state.userErrorR
                      ? "invalid-feedback error"
                      : "invalid-feedback" }>
                   {this.state.userErrorR}
                  </div>
                </div>
                <div className="form-holder">
                  <span className="lnr lnr-lock"></span>
                  <input
                    type="password"
                    placeholder="Password"
                    name="passwordR"
                    onChange={this.handelInputChange}
                    className={
                      this.state.userErrorR ?
                      "form-control form-group is-invalid" :
                      "form-control form-group"
                    }
                    required
                  />
                  <div className = {
                    this.state.userErrorR
                      ? "invalid-feedback error"
                      : "invalid-feedback" }>
                   {this.state.userErrorR}
                  </div>
                </div>
                <div className="form-holder">
                  <span className="lnr lnr-lock"></span>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPasswordR"
                    onChange={this.handelInputChange}
                    className={
                      this.state.userErrorS ?
                      "form-control form-group is-invalid" :
                      "form-control form-group"
                    }
                    required
                  />
                  <div className = {
                    this.state.userErrorR
                      ? "invalid-feedback error"
                      : "invalid-feedback" }>
                   {this.state.userErrorR}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-warning"
                  style={{ width: "100%" }}
                >
                  <span>Register</span>
                </button>
              </form>
            </div>
            <div className="vertical"></div>
            {/* Login */}
            <div
              className="col-lg-5 col-md-5 col-sm-12 "
              style={{ margin: "12vh auto 15vh auto" }}
            >
              <form onSubmit={this.onSubmitL} className="ma-form">
                <h2 className="marginTitle">
                  <b>Login</b>
                  <br/>
                  Your Account 
                </h2>
                <br />
                <div className="form-holder">
                  <span className="lnr lnr-user"></span>
                  <input
                    type="text"
                    placeholder="Username"
                    name="usernameL"
                    onChange={this.handelInputChange}
                    className={
                      this.state.userErrorL ?
                      "form-control form-group is-invalid" :
                      "form-control form-group"
                    }
                    required
                  />
                  <div className = {
                    this.state.userErrorL
                      ? "invalid-feedback error"
                      : "invalid-feedback" }>
                   {this.state.userErrorL}
                  </div>
                </div>
                <div className="form-holder">
                  <span className="lnr lnr-lock"></span>
                  <input
                    type="password"
                    placeholder="Password"
                    name="passwordL"
                    onChange={this.handelInputChange}
                    className={
                      this.state.userErrorL ?
                      "form-control form-group is-invalid" :
                      "form-control form-group"
                    }
                    required
                  />
                  <div className = {
                    this.state.userErrorL
                      ? "invalid-feedback error"
                      : "invalid-feedback" }>
                   {this.state.userErrorL}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-warning"
                  style={{ width: "100%" }}
                >
                  <span>Login</span>
                </button>
              </form>
              <img
                src="https://themezinho.net/steaque/images/tab-dishes04.png"
                className="image-2"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
