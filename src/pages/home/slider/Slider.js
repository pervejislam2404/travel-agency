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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
