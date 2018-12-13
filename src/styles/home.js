import styled, {injectGlobal} from 'styled-components';
import color from './core/colors';
import breakpoint from './core/breakpoints';

export const  HomeContainer = styled.div`
  background-image: url('/public/img/ash-edmonds-490789-unsplash.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  position: relative;
  padding: 20px;
`;

export const TitleContainer = styled.div`
  margin-top: 20vh;

  @media screen and (min-width: ${breakpoint.desktop}px) {
    margin-top: 25vh;
  }

  h1,
  h3 {
    text-align: center;
  }

  h3 {
    text-transform: uppercase;
    margin: 10px;
  }
`;

export const SeptagonButton = styled.div`
  position: absolute;
  display: block;
  bottom: 75px;
  left: 0;
  right: 0;
  width: 70px;
  margin: auto;
  
  @media screen and (min-width: ${breakpoint.desktop}px) {
    bottom: 120px;
    width: 100px;
  }

  a {
    display: block;
    border-left: 4px solid ${color.white};
    border-right: 4px solid ${color.white};
    height: 35px;
    position: relative;
    transition: 0.12s linear;
    
    @media screen and (min-width: ${breakpoint.desktop}px) {
      height: 55px;
    }
    
    &::before,
    &::after {
      content: '';
      width: 41px;
      height: 4px;
      background-color: ${color.white};
      display: block;
      position: absolute;
      top: -20px;
      transition: 0.12s linear;
      
      @media screen and (min-width: ${breakpoint.desktop}px) {
        width: 58px;
      }
    }

    &::before {
      left: 0;
      transform: translate(-6px, 9px) rotate(-30deg);
      
      @media screen and (min-width: ${breakpoint.desktop}px) {
        transform: translate(-7px,5px) rotate(-30deg);
      }
    }

    &::after {
      right: 0;
      transform: translate(6px, 9px) rotate(30deg);
      
      @media screen and (min-width: ${breakpoint.desktop}px) {
        transform: translate(7px, 5px) rotate(30deg);
      }
    }

    > span {
      display: block;

      &::before,
      &::after {
        content: '';
        width: 41px;
        height: 4px;
        background-color: ${color.white};
        display: block;
        position: absolute;
        bottom: -20px;
        transition: 0.12s linear;
        
        @media screen and (min-width: ${breakpoint.desktop}px) {
          width: 58px;
        }
      }

      &::before {
        left: 0;
        transform: translate(-6px, -9px) rotate(30deg);
        
        @media screen and (min-width: ${breakpoint.desktop}px) {
          transform: translate(-7px, -5px) rotate(30deg);
        }
      }

      &::after {
        right: 0;
        transform: translate(6px, -9px) rotate(-30deg);
        
        @media screen and (min-width: ${breakpoint.desktop}px) {
          transform: translate(7px,-5px) rotate(-30deg);
        }
      }

      > span {
        display: flex;
        line-height: 0.7;
        justify-content: center;
        width: 60px;
        text-align: center;
        color: ${color.white};

        svg {
          path {
            transition: 0.12s transform linear;
            stroke: ${color.white};

            &.arrow-1 {
              z-index: 3;
            }
            
            &.arrow-2 {
              opacity: 0.5;
              z-index: 2;
            }

            &.arrow-3 {
              opacity: 0.2;
              z-index: 1;
            }
          }

          g {
            transform: translate(4px,-30px);
            
            @media screen and (min-width: ${breakpoint.desktop}px) {
              transform: translate(4px, 4px);
            }
          }
        }
        
        @media screen and (min-width: ${breakpoint.desktop}px) {
          width: 91px;
        }
      }
    }
  }

  &:hover {
    a {
      border-color: transparent;
      

      &::before,
      &::after {
        background-color: transparent;
      }

      span {
        &::before,
        &::after {
          background-color: transparent;
        } 

        svg {
          path {
            stroke: ${color.redBase};
          }

          path.arrow-1 {
            transform: translateY(40px);
          }

          path.arrow-2 {
            transform: translateY(20px);
          }
        }
      }
    }
  }
`;