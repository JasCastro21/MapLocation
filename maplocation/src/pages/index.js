import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
  // Define o estado isOpen como falso utilizando o useState
  const [isOpen, setIsOpen] = useState(false);

  // Função toggle que inverte o valor do estado isOpen
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Renderiza o componente Sidebar e passa isOpen e toggle como propriedades */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/* Renderiza o componente Navbar e passa toggle como propriedade */}
      <Navbar toggle={toggle} />
      {/* Renderiza o componente HeroSection */}
      <HeroSection />
      {/* Renderiza o componente InfoSection e passa as propriedades do objeto homeObjOne */}
      <InfoSection {...homeObjOne} />
      {/* Renderiza o componente InfoSection e passa as propriedades do objeto homeObjTwo */}
      <InfoSection {...homeObjTwo} />
      {/* Renderiza o componente Services */}
      <Services />
      {/* Renderiza o componente InfoSection e passa as propriedades do objeto homeObjThree */}
      <InfoSection {...homeObjThree} />
      {/* Renderiza o componente Footer */}
      <Footer/>
    </>
  );
};

export default Home;
