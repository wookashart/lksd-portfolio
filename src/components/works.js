import React, { Component, Fragment } from 'react';

//Styles
import {Container, Box, Button} from '../styles/works';

class Works extends Component {
  render() {
    return (
      <Fragment>
        <Container id="works">
          <Box>
            <img src="/public/img/works/centercar-page.jpg" />
            <div>
              <h3>CenterCar</h3>
              <h5>What I did?</h5>
              <p>Creation of the entire page layout and styles along with all subpages in accordance with the provided project. Website built on Webshop.</p>
              <p>Website prepared as part of the work for <a href="https://www.asco.com.pl/" target="_blank">ASCO Systemy Informatyczne</a></p>
              <Button href="https://www.centercar.pl" target="_blank">Visit Page</Button>
            </div>
          </Box>
          <Box>
            <img src="/public/img/works/motoexpert-page.jpg" />
            <div>
              <h3>motoExpert</h3>
              <h5>What I did?</h5>
              <p>Creation of the entire page layout and styles along with all subpages in accordance with the provided project. Website built on Webshop.</p>
              <p>Website prepared as part of the work for <a href="https://www.asco.com.pl/" target="_blank">ASCO Systemy Informatyczne</a></p>
              <Button href="https://www.motoexpertsklep.pl" target="_blank">Visit Page</Button>
            </div>
          </Box>
          <Box>
            <img src="/public/img/works/moje-gry.jpg" />
            <div>
              <h3>Moje Gry</h3>
              <h5>What I did?</h5>
              <p>Non-commercial project. This is my own project created in my free time. On this page I have prepared everything literally. Site construction made in React.js, page style created using Styled Components. Back end created in Node.js with the MySQL database.</p>
              <Button href="http://games.wookashart.usermd.net" target="_blank">Visit Page</Button>
            </div>
          </Box>
          <Box>
            <img src="/public/img/works/kreacja-bogactwa.jpg" />
            <div>
              <h3>Kreacja Bogactwa</h3>
              <h5>What I did?</h5>
              <p>Preparation of the appearance and functionality and configuration of the blog on the blogger portal.</p>
              <Button href="https://kreacjabogactwa.blogspot.com" target="_blank">Visit Page</Button>
            </div>
          </Box>
        </Container>
        <Container>
          <Box>
            <img src="/public/img/works/colgateprofessional.jpg" />
            <div>
              <h3>Colgate Professional</h3>
              <h5>What I did?</h5>
              <p>Preparation of the appearance and functionality of individual page elements based on the project in psd. Creation of validation of the registration form and update profile adapted to different locations and their various requirements. Website build on Adobe Experience Manager.</p>
              <p>Website prepared as part of the work for <a href="https://www.vml.com/poland/" target="_blank">VMLY&R</a></p>
              <Button href="https://colgateprofessional.com" target="_blank">Visit Page</Button>
            </div>
          </Box>
          <Box>
            <img src="/public/img/works/sanex.jpg" />
            <div>
              <h3>Sanex</h3>
              <h5>What I did?</h5>
              <p>Preparation of the appearance and functionality of individual page elements based on the project in psd. Build carousels on homepage and build footer section. Website build on Adobe Experience Manager.</p>
              <p>Website prepared as part of the work for <a href="https://www.vml.com/poland/" target="_blank">VMLY&R</a></p>
              <Button href="https://www.sanex.co.uk" target="_blank">Visit Page</Button>
            </div>
          </Box>
          <Box>
            <img src="/public/img/works/palmolive.jpg" />
            <div>
              <h3>Palmolive</h3>
              <h5>What I did?</h5>
              <p>Preparation of the appearance and functionality of individual page elements based on the project in psd. Build footer section and some other elements on page. Website build on Adobe Experience Manager.</p>
              <p>Website prepared as part of the work for <a href="https://www.vml.com/poland/" target="_blank">VMLY&R</a></p>
              <Button href="https://www.palmolive.co.uk" target="_blank">Visit Page</Button>
            </div>
          </Box>
          <Box>
            <img src="/public/img/works/meridol.jpg" />
            <div>
              <h3>Meridol</h3>
              <h5>What I did?</h5>
              <p>Preparation of the whole page with subpages from scratch based on the provided project in psd.</p>
              <p>Website prepared as part of the work for <a href="https://www.vml.com/poland/" target="_blank">VMLY&R</a></p>
              <Button href="https://www.accueil.meridol.fr" target="_blank">Visit Page</Button>
            </div>
          </Box>
        </Container>
      </Fragment>
    );
  }
}

export default Works;