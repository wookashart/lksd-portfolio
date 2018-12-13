import styled, {injectGlobal} from 'styled-components';
import color from './core/colors';
import breakpoint from './core/breakpoints';

export const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${color.grayDark};
  transform: ${props => props.open ? 'scale(1)' : 'scale(0)'};
  transform-origin: center;
  transition: 0.2s ease;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${breakpoint.desktop}px) {
    transform: none;
    top: ${props => props.sticky ? '0' : 'auto'};
    bottom: ${props => props.sticky ? 'auto' : '0'};
    position: ${props => props.sticky ? 'fixed' : 'absolute'};
    background-color: ${props => props.sticky ? color.grayDark : 'transparent'};
    border-bottom: 3px solid ${props => props.sticky ? color.redBase : 'transparent'};
  }
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-flow: row;
  padding: 20px;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${breakpoint.desktop}px) {
    flex-flow: row;
    padding: ${props => props.sticky ? '5px 20px' : '20px'};
  }
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: column;
  text-align: center;
  margin-bottom: 50px;

  @media screen and (min-width: ${breakpoint.desktop}px) {
    flex: 1;
    flex-flow: row;
    text-align: left;
    margin-bottom: 0;
  }

  li {
    display: block;
    padding: 10px;

    a {
      font-size: 2.2rem;
      color: ${color.white};
      text-transform: uppercase;
      display: block;
      letter-spacing: 1px;
      font-weight: 700;
      transition: 0.12s linear;

      @media screen and (min-width: ${breakpoint.desktop}px) {
        font-size: ${props => props.sticky ? '1.8rem' : '2.2rem'};
      }
    }

    &:hover {
      a {
        color: ${color.redBase};
      }
    }
  }
`;

export const SocialMedia = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    display: block;
    width: 30px;
    height: 15px;
    margin: 0 5px;
    font-size: 0;
    color: transparent;
    position: relative;
    cursor: pointer;
    transition: 0.12s linear;

    &::before {
      content: '';
      display: inline-block;
      border-bottom: 10px solid white;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
      position: absolute;
      top: -10px;
      left: 0;
      transition: 0.12s linear;
    }

    &::after {
      content: '';
      display: inline-block;
      border-top: 10px solid white;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
      position: absolute;
      bottom: -10px;
      left: 0;
      transition: 0.12s linear;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;

      i {
        display: block;
        font-size: 1.6rem;
        text-align: center;
        color: ${color.white};
        transition: 0.12s linear;
      }
    }

    &.facebook {
      background-color: ${color.facebook};

      &::before {
        border-bottom-color: ${color.facebook};
      }

      &::after {
        border-top-color: ${color.facebook};
      }
    }

    &.twitter {
      background-color: ${color.twitter};

      &::before {
        border-bottom-color: ${color.twitter};
      }

      &::after {
        border-top-color: ${color.twitter};
      }
    }

    &.linkedin {
      background-color: ${color.linkedin};

      &::before {
        border-bottom-color: ${color.linkedin};
      }

      &::after {
        border-top-color: ${color.linkedin};
      }
    }

    &.github {
      background-color: ${color.github};

      &::before {
        border-bottom-color: ${color.github};
      }

      &::after {
        border-top-color: ${color.github};
      }
    }

    &:hover {
      background-color: ${color.white};

      &::before {
        border-bottom-color: ${color.white};
      }

      &::after {
        border-top-color: ${color.white};
      }

      i {
        color: ${color.redBase};
      }
    }
  }
`;

export const Hamburger = styled.div`
  position: fixed;
  top: 40px;
  right: 20px;
  width: 70px;
  z-index: 1000;

  @media screen and (min-width: ${breakpoint.desktop}px) {
    display: none;
  }

  a {
    display: block;
    border-left: 4px solid ${color.redBase};
    border-right: 4px solid ${color.redBase};
    height: 35px;
    position: relative;

    &::before,
    &::after {
      content: '';
      width: 41px;
      height: 4px;
      background-color: ${color.redBase};
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
        background-color: ${color.redBase};
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

      i {
        font-size: 3rem;
        color: ${color.redBase};
        line-height: 1.1;
      }
    }
  }
`;