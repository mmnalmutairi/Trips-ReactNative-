import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import authStore from "../../stores/authStore";

const ViewProfile = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (authStore.user.username === "Maha") {
      navigation.navigate("MahaProfile");
    } else if (authStore.user.username === "Taiba") {
      navigation.navigate("TaibaProfile");
    } else if (authStore.user.username === "Alaa") {
      navigation.navigate("AlaaProfile");
    }
  };

  return (
    <>
      <MaterialCommunityIcons
        name="face-profile"
        size={24}
        color="black"
        style={{ paddingRight: 15 }}
        onPress={handlePress}
      />
    </>
  );
};

export default ViewProfile;
