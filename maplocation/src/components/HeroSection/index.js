import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBG, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward,ArrowRight  } from './HeroElements';
import { Button } from '../ButtonElement';
import { MdArrowForward } from 'react-icons/md';
import { MdArrowRight } from 'react-icons/md';


const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  } 

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg> 
        <HeroContent>
            <HeroH1>Se localizar nunca foi tão fácil!</HeroH1>
            <HeroP>
            Com nossa tecnologia avançada e interface amigável, explorar e encontrar seu caminho nunca foi mais intuitivo.
            Junte-se a nós e descubra um mundo de possibilidades na ponta dos seus dedos!
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup'
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                    Começar! {hover ? <MdArrowForward/> : <MdArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero
