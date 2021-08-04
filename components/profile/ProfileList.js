import React from "react";
import { View, ScrollView } from "react-native";
import { observer } from "mobx-react";
import ProfileItem from "./ProfileItem";
import ProfileTripList from "./ProfileTripList";
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import { ListWrapper } from "../trips/styles";
import { ExploreBackground } from "../../styles";

const ProfileList = ({ route, navigation }) => {
  const { checkId } = route.params;
  if (authStore.loading)
    return <TripDetailsStyle> Loading... </TripDetailsStyle>;
  const { profile } = route.params;

  // **************************** FIND PROFILE OF THE USER BY USER ID ********************************
  const userList = checkId
    ? profileStore.profiles
        .filter((user) => user.userId === checkId)
        .map((user) => user)
        .map((user) => (
          <ProfileItem user={user} key={user.id} profile={profile.userId} />
        ))
    : profileStore.profiles
        .filter((user) => user.userId === profile.id)
        .map((user) => user)
        .map((user) => (
          <ProfileItem user={user} key={user.id} profile={profile.userId} />
        ));

  // **************************** FIND TRIPS RELATED TO USER ITSELF ********************************
  const findTrips = tripStore.trips
    .filter((trip) => trip.userId === profile.userId)
    .map((trip) => (
      <ProfileTripList item={trip} key={trip.id} navigation={navigation} />
    ));
  return (
    <ExploreBackground
      source={{
        uri: "https://www.teahub.io/photos/full/1-11199_cute-backgrounds-for-iphone-rose-gold-iphone-backgrounds.jpg",
      }}
    >
      <View>{userList}</View>
      <ScrollView>
        <ListWrapper>{findTrips}</ListWrapper>
      </ScrollView>
    </ExploreBackground>
  );
};

export default observer(ProfileList);
