import React from "react";
import { observer } from "mobx-react";
import ProfileItem from "./ProfileItem";
import ProfileTripList from "./ProfileTripList";
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";
import { ListWrapper } from "../trips/styles";
import { ExploreBackground } from "../../styles";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
const ProfileList = ({ route, navigation }) => {
  const { checkId } = route.params;
  if (authStore.loading)
    return <TripDetailsStyle> Loading... </TripDetailsStyle>;
  const { profile } = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: "transparent",
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });
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
      <ScrollView style={styles.scrollView}>
        <ListWrapper>{userList}</ListWrapper>
      </ScrollView>
      <ScrollView style={styles.scrollView}>
        <ListWrapper>{findTrips}</ListWrapper>
      </ScrollView>
    </ExploreBackground>
  );
};

export default observer(ProfileList);
