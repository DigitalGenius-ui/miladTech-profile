import React from 'react'
import styled from 'styled-components';
import { deploy, details, skills, language } from '../../Data/Data';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { AiFillGithub, AiOutlineMedium  } from 'react-icons/ai';
import { BsInstagram,  } from 'react-icons/bs';
import { TiTick  } from 'react-icons/ti';

const Skills = () => {
  return (
      <Container>
          <Details>
              {details.map((item, i) => (
                <Detail key={i}>
                  <h1>{item.title} :</h1>
                  <h2>{item.response}</h2>
                </Detail>
              ))}
          </Details>
          <Codes>
            {/* <h2>Languages :</h2> */}
              {language.map((item, i) => (
                <Code key={i}>
                    <TiTick 
                    style={{fontSize : "1rem", 
                    fontWeight : "bolder",
                    color : "skyblue"}}
                    />
                    <h1>{item}</h1>
                </Code>
              ))}
          </Codes>
          <Codes>
              {skills.map((item, i) => (
                <Code key={i}>
                    <TiTick 
                    style={{fontSize : "1rem", 
                    fontWeight : "bolder",
                    color : "skyblue"}}
                    />
                    <h1>{item}</h1>
                </Code>
              ))}
          </Codes>
          <Deploy>
              {deploy.map((item, i) => (
                  <Item key={i}>
                      <TiTick 
                        style={{fontSize : "1rem", 
                        fontWeight : "bolder",
                        color : "skyblue"}}
                        />
                        <h1>{item}</h1>
                  </Item>
              ))}
          </Deploy>
          <Social>
              <a href="https://www.linkedin.com/in/milad-amiri-215894207/" target="_blank" rel="noreferrer"><FaLinkedinIn className='icon'/></a>
              <a href="https://www.instagram.com/milad_amiri01/" target="_blank" rel="noreferrer"><BsInstagram className='icon'/></a>
              <a href="https://github.com/DigitalGenius-ui" target="_blank" rel="noreferrer"><AiFillGithub  className='icon'
              style={{fontSize : '1rem'}}/></a>
              <a href="https://digitalgenius1.medium.com/" target="_blank" rel="noreferrer"><AiOutlineMedium  className='icon'
              style={{fontSize : '1rem'}}/></a>
              <a href="https://www.facebook.com/profile.php?id=100009019544917" target="_blank" rel="noreferrer"><FaFacebookF className='icon'/></a>
          </Social>
      </Container>
  )
}

export default Skills;

const Container = styled.div`
    padding: 1.5rem 2rem;
    position: relative;
`
const Details = styled.div`
    border-bottom: 1px solid #343a40;
    padding-bottom: 1rem;
`
const Detail = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        font-size: 0.8rem;
        font-weight: 400;
        padding: 0.2rem 0;
    }
    h2{
        font-size: 0.8rem;
        font-weight: 300;
        padding: 0.2rem 0;
        color: #8c8c8e;
    }
`

const Codes = styled.div`
    border-bottom: 1px solid #343a40;
    border-top: 1px solid #343a40;
    padding : 1rem 0;
    h2{
        font-size: 1rem;
        padding-bottom: 0.3rem;
    }
`
const Code = styled.div`
    display: flex;
    align-items: center;
    gap : 0.2rem;
    margin : 0.3rem 0;
    h1{
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: 300;
    }
`
const Deploy = styled(Codes)`
    border-top: none;
    margin-bottom : 2rem;
`
const Item = styled(Code)``
const Social = styled.div`
    position : fixed;
    bottom : 1rem;
    left : 1rem;
    width: 19rem;
    background : linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);
    padding : 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width : 970px){
    bottom : 0;
    }
    .icon{
        cursor: pointer;
        color:#8b96a1;
        font-size: 0.8rem;
        transition: all 400ms ease-in-out;
        :hover{
            color:#e8ebee;
        }
    }
`
