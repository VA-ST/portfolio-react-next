import React from 'react';
import { DiCss3Full, DiReact} from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tecnologías</SectionTitle>
    <SectionText>
      He trabajado con una variedad de tecnologías en el mundo del desarrollo web.
      Desde Diseño hasta el Front-end
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiencia en <br />
            HTML, CSS, Javascript, React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3Full size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Framework</ListTitle>
          <ListParagraph>
            Experiencia en <br />
            Sass, Bootstrap, Tailwind. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FiFigma size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Diseño</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            Herramientas como Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
