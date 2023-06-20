import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements';

const SignIn = () => {
  const [email, setEmail] = useState(''); // Estado para armazenar o valor do campo de email
  const [password, setPassword] = useState(''); // Estado para armazenar o valor do campo de senha

  const history = useHistory(); // Objeto de histórico de navegação para redirecionar o usuário

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:3002/usuarios'); // Faz uma chamada assíncrona para obter os usuários da API
      const data = response.data;

      // Verifica se o email e a senha fornecidos correspondem a algum usuário válido
      const isUserValid = data.some(user => user.email === email && user.password === password);

      if (isUserValid) {
        history.push('/map'); // Redireciona para a página do mapa se o usuário for válido
      } else {
        console.log('Credenciais inválidas'); // Exibe uma mensagem de credenciais inválidas no console
      }
    } catch (error) {
      console.error(error); // Exibe erros no console caso ocorram
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MapLocation</Icon> {/* Ícone para voltar para a página inicial */}
          <FormContent>
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1>Faça Login na sua conta</FormH1> {/* Título do formulário */}
              <FormLabel htmlFor='for'>Email</FormLabel> {/* Rótulo do campo de email */}
              <FormInput type='email' required onChange={e => setEmail(e.target.value)} /> {/* Campo de entrada de email */}
              <FormLabel htmlFor='for'>Password</FormLabel> {/* Rótulo do campo de senha */}
              <FormInput type='password' required onChange={e => setPassword(e.target.value)} /> {/* Campo de entrada de senha */}
              <FormButton type='submit'>Continuar</FormButton> {/* Botão para enviar o formulário */}
              <Text>Esqueceu sua senha?</Text> {/* Texto opcional para recuperar senha */}
              <Text to="/signup">Cadastre-se</Text> {/* Texto com link para a página de cadastro */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
