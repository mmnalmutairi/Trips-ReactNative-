import React from "react";
import { observer } from "mobx-react";
import { ListWrapper, TripDetailsStyle } from "./styles";

// ****************** STORES IMPORT ******************
import tripStore from "../../stores/tripStore";

// ****************** COMPONENTS******************
import TripItem from "./TripItem";
import { ScrollView, StatusBar, StyleSheet, Dimensions } from "react-native";
import { ExploreBackground } from "../../styles";
const { width, height } = Dimensions.get("window");

const TripList = ({ navigation }) => {
  //   const scrollX = React.useRef(new Animated.Value(0)).current;

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
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <ExploreBackground
      source={{
        uri: "https://www.teahub.io/photos/full/1-11199_cute-backgrounds-for-iphone-rose-gold-iphone-backgrounds.jpg",
      }}
    >
      <ScrollView style={styles.scrollView}>
        <ListWrapper>{tripList}</ListWrapper>
      </ScrollView>
    </ExploreBackground>
  );
};

export default observer(TripList);
