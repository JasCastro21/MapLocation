import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/usuarios', { email, password });
      console.log(response.data);
      history.push('/map');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MapLocation</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1>Faça Login na sua conta </FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required onChange={e => setEmail(e.target.value)} />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required onChange={e => setPassword(e.target.value)} />
              <FormButton type='submit'>Continuar</FormButton>
              <Text>Esqueceu sua senha ?</Text>
              <Text to="/signup">Cadastre-se</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
