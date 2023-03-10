import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../Button'

const HeroSection = ( props ) => {
  
  return (
    <Wrapper>
      <div className='container'>
        <div className='grid grid-two-column'>
          <div className='hero-section-dara'>
            <h1 className='intro-data p-2'>Welcome to</h1>
            <h1 className='p-1'>{ props.name }</h1>
            <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              sit amet consectetur adipisicing elit.
              sit amet consectetur adipisicing elit.
              Numquam atque modi accusantium eum adipisci nihil!</p>
            <NavLink to={props.link} className="p-2">
              <Button>{ props.btn }</Button>
            </NavLink>
          </div>
          <div className='hero-section-image'>
            <figure>
              <img src={props.img} className='img-style ' alt="hero" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding:10rem;
  img {
    min-width: 10rem;
    height: 5rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
      padding: 10rem;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      // background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
    }
  }
`;

export default HeroSection;
