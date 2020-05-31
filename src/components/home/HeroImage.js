import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import heroImage from './../../assets/images/hero.jpg';
class HeroImage extends Component {
  render() {
    return (
        <div className="hero_container" style={{backgroundImage: `url(${heroImage})`}}  >
          <div className="hero_quote">
            <h2>
              Creating Qaulity Photos with Professional Touch
            </h2>
          </div>
        </div>
    );
  }
}


HeroImage.propTypes = {

};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {})(withRouter(HeroImage));
