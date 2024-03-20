import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  padding-horizontal: 15px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const SubtitleContainer = styled.View`
  width: 254px;
`;

export const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: regular;
  color: #7a7a7a;
`;

export const KeyboardDismiss = styled.Pressable`
  height: 100%;
  width: 100%;
`;
