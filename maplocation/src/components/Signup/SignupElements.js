import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Estiliza o container do formulário de cadastro
export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    );
`;

// Estiliza o wrapper do formulário de cadastro
export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        height: 80%;
    }
`;

// Estiliza o ícone do formulário de cadastro
export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

// Estiliza o conteúdo do formulário de cadastro
export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 16px;  
    }
`;

// Estiliza o formulário de cadastro
export const Form = styled.form`
    background: #010101;
    max-width: 380px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 480px) {
        padding: 32px 32px;  
    }
`;

// Estiliza o título do formulário de cadastro
export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

// Estiliza as etiquetas do formulário de cadastro
export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

// Estiliza as entradas de texto do formulário de cadastro
export const FormInput = styled.input`
    padding: 10px 10px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

// Estiliza o botão de envio do formulário de cadastro
export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

// Estiliza o texto de link do formulário de cadastro
export const Text = styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline;
`;
