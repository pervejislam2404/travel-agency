import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{height:'70vh'}}
            className="d-block w-100"
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_50616894_Large.jpg?crop=0,3,3000,1992&wid=828&hei=550&scl=3.6231884057971016"
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height:'70vh'}}
            src="https://cdn.cnn.com/cnnnext/dam/assets/170123102533-beautiful-india-pangong-tso-flickr-alosh-bennett-4109608716-5d3d7224d7-o-exlarge-169.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height:'70vh'}}
            src="https://www.teahub.io/photos/full/277-2777033_tropical-beach-wallpaper-hd.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
