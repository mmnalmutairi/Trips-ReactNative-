import React from "react";
import { observer } from "mobx-react";
import { ListWrapper, TripDetailsStyle } from "./styles";

// ****************** STORES IMPORT ******************
import tripStore from "../../stores/tripStore";

// ****************** COMPONENTS ******************
import TripItem from "./TripItem";

const TripList = ({ navigation }) => {
  if (tripStore.isLoading)
    return <TripDetailsStyle> Loading... </TripDetailsStyle>;
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return <ListWrapper>{tripList}</ListWrapper>;
};

export default observer(TripList);
