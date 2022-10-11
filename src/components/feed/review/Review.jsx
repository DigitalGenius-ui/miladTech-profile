import React from 'react'
import styled from 'styled-components';

const Review = (props) => {
    const { img, name, position, review } = props.item; 
  return (
    <Slide>
        <Head>
          <Image src={img}/>
          <Text>
            <h1>{name}</h1>
            <p>{position}</p>
          </Text>
        </Head>
        <Body>
          <p>{review}</p>
        </Body>
    </Slide>
  )
}

export default Review;

const Slide = styled.div`
  margin: 1rem 0.5rem ;
  background: linear-gradient(159deg, 
    #2d2d3a 0%, #2b2b35 100%);
  padding: 2rem;
`
const Head = styled.div`
  position: relative;
`
const Image = styled.img`
  width: 4rem;
  border-radius: 50px;
  position: absolute;
  top: -3rem;
  right: 2rem;
`
const Text = styled.div`
  h1{
    font-size: 1rem;
  }
  p{
    font-size: 0.7rem;
    color: #8c8c8e;
    padding-top: 0.4rem;
  }
`
const Body = styled.div`
  p{
    font-size: 0.8rem;
    font-weight: 300;
    padding-top: 1rem;
    color: #8c8c8e;
  }
`