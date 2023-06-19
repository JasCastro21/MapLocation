import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SignupElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to="/">MapLocation</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Faça o Cadastro da sua conta </FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Confirmar Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Senha</FormLabel>
                    <FormInput type='password' required />
                    <FormLabel htmlFor='for'>Confirmar Senha</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Cadastre-se</FormButton>
                    <Text to="/signin">Login</Text>    
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn