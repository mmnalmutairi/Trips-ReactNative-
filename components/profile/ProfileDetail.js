import React, { useEffect } from "react";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import { ExploreBackground } from "../../styles";
import { TouchableOpacity, Image } from "react-native";
import ProfileTripList from "./ProfileTripList";
import { Feather } from "@expo/vector-icons";
const SPACING = 10;

const ProfileDetail = () => {
  const trips = tripStore.trips
    .filter((trip) => trip.userId === authStore.user?.id)
    .map((trip) => trip);

  const handlePress = () => {
    if (authStore.user)
      navigation.navigate("ProfileItem", {
        checkId: authStore.user?.id,
      });
    else {
      Alert.alert("Sign in", "Sign in to access checkout", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Signin", onPress: () => navigation.navigate("Signin") },
      ]);
    }
  };

  return (
    <ExploreBackground
      source={{
        uri: "https://www.teahub.io/photos/full/1-11199_cute-backgrounds-for-iphone-rose-gold-iphone-backgrounds.jpg",
      }}
    >
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{
            uri: "https://thebakersnest.in/wp-content/uploads/2019/10/img_234957.png",
          }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 20,
            marginLeft: 200,
            marginTop: 100,
          }}
        />
      </TouchableOpacity>
      <ProfileTripList />
    </ExploreBackground>
  );
};

export default observer(ProfileDetail);
