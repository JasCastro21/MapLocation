import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import {HeroContainer, 
        HeroBg, 
        VideoBg, 
        HeroContent, 
        HeroH1, 
        HeroP, 
        HeroBtnWrapper, 
        ArrowForward, 
        ArrowRight} from './HeroElements'



const HeroSection = () => {
  const [hover, setHover] = useState(false)

  // Define o estado 'hover' para controlar se o botão está em estado de sobreposição (hover) ou não
  // Inicialmente, o estado é definido como 'false' (não está em hover)

  const onHover = () => {
    setHover(!hover)
  }

   // Define a função 'onHover' que é chamada quando ocorre um evento de hover no botão
   // Inverte o valor do estado 'hover' utilizando a função 'setHover'

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Se localizar nunca foi tão fácil!</HeroH1>
        <HeroP>
          Com nossa tecnologia avançada e interface amigável, explorar e encontrar seu caminho nunca foi mais intuitivo.
          Junte-se a nós e descubra um mundo de possibilidades na ponta dos seus dedos!
        </HeroP>

        <HeroBtnWrapper>
        <Button to='signup' onMouseEnter={onHover}
        onMouseLeave={onHover}
        primary="true"
        dark="true"
        smooth={true} 
        duration={500} 
        spy={true} 
        exact='true' 
        offset={-80}> 
        Começar! {hover ? <ArrowForward /> : <ArrowRight/>}
        </Button>

        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
