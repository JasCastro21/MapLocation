import React from 'react';
import { Button } from '../ButtonElements';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column1,
  Column2,
  ImgWrap,
  Img
} from './InfoElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headline,
  lightText,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2
}) => {
  return (
    <div>
      {/* Contêiner da seção de informações */}
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          {/* Wrapper da seção de informações */}
          <InfoRow imgStart={imgStart}>
            {/* Linha da seção de informações */}
            <Column1>
              {/* Coluna 1 */}
              <TextWrapper>
                {/* Wrapper do texto */}
                <TopLine>{topLine}</TopLine>
                {/* Linha superior */}
                <Heading lightText={lightText}>{headline}</Heading>
                {/* Título */}
                <Subtitle darkText={darkText}>{description}</Subtitle>
                {/* Subtítulo */}
                <BtnWrap>
                  {/* Wrapper do botão */}
                  <Button
                    to="/"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {/* Botão */}
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              {/* Coluna 2 */}
              <ImgWrap>
                {/* Wrapper da imagem */}
                <Img src={img} alt={alt} />
                {/* Imagem */}
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
};

export default InfoSection;
