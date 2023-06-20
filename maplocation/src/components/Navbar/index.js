import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  // Função para alterar a aparência da barra de navegação ao rolar a página
  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    // Adiciona o event listener ao carregar o componente
    window.addEventListener('scroll', changeNav);
    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  // Função para rolar para o topo da página quando o logo é clicado
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* Barra de navegação */}
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            {/* Logo */}
            <NavLogo to='/' onClick={toggleHome}>MapLocation</NavLogo>
            {/* Ícone do menu para dispositivos móveis */}
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            {/* Menu de navegação */}
            <NavMenu>
              {/* Itens do menu */}
              <NavItem>
                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sobre</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Descubra</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Serviços</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Cadastro</NavLinks>
              </NavItem>
            </NavMenu>
            {/* Botão de login */}
            <NavBtn>
              <NavBtnLink to="/signin" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Login</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
