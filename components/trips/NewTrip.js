import React, { useState } from "react";
import { observer } from "mobx-react";
import tripStore from "../../stores/tripStore";
import { useNavigation } from "@react-navigation/native";

import {
  TripTitle,
  TripContainer,
  TripTextInput,
  TripButtonText,
  TripButton,
} from "./styles";

const NewTrip = () => {
  const navigation = useNavigation();
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleSubmit = async () => {
    await tripStore.createTrip(trip);
    navigation.replace("TripList");
  };

  return (
    <TripContainer>
      <TripTitle>Your Next Trip</TripTitle>
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
      <TripButton onPress={handleSubmit}>
        <TripButtonText>Add The Trip</TripButtonText>
      </TripButton>
    </TripContainer>
  );
};

export default observer(NewTrip);
