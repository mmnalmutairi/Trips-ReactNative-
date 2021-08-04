import React from "react";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import authStore from "../../stores/authStore";
import { SignoutButton } from "./styles";

const Signout = () => {
  const navigation = useNavigation();

  const handlePress = async () => {
    await authStore.signout();
    navigation.goBack("Home");
  };
  return (
    <SignoutButton onPress={handlePress}>
      <AntDesign name="logout" size={24} color="black" />
    </SignoutButton>
  );
};

export default Signout;
