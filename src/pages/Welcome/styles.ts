import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.backgroundTypes.water};
  `}
`;

export const Content = styled.View`
  height: 70%;
  justify-content: center;
  align-items: center;
`;

export const WrapperAnimation = styled.View`
  ${({ theme }) => css`
    width: 200px;
    height: 300px;
    background-color: ${theme.types.water};
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    transform: rotate(30deg);
  `}
`;

export const WrapperImage = styled.View`
  transform: rotate(-30deg);
`;

export const Bottom = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 30%;
    background: ${theme.colors.backgroundWhite};
    opacity: 0.9;
    padding: 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 40px;
    color: ${theme.colors.textWhite};
    margin-top: 20px;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    margin-top: 20px;
    font-size: 16px;
    color: ${theme.colors.textWhite};
  `}
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    border-radius: 70px;
    background: ${theme.types.water};
    justify-content: center;
    align-items: center;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.backgroundWhite};
  `}
`;
