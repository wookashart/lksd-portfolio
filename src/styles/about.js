import styled, {injectGlobal} from 'styled-components';
import color from './core/colors';
import breakpoint from './core/breakpoints';

export const AboutContainer = styled.div`
  background-image: url('/public/img/sergi-kabrera-705414-unsplash.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  h3 {
    text-align: center;
    text-transform: uppercase;
  }
`;

export const RedFilter = styled.div`
  content: '';
  display: block;
  margin: auto;
  background-color: ${color.redOpacity};
  padding: 30px 10px;
`;

export const TextBox = styled.div`
  max-width: 1400px;
  margin: 30px auto;
`;

export const TextContentBox = styled.div`
  background-color: ${color.grayDark};
  display: block;
  height: 100%;
  text-align: center;
  padding: 20px;

  @media screen and (min-width: ${breakpoint.desktop}px) {
    margin: 0 20px;
    padding: 40px;
  }

  h2 {
    text-align: center;
  }

  h4 {
    text-align: center;
    margin-top: 15px;
  }
`;

export const HexagonBox = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  height: 340px;
`;

export const HexagonSmall = styled.div`
  display: none;
  width: 70px;
  border-left: 4px solid ${color.white};
  border-right: 4px solid ${color.white};
  height: 35px;
  position: relative;
  margin: 40px;

  @media screen and (min-width: ${breakpoint.mobile}px) {
    display: inline-block;
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
    }

    &::before {
      left: 0;
      transform: translate(-6px, 9px) rotate(-30deg);
    }

    &::after {
      right: 0;
      transform: translate(6px, 9px) rotate(30deg);
    }

    > span {
      display: block;
      text-align: center;

      &::before,
      &::after {
        content: '';
        width: 41px;
        height: 4px;
        background-color: ${color.white};
        display: block;
        position: absolute;
        bottom: -20px;
      }

      &::before {
        left: 0;
        transform: translate(-6px, -9px) rotate(30deg);
      }

      &::after {
        right: 0;
        transform: translate(6px, -9px) rotate(-30deg);
      }
    }
`;

export const HexagonBig = styled.div`
display: inline-block;
width: 200px;
border-left: 4px solid ${color.white};
border-right: 4px solid ${color.white};
height: 110px;
position: relative;
margin: 20px;

&::before,
  &::after {
    content: '';
    width: 115px;
    height: 4px;
    background-color: ${color.white};
    display: block;
    position: absolute;
    top: -20px;
    z-index: 10;
  }

  &::before {
    left: 0;
    transform: translate(-10px, -9px) rotate(-30deg);
  }

  &::after {
    right: 0;
    transform: translate(10px, -9px) rotate(30deg);
  }

  > span {
    display: block;
    text-align: center;

    &::before,
    &::after {
      content: '';
      width: 115px;
      height: 4px;
      background-color: ${color.white};
      display: block;
      position: absolute;
      bottom: -20px;
      z-index: 10;
    }

    &::before {
      left: 0;
      transform: translate(-10px, 9px) rotate(30deg);
    }

    &::after {
      right: 0;
      transform: translate(10px, 9px) rotate(-30deg);
    }
  }
`;

export const ImgContainer = styled.span`
  
`;

export const MeImage = styled.img`
  height: 270px;
  position: relative;
  top: -82px;
  left: 0;
  clip-path: polygon(49% 10%,101% 30%,100% 71%,50% 90%,0% 71%,0% 31%);
  opacity: 0;
  animation: ${props => props.start ? 'showimage 4s linear' : false};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes showimage {
    45% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const MeSvg = styled.svg`
  position: absolute;
  top: -82px;
  left: 0;
  z-index: 11;

  path {
    stroke: ${color.white};
    stroke-dasharray: 3000;
    stroke-dashoffset: 3000;
    animation: ${props => props.start ? 'drowimage 4s linear' : false};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes drowimage {
    90% {
      stroke: ${color.white};
    }

    100% {
      stroke-dashoffset: 0;
      stroke: transparent;
    }
  }
`;