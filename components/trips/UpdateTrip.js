import React from "react";
import { observer } from "mobx-react";
import { useState } from "react";
import { TripTitle, TripTextInput, TripButtonText, TripButton } from "./styles";
import tripStore from "../../stores/tripStore";
import { ExploreBackground } from "../../styles";
import { View } from "react-native";
const UpdateTrip = ({ navigation, route }) => {
  const oldTrip = route.params.trip;

  const [trip, setTrip] = useState({
    id: oldTrip.id,
    title: oldTrip.title,
    description: oldTrip.description,
    image: oldTrip.image,
  });

  const handleSubmit = async () => {
    await tripStore.updateTrip(trip);
    navigation.replace("TripList");
  };

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
          paddingTop: 250,
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
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
        <TripButton onPress={handleSubmit}>
          <TripButtonText>Update Trip</TripButtonText>
        </TripButton>
      </View>
    </ExploreBackground>
  );
};

export default observer(UpdateTrip);
