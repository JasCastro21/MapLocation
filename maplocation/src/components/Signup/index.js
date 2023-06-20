import React, { useState } from 'react';
import axios from 'axios';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SignupElements';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    if (email !== confirmEmail) {
      alert('Os campos de email não correspondem.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Os campos de senha não correspondem.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:3002/usuarios');

      if (!response.data || !Array.isArray(response.data)) {
        console.error('Unexpected response from server:', response.data);
        return;
      }

      const userExists = response.data.some(user => user.email === email);

      if (userExists) {
        alert('Este email já está registrado.');
        return;
      }

      const newUser = {
        email,
        password,
      };

      const responsePost = await axios.post('http://localhost:3002/usuarios', newUser);
      console.log(responsePost.data);

      setEmail('');
      setConfirmEmail('');
      setPassword('');
      setConfirmPassword('');

    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MapLocation</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1>Faça o Cadastro da sua conta </FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required onChange={e => setEmail(e.target.value)} value={email} />
              <FormLabel htmlFor='for'>Confirmar Email</FormLabel>
              <FormInput type='email' required onChange={e => setConfirmEmail(e.target.value)} value={confirmEmail} />
              <FormLabel htmlFor='for'>Senha</FormLabel>
              <FormInput type='password' required onChange={e => setPassword(e.target.value)} value={password} />
              <FormLabel htmlFor='for'>Confirmar Senha</FormLabel>
              <FormInput type='password' required onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />
              <FormButton type='submit'>Cadastre-se</FormButton>
              <Text to="/signin">Login</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
