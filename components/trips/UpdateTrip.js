import React from "react";
import { observer } from "mobx-react";
import { useState } from "react";
import {
  TripTitle,
  TripContainer,
  TripTextInput,
  TripButtonText,
  TripButton,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import tripStore from "../../stores/tripStore";

const UpdateTrip = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleSubmit = async () => {
    await tripStore.updateTrip(trip);
    navigation.replace("TripList");
  };

  return (
    <TripContainer>
      <TripTitle>Update Trip</TripTitle>
      <TripTextInput
        placeholder="title"
        autoCapitalize="none"
        onChangeText={(event) => setTrip({ ...trip, title: event })}
      />
      <TripTextInput
        placeholder="description"
        autoCapitalize="none"
        onChangeText={(event) => setTrip({ ...trip, description: event })}
      />
      <TripTextInput
        placeholder="Browse an image"
        onChangeText={(event) => setTrip({ ...trip, image: event })}
      />
      {/* <Button title="Select Photo" onPress={openPicker} /> */}
      <TripButton onPress={handleSubmit}>
        <TripButtonText>Update Trip</TripButtonText>
      </TripButton>
      <Ionicons
        name="arrow-back-circle-outline"
        size={24}
        color="black"
        onPress={() => navigation.navigate("TripList")}
      />
      {/* <AuthOther>Go Back To Trip List</AuthOther> */}
    </TripContainer>
  );
};

export default observer(UpdateTrip);
