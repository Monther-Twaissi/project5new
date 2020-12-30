import React from 'react';
import './AboutBody.css';

function AboutBody() {
  return (
    <section>
      <div className='about-container'>
        <div className='about-row-container'>
          <div className='about-column-66'>
            <h2 className="about-header">GREAT TASTE, GOOD TIMES</h2>
            <p className="about-paragraph">
            Here at Barney’s Burgers we take pride in the quality of the meat used for each and every burger. If it’s not perfect and grilled just the way you ordered it, we won’t send it out.  We guarantee the burger delivered to your table is the best burger you could have ordered.
            </p>
            <button className="btn btn-danger">OUR MENU</button>
          </div>
          <div className='about-column-33'>
            <img
              alt='Burger Image'
              className='about-image-style'
              src="https://burgershop.templates.editmysite.com/uploads/8/8/9/6/88968090/burger-image-1-2x_orig.png"
            ></img>
          </div>
        </div>
      </div>

      <div className='about-container'>
        <div className='about-row-container'>
          <div className='about-column-33'>
            <img
              alt='Burger Image'
              className='about-image-style'
              src="https://burgershop.templates.editmysite.com/uploads/8/8/9/6/88968090/burger-image-1-2x_orig.png"
            ></img>
          </div>
          <div className='about-column-66'>
            <h2 className="about-header">GREAT TASTE, GOOD TIMES</h2>
            <p className="about-paragraph">
            Here at Barney’s Burgers we take pride in the quality of the meat used for each and every burger. If it’s not perfect and grilled just the way you ordered it, we won’t send it out.  We guarantee the burger delivered to your table is the best burger you could have ordered.
            </p>
            <button className="btn btn-danger">OUR MENU</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBody
