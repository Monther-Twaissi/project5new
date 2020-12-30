import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './BurgerListHome.css'

function BurgerListHome() {
    return (
        <section className="header-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="inner-section">
                            <p className="list-only"> <i>Only the best</i> </p>
                            <h3 className="list-header">BURGERS & SIDES</h3>
                            <p className="list-paragraph">Our menu ranges from your old school <br/> to some mind-blowing custom burgers and sides</p> <br/>
                            <div>
                            <p>Classic Cheese Burger <span className="list-price">12 JOD</span></p>
                            <p>Slap Your Face Burger <span className="list-price">12 JOD</span></p>
                            <p>French Fies <span className="list-price">12 JOD</span></p>
                            <p>Classic Cheese Burger <span className="list-price">12 JOD</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BurgerListHome
