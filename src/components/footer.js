import React, { Component } from 'react';

//Styles
import {FooterContainer} from '../styles/footer';

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <p>Page made with love by <a href="/">Łukasz Krawczyk Software Development</a></p>
        <p>Home background photo by
          <a href="https://unsplash.com/photos/qjIJqoO7kvI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Ash Edmonds</a> on
          <a href="https://unsplash.com/search/photos/computer-dark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
        </p>
        <p>About Me background photo by 
          <a href="https://unsplash.com/photos/2xU7rYxsTiM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Sergi Kabrera</a> on 
          <a href="https://unsplash.com/search/photos/computer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>
      </FooterContainer>
    );
  }
}

export default Footer;