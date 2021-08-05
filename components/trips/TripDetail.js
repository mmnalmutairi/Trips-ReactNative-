import React from "react";
import { View, Image, StyleSheet, StatusBar, Text } from "react-native";
import { TripDetailsStyle, TripDescriptionStyle } from "./styles";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";
import * as Animatable from "react-native-animatable";

const SPACING = 10;
const TripDetail = ({ route }) => {
  const { trip } = route.params;
  if (tripStore.isLoading)
    return <TripDetailsStyle>Loading... </TripDetailsStyle>;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>
          <TripDetailsStyle>{trip.title}</TripDetailsStyle>
        </Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Image
          source={{ uri: trip.image }}
          style={{
            width: 380,
            height: 260,
            borderRadius: 20,
            paddingLeft: 150,
          }}
        />

        <TripDescriptionStyle>{trip.description}</TripDescriptionStyle>
      </Animatable.View>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5cac3",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});

export default observer(TripDetail);
