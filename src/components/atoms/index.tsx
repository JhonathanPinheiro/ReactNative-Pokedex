import React from "react";
import { TouchableOpacityProps } from "react-native";

type Props = {
  title: string;
} & TouchableOpacityProps;

import * as S from "./style";
export function Button({ title }: Props) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
