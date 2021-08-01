import React from "react";
import { View, Image } from "react-native";
import { TripDetailsStyle, TripDesStyle } from "./styles";

import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";

const TripDetail = ({ route }) => {
  const { trip } = route.params;
  if (tripStore.isLoading)
    return <TripDetailsStyle>Loading... </TripDetailsStyle>;

  return (
    <View
      style={{ height: "80%", alignItems: "center", justifyContent: "center" }}
    >
      <TripDetailsStyle>{trip.title}</TripDetailsStyle>

      <Image source={{ uri: trip.image }} style={{ width: 200, height: 200 }} />

      <TripDesStyle>{trip.description}</TripDesStyle>
    </View>
  );
};

export default observer(TripDetail);
