import styled from "styled-components";
import { Link } from 'react-router-dom';

// Importa a biblioteca 'styled-components' para criar estilos personalizados
// Importa o componente 'Link' da biblioteca 'react-router-dom' para criar links no React

export const FooterContainer = styled.footer`
    background-color: #101522;
`;
// Define um componente estilizado 'FooterContainer' que define a cor de fundo do rodapé como '#101522'

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;
// Define um componente estilizado 'FooterWrap' que define o estilo do contêiner interno do rodapé, incluindo preenchimento, alinhamento e largura máxima

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;
// Define um componente estilizado 'FooterLinksContainer' que define o estilo do contêiner dos links do rodapé, incluindo alinhamento horizontal e espaçamento superior em telas menores

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;
// Define um componente estilizado 'FooterLinksWrapper' que define o estilo do contêiner dos itens dos links do rodapé, incluindo alinhamento dos itens horizontalmente e alteração para coluna em telas menores

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;
// Define um componente estilizado 'FooterLinkItems' que define o estilo dos itens dos links do rodapé, incluindo alinhamento dos itens à esquerda, margem, largura e cor do texto

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;
// Define um componente estilizado 'FooterLinkTitle' que define o estilo do título dos links do rodapé, incluindo tamanho da fonte e margem inferior

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;
// Define um componente estilizado 'FooterLink' que define o estilo dos links do rodapé, incluindo cor, decoração de texto e transição de cor ao passar o mouse

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;
// Define um componente estilizado 'SocialMedia' que define o estilo da seção de mídia social, incluindo largura máxima e largura

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;
// Define um componente estilizado 'SocialMediaWrap' que define o estilo do contêiner da mídia social, incluindo alinhamento dos itens e alteração para coluna em telas menores

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;
// Define um componente estilizado 'SocialLogo' que define o estilo do logotipo da mídia social, incluindo cor, alinhamento, cursor, tamanho da fonte, exibição, alinhamento vertical e peso da fonte

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;
// Define um componente estilizado 'WebsiteRights' que define o estilo dos direitos do website, incluindo cor e margem inferior

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    margin-top: 16px;
    margin-bottom: 16px;
`;
// Define um componente estilizado 'SocialIcons' que define o estilo dos ícones de mídia social, incluindo alinhamento, largura e margem

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;
// Define um componente estilizado 'SocialIconLink' que define o estilo dos links dos ícones de mídia social, incluindo cor e tamanho da fonte
