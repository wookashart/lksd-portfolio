import styled, {injectGlobal} from 'styled-components';
import color from './core/colors';
import breakpoint from './core/breakpoints';

export const FooterContainer = styled.div`
  background-color: ${color.redBase};
  text-align: center;
  padding: 20px;

  p {
    margin: 0;
    font-size: 1.4rem;
    text-transform: uppercase;

    > a {
      color: ${color.grayDark};
      font-weight: 700;
      margin-left: 5px;
    }
  }
`;