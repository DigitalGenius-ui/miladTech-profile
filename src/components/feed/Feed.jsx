import React from 'react'
import styled from 'styled-components';
import About from './About';
import Banner from './Banner';
import Recommendation from './review/Recommendation';
import Services from './Services';

const Feed = () => {
  return (
    <Container>
      <Banner/>
      <About/>
      <Services/>
      <Recommendation/>
    </Container>
  )
}

export default Feed;

const Container = styled.div`
  position: relative;
  padding : 2rem 2rem 0 2rem ;
  @media(max-width : 570px){
    padding : 2rem 1rem 0 1rem ;
  }
`