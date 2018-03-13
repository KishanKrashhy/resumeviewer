import React, { Component } from 'react';

class Testomonial extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (tst) {
        return <li key={tst.user}>
          <blockquote>
            <p>
              {tst.text}
      </p>
            <cite>{tst.user}</cite>
          </blockquote>
        </li>
      });
    }
    return (
      <section id="testimonials">

        <div className="text-container">

          <div className="row">

            <div className="two columns header-col">

              <h1><span>Client Testimonials</span></h1>

            </div>

            <div className="ten columns flex-container">

             

                <ul className="slides">

                 {testimonials}

                </ul>
              
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Testomonial;
