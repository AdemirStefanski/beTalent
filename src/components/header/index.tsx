import React from 'react';
import { HeaderContainer, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src="/assets/logos/BeTalent2.png" alt="BeTalent Logo" />      
    </HeaderContainer>
  );
};

export default Header;