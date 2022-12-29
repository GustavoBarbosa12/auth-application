import styled from "styled-components";

export const Container = styled.div`
    background-image: linear-gradient(#405f80, grey);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormContainer = styled.div`
    width: 60vw;
    min-height: calc(100vh - 50px -20px);
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: rgb(210,210,210,0.5);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;

    @media screen and (max-width: 480px){
        width: 100vw;
    }
`;

export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-size: 25px;
    color: white;
    font-weight: bold;
`;

export const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: normal;
    margin-top: 10px;
    color: white;

    input {
        background-color: rgb(255,255,255,0.5);
        border: none;
        outline: none;
        font-size: 20px;
        margin-bottom: 20px;
        padding: 5px 20px;
        border-radius: 5px;
        margin-top: 5px;

        @media screen and (max-width: 360px){
            padding: 5px 5px;
        }

        @media screen and (max-width: 480px){
            padding: 5px 30px;
        }

        @media screen and (max-width: 280px){
            padding: 0;
        }
    }
`;

export const SignInButton = styled.div`
    padding: 10px 50px;
    color: white;
    background-color: rgb(50,50,50,0.6);
    border-radius: 10px;
    cursor: pointer;
    width: fit-content;
    margin-bottom: -20px;
`;
