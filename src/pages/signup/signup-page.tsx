import * as S from './signup-page-styles';


export const SignupPage = () => {
    return (
        <S.Container>
            <S.Title>SignUp</S.Title>
            <S.FormContainer>
            <S.InputLabel>
                Name:
                <input></input>
            </S.InputLabel>
            <S.InputLabel>
                User:
                <input></input>
            </S.InputLabel>
            <S.InputLabel>
                E-mail:
                <input></input>
            </S.InputLabel>
            <S.InputLabel>
                Github:
                <input></input>
            </S.InputLabel>
            <S.InputLabel>
                Password:
                <input type="password"></input>
            </S.InputLabel>
            <S.InputLabel>
                Repeat Password:
                <input type="password"></input>
            </S.InputLabel>
            <S.SignInButton>
                SignUp
            </S.SignInButton>
            </S.FormContainer>
        </S.Container>
    )
}