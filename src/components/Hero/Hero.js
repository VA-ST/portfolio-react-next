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
        Soy un desarrollador Front-end. Tengo una gran pasión por los efectos de interfaz de usuario, las animaciones y la creación de experiencias de usuario. Si desea mas información el boton redirecciona a mi antiguo portfolio.
        </SectionText>
        <Button onClick={props.handleClick}>Leer Mas</Button>
      </LeftSection>
    </Section>
);

export default Hero;