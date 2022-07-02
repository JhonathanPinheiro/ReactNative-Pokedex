import styled, { css } from "styled-components/native";

type PokemonType = {
  type: string;
};

export const Container = styled.TouchableOpacity<PokemonType>`
  ${({ theme, type }) => css`
    background-color: ${theme.backgroundTypes[type]};
    border-radius: 10px;
    margin-top: 30px;
    flex-direction: row;
    padding: 20px;
  `}
`;

export const LeftSide = styled.View`
  width: 50%;
  position: relative;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 12px;
    color: ${theme.colors.lightText};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    margin-top: 5px;
    text-transform: capitalize;
    color: ${theme.colors.textWhite};
  `}
`;

export const ImageCardDetailLeftSide = styled.Image`
  ${({ theme }) => css`
    position: absolute;
    width: 74px;
    height: 32px;
    left: 90px;
    top: -10px;
  `}
`;

export const PokemonContentType = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View<PokemonType>`
  ${({ theme, type }) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    border-radius: 3px;
    margin-left: 5px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.types[type]};
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.textWhite};
    text-transform: capitalize;
  `}
`;

export const RightSide = styled.View`
  position: relative;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const PokemonImage = styled.Image`
  width: 130px;
  height: 130px;
  margin-top: -40px;
`;

export const PokeballDetail = styled.Image`
  position: absolute;
  right: -20px;
  top: -20px;
`;
