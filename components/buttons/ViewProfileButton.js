import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewProfile = ({ userId }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // console.log(" I'm in here");
    navigation.navigate("ProfileDetail", { userId });
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
