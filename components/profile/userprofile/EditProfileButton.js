import React from "react";
import { useNavigation } from "@react-navigation/native";
//stores
import authStore from "../../../stores/authStore";
//styles
import { AntDesign } from "@expo/vector-icons";
const EditProfileButton = ({ user, profile }) => {
  const navigation = useNavigation();
  return (
    <AntDesign
      name="edit"
      size={24}
      onPress={() =>
        navigation.navigate("ProfileEdit", { oldProfile: profile })
      }
    />
  );
};

export default EditProfileButton;
