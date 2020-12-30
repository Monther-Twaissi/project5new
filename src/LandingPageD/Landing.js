import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <section>
      <div className="landing-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="inner-section">
                <h1 className="header-landing">
                  LOCAL BURGERS <br /> DONE RIGHT
                </h1>
                <p className="landing-paragraph">
                  Join us for your next meal. We get the juices flowing
                </p>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <button className="btn btn-danger">OUR MENU</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
