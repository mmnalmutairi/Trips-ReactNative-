import React from "react";
import { useNavigation } from "@react-navigation/native";
import tripStore from "../../stores/tripStore";
import TripItem from "../trips/TripItem";
import { ListWrapper } from "../trips/styles";

const ProfileTripList = ({ userId }) => {
  const navigation = useNavigation();

  const trips = tripStore.trips
    .filter((trip) => trip.userId === userId)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return <ListWrapper>{trips}</ListWrapper>;
};

export default ProfileTripList;
