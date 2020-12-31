import React from 'react';
import Team from './team/team'
import './M_About.css';
function M_About (){
    return (
        <div>
          <div className="heading">
            <h1>About Us</h1>
            <span>Get More Info About Our ...</span> 
          </div>  
          <div className="cd-half-width second-slide"> 

            <div className="container">
              <div className="row">
                <div className="col-md-12">
                <div className="content second-content">
                    <div className="row">
                      <div className="col-md-7 left-image">
                        <img src="https://picsum.photos/200/300" />
                      </div>
                      <div className="col-md-5">
                        <div className="right-about-text">
                          <h4>Who we are?</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusamus at nisi quibusdam fuga maiores minima ab ipsam quam blanditiis, quisquam tenetur mollitia quae, saepe dignissimos. Tempore sunt assumenda pariatur.Ex ipsum libero veniam reprehenderit eius minima atque modi nesciunt eum iste, ullam praesentium alias laboriosam et vitae neque quibusdam perferendis repellendus. Sit numquam iure, earum sint molestias non. Exercitationem?</p>
                          <div className="primary-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br/>
                    <div className="row">
                      <div className="col-md-7">
                        <div className="left-about-text">
                          <h4>What we do?</h4>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis inventore non repudiandae ea, quasi optio voluptas quisquam, aperiam ipsum earum commodi possimus eveniet? Earum exercitationem pariatur harum quisquam eaque. Tempora?In ut, ducimus consequatur sunt nobis enim necessitatibus reiciendis sapiente consequuntur corrupti officia ab dolorem, autem, voluptatum velit. Eaque sunt voluptatibus similique at ullam aliquid dicta quisquam facere optio delectus?em pariatur harum quisquam eaque. Tempora?In ut, ducimus consequatur sunt nobis enim necessitatibus reiciendis sapiente consequuntur corrupti officia ab dolorem, autem, voluptatum velit. Eaque sunt voluptatibus similique at ullam aliquid dicta quisquam facere optio delectus?</p>
                          <div className="primary-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 right-image">
                        <img src="https://picsum.photos/200/300" />
                      </div>
                    </div>
                    {/* <br/> */}
                    
                  </div>
                  </div>
                </div>
              </div>                  
            </div>

            <h1 className="our_team">Our Team</h1>
            <Team />
        </div>
      );
}

export default M_About