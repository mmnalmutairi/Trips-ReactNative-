import styled from "styled-components/native";

export const ProfileTitle = styled.Text`
  color: #9d8189;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  border-bottom-color: #9d8189;
`;

export const ProfileTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #9d8189;
  border-bottom-color: #9d8189;
  border-bottom-width: 3px;
`;

export const ProfileButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f4acb7;
  margin-top: 30px;
`;

export const ProfileButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const ProfileDetailsStyle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #1d3557;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
`;

export const ProfileDescriptionStyle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  right: 10px;
  bottom: 5px;
`;

export const BioText = styled.Text`
  font-size: 20px;
  color: #1d3557;
`;
