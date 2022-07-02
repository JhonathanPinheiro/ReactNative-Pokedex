import React from "react";
import { useNavigation } from "@react-navigation/native";

import AnimatedLottieView from "lottie-react-native";

import pokemonAnimation from "./pokemon.json";

import * as S from "./styles";

export function Welcome() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  function handleNavigateToHome() {
    navigate("Home");
  }
  return (
    <S.Container>
      <S.Content>
        <S.WrapperAnimation>
          <S.WrapperImage>
            <AnimatedLottieView
              style={{ width: 200 }}
              autoPlay
              source={pokemonAnimation}
              loop
            />
          </S.WrapperImage>
        </S.WrapperAnimation>
        <S.Title>Bem Vindo</S.Title>
        <S.SubTitle>Encontre todos os pokémons em um só lugar</S.SubTitle>
      </S.Content>
      <S.Bottom>
        <S.Button onPress={handleNavigateToHome}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
      </S.Bottom>
    </S.Container>
  );
}
