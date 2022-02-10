import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenido a <br />
          Mi Portfolio Personal
        </SectionTitle>
        <SectionText>
        Soy Santiago Alaña un desarrollador Front-end. Tengo una gran pasión por los efectos de interfaz de usuario, las animaciones y la creación de experiencias de usuario.
        </SectionText>
        <Button onClick={()=>window.open('https://va-st.github.io/cv', '_blank', 'noreferrer')}>Ver CV</Button>
      </LeftSection>
    </Section>
);

export default Hero;