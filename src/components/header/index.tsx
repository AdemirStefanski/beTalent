import React from 'react';
import { HeaderContainer, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src="/assets/logos/Logo.png" alt="BeTalent Logo" />      
    </HeaderContainer>
  );
};

export default Header;