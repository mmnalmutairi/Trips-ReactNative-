import React from "react";

// ****************** STYLES ******************
import { View, Dimensions, Image } from "react-native";
import { TripTextStyled } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const { width, height } = Dimensions.get("window");
const SPACING = 10;
const ITEM_SIZE = width * 0.72;

const TripItem = ({ trip, navigation }) => {
  return (
    <View style={{ width: ITEM_SIZE }}>
      <View
        style={{
          marginHorizontal: SPACING,
          marginVertical: SPACING,
          padding: SPACING * 2,
          alignItems: "center",
          backgroundColor: "#fcd5ce",
          paddingBottom: 30,
          borderRadius: 20,
        }}
      >
        <Image
          source={{ uri: trip.image }}
          style={{ width: 230, height: 250, borderRadius: 20 }}
        />
        <TripTextStyled
          onPress={() => navigation.navigate("TripDetail", { trip: trip })}
        >
          {trip.title}
        </TripTextStyled>
        {authStore.user.id !== trip.userId && (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MaterialCommunityIcons
              name="delete-empty-outline"
              size={30}
              color="black"
              onPress={() => tripStore.deleteTrip(trip.id)}
            />
            <MaterialIcons
              name="update"
              size={30}
              color="black"
              onPress={() => navigation.navigate("UpdateTrip", { trip: trip })}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default TripItem;
