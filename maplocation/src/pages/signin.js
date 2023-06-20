import React from 'react'
import SignIn from '../components/Signin'
import ScrollToTop from '../components/ScrollToTop'

const SigninPage = () => {
  return (
    <>
      {/* Componente ScrollToTop para rolar a página para o topo */}
      <ScrollToTop/>
      {/* Componente SignIn para exibir o formulário de login */}
      <SignIn />
    </>
  )
}

export default SigninPage
