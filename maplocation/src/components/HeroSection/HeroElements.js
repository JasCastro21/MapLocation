import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

// Importa a biblioteca 'styled-components' para criar estilos personalizados
// Importa os ícones 'MdArrowForward' e 'MdKeyboardArrowRight' da biblioteca 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`;
// Define um componente estilizado 'HeroContainer' que define o estilo do contêiner principal do herói
// Define o plano de fundo como '#0c0c0c', centraliza o conteúdo vertical e horizontalmente
// Define o preenchimento, a altura como 800px, a posição como 'relative' e o índice Z como 1

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
// Define um componente estilizado 'HeroBg' que define o estilo do plano de fundo do herói
// Define a posição como 'absolute' e o tamanho como 100% da largura e altura disponíveis
// Define 'overflow: hidden' para esconder qualquer conteúdo que ultrapasse os limites

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;
// Define um componente estilizado 'VideoBg' que define o estilo do vídeo de fundo do herói
// Define a largura e altura como 100% e 'object-fit: cover' para ajustar o vídeo ao contêiner
// Define 'background: #232a34' como cor de fundo caso o vídeo não esteja disponível ou carregando

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
// Define um componente estilizado 'HeroContent' que define o estilo do conteúdo do herói
// Define 'z-index: 3' para garantir que o conteúdo esteja acima do plano de fundo
// Define a largura máxima como 1200px, posição como 'absolute' e preenchimento interno
// Define a exibição como 'flex', a direção como coluna e alinhamento centralizado dos itens

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;
// Define um componente estilizado 'HeroH1' que define o estilo do título do herói
// Define a cor do texto como branco (#fff), tamanho da fonte como 48px e alinhamento centralizado
// Define consultas de mídia para ajustar o tamanho da fonte em diferentes tamanhos de tela

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;
// Define um componente estilizado 'HeroP' que define o estilo do texto do herói
// Define a margem superior como 24px, a cor do texto como branco (#fff)
// Define o tamanho da fonte como 24px, alinhamento centralizado e largura máxima de 600px
// Utiliza consultas de mídia para ajustar o tamanho da fonte em diferentes tamanhos de tela

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
// Define um componente estilizado 'HeroBtnWrapper' que define o estilo do contêiner do botão do herói
// Define a margem superior como 32px, exibição flexível com direção de coluna e alinhamento centralizado dos itens

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;
// Define um componente estilizado 'ArrowForward' que estiliza o ícone de seta para a frente
// Utiliza o ícone 'MdArrowForward' da biblioteca 'react-icons/md'
// Define uma margem à esquerda de 8px e tamanho da fonte de 20px

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;
// Define um componente estilizado 'ArrowRight' que estiliza o ícone de seta para a direita
// Utiliza o ícone 'MdKeyboardArrowRight' da biblioteca 'react-icons/md'
// Define uma margem à esquerda de 8px e tamanho da fonte de 20px
