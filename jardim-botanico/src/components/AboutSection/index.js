import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutSection = () => (
  <AboutContainer>
    <div>
      <h2>Sobre o Jardim</h2>
      <p>Texto descritivo sobre a história, importância e características...</p>
    </div>
    <img 
      src="/Jardim-Botanico.jpg" 
      alt="Vista interna do jardim"
      style={{ borderRadius: '8px', maxWidth: '100%' }}
    />
  </AboutContainer>
);

export default AboutSection;