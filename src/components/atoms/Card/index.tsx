import React from "react";
import { TouchableOpacityProps } from "react-native";
import dotsImage from "../../../assets/img/dots.png";
import pokeball from "../../../assets/img/pokeballCard.png";

import { Pokemon } from "../../../@types/pokemon";

import * as S from "./styles";

type Props = {
  data: Pokemon;
};

export function Card({ data }: Props) {
  return (
    <S.Container type={data.types[0].type.name}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageCardDetailLeftSide source={dotsImage} />
        <S.PokemonContentType>
          {data.types.map((pokemonType) => (
            <S.PokemonType
              key={pokemonType.type.name}
              type={pokemonType.type.name}
            >
              <S.PokemonTypeText>{pokemonType.type.name}</S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentType>
      </S.LeftSide>
      <S.RightSide>
        <S.PokeballDetail source={pokeball} />
        <S.PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          }}
        />
      </S.RightSide>
    </S.Container>
  );
}
