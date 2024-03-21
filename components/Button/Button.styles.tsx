import styled from "styled-components/native";

export const Button = styled.Pressable`
  height: 56px;
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? "#8ebcf7" : "#1676f3")};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: semibold;
  font-family: "PlusJakartaSans-SemiBold";
`;
