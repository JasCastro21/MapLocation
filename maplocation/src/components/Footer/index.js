import React from 'react';

// Importação dos elementos do estilo do rodapé
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

// Importação dos ícones das redes sociais
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Importação da função de rolagem suave
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

  // Função para rolar suavemente para o topo da página
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre nós</FooterLinkTitle>
              <FooterLink to='/'>Como funciona</FooterLink>
              <FooterLink to='/'>Testemunhas</FooterLink>
              <FooterLink to='/'>Nossa história</FooterLink>
              <FooterLink to='/'>Investidores</FooterLink>
              <FooterLink to='/'>Termos de serviços</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/'>Tutorial</FooterLink>
              <FooterLink to='/'>Apresentação</FooterLink>
              <FooterLink to='/'>Agência</FooterLink>
              <FooterLink to='/'>Parcerias</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contatos</FooterLinkTitle>
              <FooterLink to='/'>Contato</FooterLink>
              <FooterLink to='/'>Suporte</FooterLink>
              <FooterLink to='/'>Endereço</FooterLink>
              <FooterLink to='/'>CNPJ</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Redes Sociais</FooterLinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>YouTube</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>MapLocation</SocialLogo>
            <WebsiteRights>
              MapLocation © {new Date().getFullYear()} Todos os serviços reservados.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
