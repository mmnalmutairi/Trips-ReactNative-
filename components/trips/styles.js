import styled from "styled-components/native";

export const ListWrapper = styled.View`
  margin-top: 10%;
`;

export const TripDetailsStyle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #84a59d;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
`;

// Please rename to TripDescription, it's more descriptive that way.
// You only need to type it once. Actually, not even once.
// Copy the name I wrote in this comment hehe 😁.
export const TripDesStyle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

// This component and the one below it are extremely confusing
// Give them better names so it's clearer which one is which.
export const TripItemStyled = styled.Text`
  color: #b5838d;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const TripItemStyle = styled.View`
  width: 70%;
  align-items: center;
  justify-content: center;
`;
