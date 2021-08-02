import React from "react";

// ****************** STYLES ******************
import { Image } from "react-native";
import { TripItemStyled, TripItemStyle } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import tripStore from "../../stores/tripStore";

const TripItem = ({ trip, navigation }) => {
  return (
    <TripItemStyle>
      <Image source={{ uri: trip.image }} style={{ width: 100, height: 100 }} />
      <TripItemStyled
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
      >
        {trip.title}
      </TripItemStyled>
      <MaterialCommunityIcons
        name="delete-empty-outline"
        size={24}
        color="black"
        onPress={() => tripStore.deleteTrip(trip.id)}
      />
      <MaterialIcons
        name="update"
        size={24}
        color="black"
        onPress={() => navigation.navigate("UpdateTrip")}
      />
    </TripItemStyle>
  );
};

export default TripItem;
