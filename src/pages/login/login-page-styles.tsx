import styled from "styled-components";
import mountain from '../../assets/mountains.jpg';

export const Background = styled.div`
    background-image: url(${mountain}) ;
    background-size: cover;
    height: 100vh;
`;

export const Container = styled.div`
    background-color: rgb(10,10,10,0.4);
    height: 100vh;
`;

export const Header = styled.div`
    background-color: rgb(60,60,60,0.5);
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.div`
    padding: 5px;
    color: white;
    font-size: 20px;
`;

export const SignUp = styled.div`
    padding: 10px 15px;
    color: white;
    background-color: rgb(50,50,50,0.6);
    border-radius: 10px;
    cursor: pointer;
`;

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20vh;
    @media screen and (max-width: 480px){
        padding: 20vh 0px;
    }
`;
export const Title = styled.div`

    font-size: 40px;
    font-weight: bold;
    color: white;

    div {
        font-size: 20px;
    }

    @media screen and (max-width: 480px){
        display: none;
    }
`;
export const LogInContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(80,80,80,0.7);
    border-radius: 10px;
    padding: 50px;
    color: white;
`;

export const LogInTitle = styled.div`
    font-size: 25px;
    color: white;
    margin-bottom: 30px;
    text-decoration: underline;
`;

export const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: normal;

    input {
        background-color: rgb(255,255,255,0.5);
        border: none;
        outline: none;
        font-size: 20px;
        margin-bottom: 20px;
        padding: 5px 20px;
        border-radius: 5px;

        @media screen and (max-width: 360px){
            padding: 5px 5px;
        }

        @media screen and (max-width: 480px){
            padding: 5px 30px;
        }
    }
`;

export const SignInButton = styled.div`
    padding: 10px 20px;
    color: white;
    background-color: rgb(50,50,50,0.6);
    border-radius: 10px;
    cursor: pointer;
    width: fit-content;
    margin-top: 20px;
    margin-bottom: -20px;
`;

