import React, { Component } from 'react';

class Mask extends Component {

  render() {

    const styles = {
      exterior: {

      }
    }
    return (
      <div>
      <div className="view hm-black-strong">
          <div className="full-bg-img flex-center">
              <ul>
                  <li>
                      <h1 className="h1-responsive wow fadeInDown" data-wow-delay="0.2s">Foundation? BootStrap? Materialize?</h1></li>
                  <li>
                      <p className="wow fadeInDown">Try Out Our CSS Framework Converter!</p>
                  </li>
                  <li>
                      <a target="_blank" href="https://mdbootstrap.com/getting-started/" className="btn btn-primary btn-lg wow fadeInLeft" data-wow-delay="0.2s" rel="nofollow">Sign up!</a>
                      <a target="_blank" href="https://mdbootstrap.com/material-design-for-bootstrap/" className="btn btn-default btn-lg wow fadeInRight" data-wow-delay="0.2s" rel="nofollow">Learn more</a>
                  </li>
              </ul>
          </div>
      </div>
      </div>
    );
  }

}

export default Mask;
