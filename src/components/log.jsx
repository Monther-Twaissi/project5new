import React, { Component } from "react";
import axios from "axios";
// import { Redirect } from 'react-router';
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
      usernameL: '',
      passwordL: '',
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
    axios.post('http://localhost:5000/user/register', newUser)
      .then((res) => {
        console.log("registered")
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
    axios.post('http://localhost:5000/user/login', user)
      .then((res) => {
        console.log("Login")
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <section id="landing">
        <div className="container" style={{ fontFamily: "Itim" }}>
          <div className="row ">
            <div
              className="col-lg-5 col-md-5 col-sm-12 "
              style={{ margin: "12vh auto 15vh auto" }}
            >
              {this.state.msg !== null ? (
                <div className="p-3 mb-2 bg-danger text-white">
                  {" "}
                  {this.state.msg}{" "}
                </div>
              ) : null}
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
                    className="form-control"
                    placeholder="Username"
                    name="usernameR"
                    onChange={this.handelInputChange}
                  />
                </div>
                <div className="form-holder">
                  <span className="lnr lnr-phone-handset"></span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                    name="mobileR"
                    onChange={this.handelInputChange}
                  />
                </div>
                <div className="form-holder">
                  <span className="lnr lnr-lock"></span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="passwordR"
                    onChange={this.handelInputChange}
                  />
                </div>
                <div className="form-holder">
                  <span className="lnr lnr-lock"></span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="confirmPasswordR"
                    onChange={this.handelInputChange}
                  />
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
            <div className = "vertical"></div>
            <div
              className="col-lg-5 col-md-5 col-sm-12 "
              style={{ margin: "12vh auto 15vh auto" }}
            >
              {this.state.msg !== null ? (
                <div className="p-3 mb-2 bg-danger text-white">
                  {" "}
                  {this.state.msg}{" "}
                </div>
              ) : null}
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
                    className="form-control"
                    placeholder="Username"
                    name="usernameL"
                    onChange={this.handelInputChange}
                  />
                </div>
                <div className="form-holder">
                  <span className="lnr lnr-lock"></span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="passwordL"
                    onChange={this.handelInputChange}
                  />
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
