import React, { memo } from 'react';
import { HeaderContainer, Title } from './styles';

export const Header = memo(() => {
  return (
      <HeaderContainer>
         <Title>{'TODO'}</Title>
      </HeaderContainer>
  );
})
