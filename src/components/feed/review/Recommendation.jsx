import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { reviews } from '../../../Data/Data';
import Review from './Review';

const Recommendation = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
    ]
  };

  let displaySlider = reviews.map((item, i) => (
    <Review item={item} key={i}/>
  ))
  return (
    <Content>
        <h2>Recommendations</h2>
        <Slider {...settings}>
          {displaySlider}
        </Slider>
    </Content>
  )
}

export default Recommendation;

const Content = styled.div`
    h2{
        font-size : 1rem;
        padding : 1.5rem 0 ;
    }

  .slick-dots{
    width: 8rem;
    margin: 0 0.5rem;
  }

  .slick-dots li button:before{
    content: "";
  }

  .slick-dots li button{
    background: linear-gradient(159deg, 
    #2d2d3a 0%, #2b2b35 100%);
    height: 3px;
    width: 8px;
    padding: 0.1rem;
    border-radius: 50px;
    background : linear-gradient(159deg, 
    #2d2d3a 0%, #2b2b35 100%);
    transition: all 500ms ease-in-out;
    margin-top: 1rem;
  }

  .slick-dots li.slick-active button{
    background: skyblue;
    width: 15px;
  }

  .slick-dots li{
    margin: 0 ;
  }
`
