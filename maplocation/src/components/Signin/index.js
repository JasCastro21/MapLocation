import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to="/">MapLocation</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Faça Login na sua conta </FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continuar</FormButton>
                    <Text>Esqueceu sua senha ?</Text>
                    <Text to="/signup">Cadastre-se</Text>    
                </Form>
            </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
