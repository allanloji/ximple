import styled from "styled-components/native";

export const Container = styled.Pressable<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "#1676f3" : "#8ebcf7")};
  width: 100%;
  height: 43px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 12px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: semibold;
  color: #fff;
  font-family: "PlusJakartaSans-SemiBold";
`;
