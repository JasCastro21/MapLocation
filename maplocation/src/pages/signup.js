import React from 'react'
import SignUp from "../components/Signup"
import ScrollToTop from '../components/ScrollToTop'

const SigninPage = () => {
  return (
    <>
      {/* Componente ScrollToTop para rolar a página para o topo */}
      <ScrollToTop/>
      {/* Componente SignUp para exibir o formulário de cadastro */}
      <SignUp />
    </>
  )
}

export default SigninPage
