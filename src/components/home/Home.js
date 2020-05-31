import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import heroImage from './../../assets/images/hero.jpg';
import wild1 from './../../assets/images/wild1.jpg';
import wild2 from './../../assets/images/wild2.jpg';
import wild3 from './../../assets/images/wild3.jpg';
import wild4 from './../../assets/images/wild4.jpg';
import wild5 from './../../assets/images/wild5.jpg';
import HeroImage from "./HeroImage";
import Gallery from "react-photo-gallery";



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
       photos : [
        {
          src: wild1,
          width: 4,
          height: 3
        },
        {
          src: wild2,
          width: 1,
          height: 1
        },
         {
           src: wild3,
           width: 4,
           height: 3
         },
         {
           src: wild4,
           width: 1,
           height: 1
         },
         {
           src: wild5,
           width: 4,
           height: 3
         }
      ]
    }
  }

  render() {
    return (
        <div>
          <HeroImage />
          <div className="container-fluid">
            <div className="row">
              <div className="offset-lg-1 col-lg-10 col-md-12">
                <Gallery
                    margin={2}
                    targetRowHeight={100}
                    limitNodeSearch={3}
                    // onClick={(e, obj) => {
                    //   this.openImageModal(e, obj);
                    // }}
                    photos={this.state.photos}/>
              </div>
            </div>
          </div>

          <div className="jumbotron text-center jumbo_message">
            <h1>Making something special
              to save your memories</h1>
            <p>A photo can reveal more about a person than you might have thought.
              Just like looking in the eyes, photography can reveal your soul. What's more, a picture can bear different meanings. Photography can provide not only a sense of place, but also have a historical and educational meaning.

            </p>



            <div className=" p-3">

              <Gallery
                  margin={2}
                  targetRowHeight={100}
                  limitNodeSearch={3}
                  // onClick={(e, obj) => {
                  //   this.openImageModal(e, obj);
                  // }}
                  photos={this.state.photos}/>

            </div>


          </div>

        </div>
    );
  }
}

Home.propTypes = {

};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {})(withRouter(Home));
