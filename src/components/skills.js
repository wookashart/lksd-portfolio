import React, { Component } from 'react';

//Styles
import {SkillsContainer, SkillsHeader, SkillsHexagon, SkillsMaxWidth, SkillsHexagonsBox, SkillsTextBox, List} from '../styles/skills';

class Skills extends Component {
  render() {
    return (
      <SkillsContainer id="skills">
        <SkillsHeader>
          <SkillsHexagon>
            <h2>The technologies I use</h2>
          </SkillsHexagon>
        </SkillsHeader>
        <SkillsMaxWidth>
          <SkillsTextBox right>
            <div>
              <h2>Front-End Development</h2>
              <h4>Web development</h4>
              <p>By profession, I am a front-end developer, and  I mainly deal with the visual aspect of websites. In order to achieve the best effect in my work, I constantly develop skills with given technologies:</p>
              <List>
                <li><strong>Basics:</strong>HTML5, CSS3, SASS, JavaScript, jQuery</li>
                <li><strong>Frameworks:</strong>React.js</li>
                <li><strong>Animations:</strong>SVG, Canvas, CSS3</li>
                <li><strong>CMS:</strong>Webshop, Adobe Experience Manager (AEM), Wordpress, Blogger</li>
              </List>
            </div>
            <SkillsHexagonsBox>
              <div className="big"><span><i className="fab fa-react"></i></span></div>
              <div className="large"><span><i className="fab fa-node-js"></i></span></div>
              <div className="medium"><span><i className="fab fa-css3-alt"></i></span></div>
              <div className="small"><span><i className="fab fa-html5"></i></span></div>
            </SkillsHexagonsBox>
          </SkillsTextBox>
          <SkillsTextBox>
            <SkillsHexagonsBox>
              <div className="big"><span><i className="fab fa-node"></i></span></div>
              <div className="large"><span><i className="fab fa-wordpress"></i></span></div>
              <div className="medium"><span><i className="fab fa-npm"></i></span></div>
              <div className="small"><span><i className="fab fa-php"></i></span></div>
            </SkillsHexagonsBox>
            <div>
              <h2>Back-End Development</h2>
              <h4>Functionality behind the scenes</h4>
              <p>Every good front-end developer should at least be familiar with the technologies used in the back-end. That's why I'm trying to develop skills in this area above the basic level. That is why I mastered at the basic level to the intermediate level such technologies as:</p>
              <List>
                <li><strong>Back-End programming languages:</strong>Node.js, Express, PHP</li>
                <li><strong>Databases:</strong>MySQL, Firebase</li>
                <li>Configure hosting and domains</li>
              </List>
            </div>
          </SkillsTextBox>
        </SkillsMaxWidth>
      </SkillsContainer>
    );
  }
}

export default Skills;