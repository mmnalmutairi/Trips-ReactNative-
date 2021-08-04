import React from "react";
import { useNavigation } from "@react-navigation/native";
//stores
import authStore from "../../../stores/authStore";
//styles
import { EditBtn } from "../../styles";
const EditProfileButton = ({ user, profile }) => {
  const navigation = useNavigation();
  return (
    <EditBtn
      name="edit"
      size={23}
      onPress={() =>
        navigation.navigate("ProfileEdit", {
          user: user,
          profile: profile,
          checkId: authStore.user?.id,
        })
      }
    />
  );
};

export default EditProfileButton;
