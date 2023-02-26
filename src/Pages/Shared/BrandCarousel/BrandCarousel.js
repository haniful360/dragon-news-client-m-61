import React from 'react';
import { Carousel } from 'react-bootstrap';

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item interval={2000}>
        <img
            height={200}
            width={300}
          className="d-block"
          src="https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc="
          alt="First slide"
        />
        <Carousel.Caption>
          <h4>First news</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
        width={300}
         height={200}
          className="d-block"
          src="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h4>Second news</h4>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default BrandCarousel;