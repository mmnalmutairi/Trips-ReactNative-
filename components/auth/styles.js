import styled from "styled-components/native";

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: black;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  background-color: #ffcad4;
  height: 60px;
  margin-horizontal: 50px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  margin-vertical: 5px;
`;

export const SignoutButton = styled.TouchableOpacity`
  align-self: stretch;
  padding: 10px;
  margin-top: 10px;
`;
