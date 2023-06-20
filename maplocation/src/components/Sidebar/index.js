import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {/* Ícone de fechar a barra lateral */}
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {/* Link para a seção 'about' */}
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          {/* Link para a seção 'discover' */}
          <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
          {/* Link para a seção 'services' */}
          <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
          {/* Link para a seção 'signup' */}
          <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
  
        <SideBtnWrap>
          {/* Botão de rota para a página de login */}
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
  
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
