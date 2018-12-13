import React, { Component } from 'react';

//Styles
import {ContactContainer, ContactInfoContainer, Info, Address} from '../styles/contact';
import {SkillsHeader, SkillsHexagon} from '../styles/skills';

class Contact extends Component {
  render() {
    return (
      <ContactContainer id="contact">
        <SkillsHeader>
          <SkillsHexagon light>
            <h2>Get in Touch</h2>
          </SkillsHexagon>
        </SkillsHeader>
        <ContactInfoContainer>
          <Address>
            <p>Łukasz Krawczyk Software Development</p>
            <p>ul. Grodzka 42/1</p>
            <p>31-044 Kraków</p>
            <p>NIP: 6762292398</p>
            <p>REGON: 369002119</p>
          </Address>
          <div>
            <Info>
              <div><i className="far fa-envelope"></i></div>
              <div><a href="mailto:lukasz.krawczyk@lksd.pl">lukasz.krawczyk@lksd.pl</a></div>
            </Info>
            <Info>
              <div><i className="fas fa-mobile-alt"></i></div>
              <div>+48 515 598 375</div>
          </Info>
          </div>
        </ContactInfoContainer>
      </ContactContainer>
    );
  }
}

export default Contact;