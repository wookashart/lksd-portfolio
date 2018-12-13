import styled, {injectGlobal} from 'styled-components';
import color from './core/colors';
import breakpoint from './core/breakpoints';

export const ContactContainer = styled.div`
  background-color: ${color.grayLighter};
  padding-bottom: 50px;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;

  @media screen and (min-width: ${breakpoint.mobile}px) {
    flex-flow: row;
  }

  > div {
    margin: 20px;
    flex: 1;
  }
`;

export const Address = styled.div`
  p {
    margin: 5px 0;
    text-align: center;
    color: ${color.grayDark};

    @media screen and (min-width: ${breakpoint.mobile}px) {
      text-align: right;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-flow: row;
  font-size: 1.8rem;
  justify-content: center;

  @media screen and (min-width: ${breakpoint.mobile}px) {
    justify-content: flex-start;
  }

  div {
    &:nth-of-type(1) {
      background-color: ${color.grayLighter2};
      width: 30px;
      height: 15px;
      position: relative;
      margin: 15px 0;

      &::before {
        content: '';
        display: inline-block;
        border-bottom: 10px solid ${color.grayLighter2};
        border-right: 15px solid transparent;
        border-left: 15px solid transparent;
        position: absolute;
        top: -10px;
        left: 0;
      }
  
      &::after {
        content: '';
        display: inline-block;
        border-top: 10px solid ${color.grayLighter2};
        border-right: 15px solid transparent;
        border-left: 15px solid transparent;
        position: absolute;
        bottom: -10px;
        left: 0;
      }

      i {
        display: block;
        font-size: 1.6rem;
        text-align: center;
        color: ${color.grayBase};
      }
    }

    &:nth-of-type(2) {
      display: flex;
      align-items: center;
      margin-left: 10px;
      width: 150px;
    }
  }
`;