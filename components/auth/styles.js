import styled from "styled-components/native";

export const AuthContainer = styled.View`
  padding-top: 180px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const AuthText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  align-items: center;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: center;
  height: 50px;
  margin-bottom: 30px;
  color: black;
  border-bottom-color: #fcd5ce;
  border-bottom-width: 2px;
`;

export const AuthButton = styled.TouchableOpacity`
  background-color: #fcd5ce;
  height: 60px;
  margin-horizontal: 50px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  margin-vertical: 5px;
  padding-right: 70px;
  padding-left: 70px;
`;

export const SignoutButton = styled.TouchableOpacity`
  align-self: stretch;
  padding: 10px;
  margin-top: 10px;
`;

export const SignupTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: black;
  border-bottom-color: #fcd5ce;
  border-bottom-width: 2px;
`;
