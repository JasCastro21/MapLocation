import React from 'react';
import Icon1 from '../../images/svg-1.png';
import Icon2 from '../../images/svg-2.png';
import Icon3 from '../../images/svg-3.png';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer>
      {/* Título dos serviços */}
      <ServicesH1>Nossos Serviços</ServicesH1>
      
      <ServicesWrapper>
        {/* Card do serviço 1 */}
        <ServicesCard>
          {/* Ícone do serviço 1 */}
          <ServicesIcon src={Icon1} />
          {/* Título do serviço 1 */}
          <ServicesH2>Pesquisas Ilimitadas</ServicesH2>
          {/* Descrição do serviço 1 */}
          <ServicesP>Nosso site oferece acesso gratuito e ilimitado a informações de localização.</ServicesP>   
        </ServicesCard>
        
        {/* Card do serviço 2 */}
        <ServicesCard>
          {/* Ícone do serviço 2 */}
          <ServicesIcon src={Icon2} />
          {/* Título do serviço 2 */}
          <ServicesH2>Melhor Planejamento</ServicesH2>
          {/* Descrição do serviço 2 */}
          <ServicesP>Nossa plataforma oferece visualização de Duração de Viagem e Quilometragem.</ServicesP>   
        </ServicesCard>
        
        {/* Card do serviço 3 */}
        <ServicesCard>
          {/* Ícone do serviço 3 */}
          <ServicesIcon src={Icon3} />
          {/* Título do serviço 3 */}
          <ServicesH2>Interface intuitiva</ServicesH2>
          {/* Descrição do serviço 3 */}
          <ServicesP>Aproveite nossa interface intuitiva. Navegação fácil, sem complicações.</ServicesP>   
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
