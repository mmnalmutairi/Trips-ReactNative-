import React from "react";
import { useNavigation } from "@react-navigation/native";
import tripStore from "../../stores/tripStore";
import TripItem from "../trips/TripItem";
import { ListWrapper } from "../trips/styles";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
const ProfileTripList = ({ userId }) => {
  const navigation = useNavigation();
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

  if (tripStore.isLoading)
    return <TripDetailsStyle> Loading... </TripDetailsStyle>;
  const trips = tripStore.trips
    .filter((trip) => trip.userId === userId)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return (
    <ScrollView style={styles.scrollView}>
      <ListWrapper>{trips}</ListWrapper>
    </ScrollView>
  );
};

export default ProfileTripList;
