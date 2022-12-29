import { useNavigate } from 'react-router-dom';
import * as S from './login-page-styles';
export const LoginPage = () => {
    const navigate = useNavigate();

    const signupHandle = () => {
        navigate('/signup');
    } 

    return(
        <S.Background>
            <S.Container>
                <S.Header>
                    <S.Logo>
                        AuthApp
                    </S.Logo>
                    <S.SignUp onClick={signupHandle}>
                        SignUp
                    </S.SignUp>
                </S.Header>
                <S.Body>
                    <S.Title>
                        Authenticate Application
                        <div>A React application with authentication</div>
                    </S.Title>
                    <S.LogInContainer>
                        <S.LogInTitle>
                            LogIn
                        </S.LogInTitle>
                        <S.InputLabel>
                            User:
                            <input></input>
                        </S.InputLabel>
                        <S.InputLabel>
                            Password:
                            <input type="password"></input>
                        </S.InputLabel>

                        <S.SignInButton>
                            SignIn
                        </S.SignInButton>
                    </S.LogInContainer>
                </S.Body>
            </S.Container>
        </S.Background>
    )
}