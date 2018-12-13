import styled, {injectGlobal} from 'styled-components';
import color from './core/colors';
import breakpoint from './core/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const Box = styled.div`
  width: 100%;
  position: relative;
  border: 1px solid ${color.grayLighter};

  @media screen and (min-width: ${breakpoint.mobile}px) {
    width: 50%;
  }

  @media screen and (min-width: ${breakpoint.desktop}px) {
    width: 25%;
  }

  div {
    transition: 0.2s ease;
    height: 100%;
    padding: 20px;
    text-align: center;
    position: relative;
    transition: 0.2s ease;
    background-color: ${color.redOpacity};
    padding-bottom: 75px;

    h3 {
      margin-bottom: 30px;
      text-decoration: underline;
    }

    p {
      margin-top: 0;
    }

    a {
      color: ${color.white};
      font-weight: 700;
    }
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    max-width: 90%;
    max-height: 100%;
    filter: blur(10px);
    transition: 0.12s filter linear;
    padding: 10px;
  }

  &:hover {
    div {
      background-color: ${color.redOpacity};
      opacity: 1;
      visibility: visible;
    }

    img {
      filter: blur(0);
    }
  }
`;

export const Button = styled.a`
  display: inline-block;
  font-size: 2rem;
  color: white;
  text-transform: uppercase;
  padding: 10px 25px;
  border: 2px solid ${color.white};
  border-radius: 25px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  width: 185px;
  margin: auto;
  transition: 0.15s linear;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;