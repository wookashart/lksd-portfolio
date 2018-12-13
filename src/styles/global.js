import styled, {injectGlobal} from 'styled-components';
import color from './core/colors';
import breakpoint from './core/breakpoints';

injectGlobal`
* {
  box-sizing: border-box;
}

html, body {
  padding: 0;
  margin: 0;
  font-size: 10px;
  font-family: 'Roboto Condensed', sans-serif;
}

a {
  color: ${color.black};
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

h1 {
  font-size: 2.6rem;
  color: ${color.white};
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7), 2px 2px 5px rgba(0, 0, 0, 0.8), 3px 3px 10px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: ${breakpoint.mobile}px) {
    font-size: 4rem;
  }

  @media screen and (min-width: ${breakpoint.desktop}px) {
    font-size: 5rem;
  }
}

h2 {
  font-size: 4rem;
  color: ${color.redBase};
  // text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7), 2px 2px 5px rgba(0, 0, 0, 0.8), 3px 3px 10px rgba(0, 0, 0, 0.2);
  font-weight: 400;
}

h3 {
  font-size: 1.8rem;
  color: ${color.white};
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8), 3px 3px 10px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: ${breakpoint.mobile}px) {
    font-size: 2.6rem;
  }

  @media screen and (min-width: ${breakpoint.desktop}px) {
    font-size: 3rem;
  }
}

h4 {
  font-size: 2.6rem;
  color: ${color.grayLight};
}

h5 {
  font-size: 2rem;
  color: ${color.white};
}

h6 {
  font-size: 1.8rem;
  color: ${color.white};
}

p {
  font-size: 1.8rem;
  color: ${color.grayLighter};
}
`;