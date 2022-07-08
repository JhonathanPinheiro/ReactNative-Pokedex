import React, { useEffect } from "react";
import { View, Text, ViewProps, useWindowDimensions } from "react-native";

import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import * as S from "./style";

type FadeAnimation = {
  children: React.ReactNode;
} & ViewProps;

export default function FadeAnimation({ children, ...rest }: FadeAnimation) {
  const { width: displayWidth } = useWindowDimensions();

  const cardOpacity = useSharedValue(0);
  const cardOfset = useSharedValue(0.25 * displayWidth);

  const animatedStyle = useAnimatedStyle(() => {
    "worklet";
    return {
      opacity: cardOpacity.value,
      transform: [
        {
          translateX: cardOfset.value,
        },
      ],
    };
  });

  useEffect(() => {
    cardOpacity.value = withTiming(1, { duration: 1000 });
    cardOfset.value = withTiming(0, { duration: 1000 });
  }, []);
  return (
    <S.AnimationContainer {...rest} style={animatedStyle}>
      {children}
    </S.AnimationContainer>
  );
}
