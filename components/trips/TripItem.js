import React from "react";

// ****************** STYLES ******************
import { View, Dimensions, Image, Text, StyleSheet } from "react-native";
import { TripTextStyled } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const { width, height } = Dimensions.get("window");
import * as Animatable from "react-native-animatable";

const SPACING = 10;
const ITEM_SIZE = width * 0.72;

const TripItem = ({ trip, navigation }) => {
  return (
    <Animatable.View animation="bounceIn" duration={1500}>
      <View style={{ width: ITEM_SIZE }}>
        <View
          style={{
            marginHorizontal: SPACING,
            marginVertical: SPACING,
            padding: SPACING * 2,
            alignItems: "center",
            backgroundColor: "white",
            paddingBottom: 30,
            borderRadius: 20,
          }}
        >
          <Image
            source={{ uri: trip.image }}
            style={{ width: 230, height: 250, borderRadius: 20 }}
          />
          <TripTextStyled
            onPress={() => navigation.navigate("TripDetail", { trip: trip })}
          >
            {trip.title}
          </TripTextStyled>
          {authStore.user.id === trip.userId && (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <MaterialCommunityIcons
                name="delete-empty-outline"
                size={30}
                color="black"
                onPress={() => tripStore.deleteTrip(trip.id)}
              />
              <MaterialIcons
                name="update"
                size={30}
                color="black"
                onPress={() =>
                  navigation.navigate("UpdateTrip", { trip: trip })
                }
              />
            </View>
          )}
          <Text style={styles.text}>
            Made by{" "}
            {trip.userId === 1 && (
              <Text
                style={styles.owner}
                onPress={() => navigation.navigate("MahaProfile")}
              >
                <Ionicons name="md-person-outline" size={15} color="gray" />
                Maha
              </Text>
            )}
            {trip.userId === 2 && (
              <Text
                style={styles.owner}
                onPress={() => navigation.navigate("AlaaProfile")}
              >
                <Ionicons name="md-person-outline" size={15} color="gray" />
                Alaa
              </Text>
            )}
            {trip.userId === 3 && (
              <Text
                style={styles.owner}
                onPress={() => navigation.navigate("TaibaProfile")}
              >
                <Ionicons name="md-person-outline" size={15} color="gray" />
                Taiba
              </Text>
            )}
          </Text>
        </View>
      </View>
    </Animatable.View>
  );
};
var styles = StyleSheet.create({
  text: {
    paddingTop: 10,
    paddingBottom: 0,
  },
  owner: {
    color: "gray",
    fontWeight: "bold",
  },
});
export default observer(TripItem);
