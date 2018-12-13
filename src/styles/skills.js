import styled, {injectGlobal} from 'styled-components';
import color from './core/colors';
import breakpoint from './core/breakpoints';

export const SkillsContainer = styled.div`
  background-color: ${color.grayDark};
`;

export const SkillsMaxWidth = styled.div`
  max-width: 1400px;
  margin: auto;
`;

export const SkillsHeader = styled.div`
  text-align: center;
  padding: 100px 0;
`;

export const SkillsHexagon = styled.div`
  display: block;
  width: 200px;
  height: 110px;
  position: relative;
  background-color: ${props => props.light ? color.grayLighter2 : color.grayBase};
  margin: auto;

  &::before {
    content: '';
    border-bottom: 50px solid ${props => props.light ? color.grayLighter2 : color.grayBase};
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    position: absolute;
    top: -50px;
    left: 0;
  }

  &::after {
    content: '';
    border-top: 50px solid ${props => props.light ? color.grayLighter2 : color.grayBase};
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    position: absolute;
    bottom: -50px;
    left: 0;
  }

  h2 {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 4.5rem;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8), 3px 3px 10px rgba(0, 0, 0, 0.2);
    left: 0;
    right: 0;
    z-index: 1;

    @media screen and (min-width: ${breakpoint.mobile}px) {
      left: -200px;
      right: 200px;
      width: 600px;
    }
  }
`;

export const SkillsTextBox = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 50px 15px;

  div {
    flex: 1;
    text-align: center;

    @media screen and (min-width: ${breakpoint.mobile}px) {
      text-align: ${props => props.right ? 'right' : 'left'};
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    i {
      color: ${color.white};
    }

    h4 {
      margin-top: 15px;
    }
  }
`;

export const SkillsHexagonsBox = styled.div`
  position: relative;
  position: relative;
  height: 380px;
  width: 500px;
  margin-left: 50px;
  display: none;

  @media screen and (min-width: ${breakpoint.mobile}px) {
    display: block;
  }

  div {
    &.big {
      width: 200px;
      height: 110px;
      border-left: 4px solid ${color.white};
      border-right: 4px solid ${color.white};
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;

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
        padding-top: 10px;
    
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

        i {
          font-size: 10rem;
        }
      }
    }

    &.large {
      width: 150px;
      height: 75px;
      border-left: 4px solid ${color.white};
      border-right: 4px solid ${color.white};
      position: absolute;
      top: 0;
      right: 350px;
      left: 0;
      margin: auto;

      @media screen and (min-width: ${breakpoint.desktop}px) {
        top: 30px;
      }

      &::before,
      &::after {
        content: '';
        width: 87px;
        height: 4px;
        background-color: ${color.white};
        display: block;
        position: absolute;
        top: -30px;
        z-index: 10;
      }

      &::before {
        left: 0;
        transform: translate(-9px, 7px) rotate(-30deg);
      }

      &::after {
        right: 0;
        transform: translate(9px, 7px) rotate(30deg);
      }

      > span {
        display: block;
        text-align: center;
    
        &::before,
        &::after {
          content: '';
          width: 87px;
          height: 4px;
          background-color: ${color.white};
          display: block;
          position: absolute;
          bottom: -30px;
          z-index: 10;
        }
    
        &::before {
          left: 0;
          transform: translate(-9px, -7px) rotate(30deg);
        }
    
        &::after {
          right: 0;
          transform: translate(9px, -7px) rotate(-30deg);
        }

        i {
          font-size: 7rem;
        }
      }
    }

    &.medium {
      width: 100px;
      height: 55px;
      border-left: 4px solid ${color.white};
      border-right: 4px solid ${color.white};
      position: absolute;
      bottom: 35px;
      right: 245px;
      left: 0;
      margin: auto;

      &::before,
      &::after {
        content: '';
        width: 58px;
        height: 4px;
        background-color: ${color.white};
        display: block;
        position: absolute;
        top: -20px;
        z-index: 10;
      }

      &::before {
        left: 0;
        transform: translate(-7px, 5px) rotate(-30deg);
      }

      &::after {
        right: 0;
        transform: translate(7px, 5px) rotate(30deg);
      }

      > span {
        display: block;
        text-align: center;
        padding-top: 5px;
    
        &::before,
        &::after {
          content: '';
          width: 58px;
          height: 4px;
          background-color: ${color.white};
          display: block;
          position: absolute;
          bottom: -20px;
          z-index: 10;
        }
    
        &::before {
          left: 0;
          transform: translate(-7px, -5px) rotate(30deg);
        }
    
        &::after {
          right: 0;
          transform: translate(7px,-5px) rotate(-30deg);
        }

        i {
          font-size: 5rem;
        }
      }
    }

    &.small {
      height: 35px;
      width: 70px;
      border-left: 4px solid ${color.white};
      border-right: 4px solid ${color.white};
      position: absolute;
      top: 65px;
      right: 0;
      left: 265px;
      margin: auto;

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
        padding-top: 5px;

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

        i {
          font-size: 2.6rem;
        }
      }
    }
  }
`;

export const List = styled.ul`
  font-size: 1.8rem;
  color: ${color.white};
  text-align: left;
  display: inline-block;
  list-style: none;
  padding: 0;

  li {
    margin: 5px;
    position: relative;
    padding-left: 40px;

    strong {
      margin-right: 10px;
      font-size: 2rem;
    }

    &::before {
      content: '';
      display: block;
      width: 12px;
      height: 13px;
      background-color: ${color.white};
      clip-path: polygon(0 30%, 50% 0, 100% 30%, 100% 70%, 50% 100%, 0 70%);
      position: absolute;
      left: 0;
      top: 6px;
    }
  }
`;