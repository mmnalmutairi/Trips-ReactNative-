import React from "react";
import { useNavigation } from "@react-navigation/native"; // unused import, remove it
import { observer } from "mobx-react";
import { Entypo } from "@expo/vector-icons";
// remove this commented line
// import { Alert } from "react-native";

const AddTrip = () => {
  // Remove these commented lines
  // const navigation = useNavigation();
  // }
  return (
    <>
      <Entypo
        name="add-to-list"
        size={24}
        color="black"
        style={{ paddingRight: 15 }}
      />
    </>
  );
};

export default observer(AddTrip);
