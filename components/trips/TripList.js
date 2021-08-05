import React from "react";
import { observer } from "mobx-react";
import { ListWrapper, TripDetailsStyle } from "./styles";

// ****************** STORES IMPORT ******************
import tripStore from "../../stores/tripStore";

// ****************** COMPONENTS******************
import TripItem from "./TripItem";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import authStore from "../../stores/authStore";
import * as Animatable from "react-native-animatable";

const TripList = ({ navigation }) => {
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

  const tripListFiltered = tripStore.trips.filter(
    (trip) => trip.userId !== authStore.user.id
  );

  const tripList = tripListFiltered.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <Animatable.View
      animation="fadeInUpBig"
      style={{ backgroundColor: "#fcd5ce" }}
    >
      <ScrollView style={styles.scrollView}>
        <ListWrapper>{tripList}</ListWrapper>
      </ScrollView>
    </Animatable.View>
  );
};

export default observer(TripList);
