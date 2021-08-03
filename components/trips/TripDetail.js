import React from "react";
import { View, Image } from "react-native";
import { TripDetailsStyle, TripDescriptionStyle } from "./styles";

import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";
import { ExploreBackground } from "../../styles";
const SPACING = 10;
const TripDetail = ({ route }) => {
  const { trip } = route.params;
  if (tripStore.isLoading)
    return <TripDetailsStyle>Loading... </TripDetailsStyle>;

  return (
    <ExploreBackground
      source={{
        uri: "https://www.teahub.io/photos/full/1-11199_cute-backgrounds-for-iphone-rose-gold-iphone-backgrounds.jpg",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 160,
        }}
      >
        <View
          style={{
            marginHorizontal: SPACING,
            marginVertical: SPACING,
            padding: SPACING * 2,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fcd5ce",
            borderRadius: 20,
            paddingTop: 50,
            paddingBottom: 50,
          }}
        >
          <TripDetailsStyle>{trip.title}</TripDetailsStyle>
          <Image
            source={{ uri: trip.image }}
            style={{ width: 300, height: 250, borderRadius: 20 }}
          />

          <TripDescriptionStyle>{trip.description}</TripDescriptionStyle>
        </View>
      </View>
    </ExploreBackground>
  );
};

export default observer(TripDetail);
