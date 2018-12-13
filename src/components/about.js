import React, { Component } from 'react';

//Styles
import {AboutContainer, TextBox, TextContentBox, HexagonSmall, HexagonBig, HexagonBox, ImgContainer, MeSvg, MeImage, RedFilter} from '../styles/about';

class About extends Component {
  constructor() {
    super();

    this.state = {
      scrolled: false,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > window.innerHeight / 2) {
        this.setState({scrolled: true})
      }
    })
  }

  render() {
    return (
      <AboutContainer id="about">
        <RedFilter>
          <h3>About Me</h3>
          <TextBox>
            <TextContentBox>
              <HexagonBox>
                <HexagonSmall><span></span></HexagonSmall>
                <HexagonBig>
                  <ImgContainer>
                    <MeSvg start={this.state.scrolled ? 1 : 0} width="192.3px" height="270px" viewBox="0 0 285 400">
                    <path strokeWidth="5" stroke="white" fill="transparent" d="M240 312 L197 300 L183 270 C183 270, 205 240, 205 210 C205 210, 206 205, 201 175 C201 175, 210 160, 205 140 L 200 125 C200 125, 190 75, 132 80 C132 80, 60 80, 65 175 C65 175, 60 175, 61 175 C61 175, 55 180, 62 210 C62 210, 61 225, 75 230 L82 265 L90 290 C90 290, 100 300, 120 330 C120 330, 150 350, 150 355 C155 355, 160 330, 180 325"></path>
                    </MeSvg>
                    <MeImage start={this.state.scrolled ? 1 : 0} src="/public/img/me.jpg" />
                  </ImgContainer>
                </HexagonBig>
                <HexagonSmall><span></span></HexagonSmall>
              </HexagonBox>
              <h2>Łukasz Krawczyk</h2>
              <h4>Front-End Developer</h4>
              <p>Always a smiling optimist is me. I started my adventure with creating websites at the end of 2016 and I fell in love with it immediately. Previously, I dealt with various other jobs, including even designing gardens (thanks to which I envolve a sense of aesthetic very useful when creating a website), but the programming is what I decided to do in my life.</p>
              <p>The pages prepared by me are characterized by a consistent and aesthetic appearance and a structured code. I prepare each page according to the motto "Write code as you would like to find it". I always put my whole heart into the work I do, that's why the customer receives only the highest quality product from me. Going with the times I am constantly up to date with the latest trends and technologies that the websites I make do not differ from the adopted standards in appearance and functionality.</p>
              <p>If you are interested, I encourage you to contact and cooperate.</p>
            </TextContentBox>
          </TextBox>
        </RedFilter>
      </AboutContainer>
    );
  }
}

export default About;