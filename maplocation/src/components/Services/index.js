import React from 'react'
import Icon1 from '../../images/svg-1.png'
import Icon2 from '../../images/svg-2.png'
import Icon3 from '../../images/svg-3.png'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Nossos Serviços</ServicesH1>
      <ServicesWrapper>

        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Pesquisas Ilimitadas</ServicesH2>
            <ServicesP>Nosso site oferece acesso gratuito e ilimitado a informações de localização.</ServicesP>   
        </ServicesCard>

        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Melhor Planejamento</ServicesH2>
            <ServicesP>Nossa plataforma oferece visualização de Duração de Viagem e Quilometragem</ServicesP>   
        </ServicesCard>

        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Interface intuitiva</ServicesH2>
            <ServicesP>Aproveite nossa interface intuitiva. Navegação fácil, sem complicações.</ServicesP>   
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
