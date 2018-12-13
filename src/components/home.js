import React, { Component } from 'react';

//Styles
import {HomeContainer, SeptagonButton, TitleContainer} from '../styles/home';
import {Nav, Menu, SocialMedia, Hamburger, NavContainer} from '../styles/navigation';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      navOpen: false,
      sticky: false,
    }

    this.openMenu = this.openMenu.bind(this);
    this.scrollMenu = this.scrollMenu.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > window.innerHeight - 70) {
        this.setState({sticky: true})
      } else {
        this.setState({sticky: false})
      }
    })
  }

  openMenu(e) {
    e.preventDefault();
    this.setState({navOpen: !this.state.navOpen});
  }

  scrollMenu(e, id) {
    e.preventDefault();

    const elTop = document.querySelector(`#${id}`).offsetTop - 40;

    window.scroll({top: elTop, behavior: 'smooth'});
    this.setState({navOpen: false});
  }

  render() {
    return (
      <HomeContainer id="home">
        <Hamburger>
          <a href="#" onClick={this.openMenu}>
            <span>
              <i className={this.state.navOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </span>
          </a>
        </Hamburger>
        <TitleContainer>
          <h1>Łukasz Krawczyk Software Development</h1>
        </TitleContainer>
        <SeptagonButton>
          <a href="#" onClick={e => this.scrollMenu(e, 'about')}>
            <span>
              <span>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <g>
                    <path strokeWidth="4" d="M20 25, L47 40, L75 25" className="arrow-1" />
                    <path strokeWidth="4" d="M27 29, L47 40, L66 29" className="arrow-2" />
                    <path strokeWidth="4" d="M34 33, L47 40, L60 33" className="arrow-3" />
                  </g>
                </svg>
              </span>
            </span>
          </a>
        </SeptagonButton>
        <NavContainer open={this.state.navOpen} sticky={this.state.sticky ? 1 : 0}>
          <Nav sticky={this.state.sticky ? 1 : 0}>
            <Menu sticky={this.state.sticky ? 1 : 0}>
              <li><a href="#" onClick={e => this.scrollMenu(e, 'home')}>Home</a></li>
              <li><a href="#" onClick={e => this.scrollMenu(e, 'about')}>About</a></li>
              <li><a href="#" onClick={e => this.scrollMenu(e, 'skills')}>Technologies</a></li>
              <li><a href="#" onClick={e => this.scrollMenu(e, 'works')}>Works</a></li>
              <li><a href="#" onClick={e => this.scrollMenu(e, 'contact')}>Contact</a></li>
            </Menu>
            <SocialMedia>
              <li className="facebook"><a href="https://www.facebook.com/profile.php?id=100001301830530"><i className="fab fa-facebook-f"></i></a></li>
              <li className="linkedin"><a href="https://www.linkedin.com/in/%C5%82ukasz-krawczyk-247379111/"><i className="fab fa-linkedin-in"></i></a></li>
              <li className="twitter"><a href="https://twitter.com/luki88kr"><i className="fab fa-twitter"></i></a></li>
              <li className="github"><a href="https://github.com/wookashart"><i className="fab fa-github"></i></a></li>
            </SocialMedia>
          </Nav>
        </NavContainer>
      </HomeContainer>
    );
  }
}

export default Home;