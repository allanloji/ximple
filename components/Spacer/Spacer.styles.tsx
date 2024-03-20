import styled from "styled-components/native";

export const Container = styled.View<{ height: number }>`
  height: ${({ height }) => height}px;
`;
