import React from "react";
import tripStore from "../../../stores/tripStore";
import authStore from "../../../stores/authStore";
import MyTripItem from "../../trips/TripItem";
import { useNavigation } from "@react-navigation/native";
import { ListWrapper } from "../../trips/styles";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const MahaProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../../../assets/AlaaIcon.jpg")}
          style={styles.logo}
          resizeMode={"stretch"}
        />
        <Text style={[styles.text_header, { paddingTop: 15 }]}>
          {" "}
          Maha Almutairi{" "}
        </Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Bio</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#f5cac3" size={20} />
          <Text> </Text>
          <Text style={styles.bio}>
            A computer engineer graduated from
            <Text style={styles.biohighlight}> Kuwait University</Text>,
            currently a Master's degree student at
            <Text style={styles.biohighlight}> Kuwait University, Kuwait</Text>.
            Interested in web development, AI, ML, freelancing and photography.
          </Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.button}>
            <Image
              source={require("../../../assets/0dZ5vb.jpeg")}
              style={styles.imageinList}
              resizeMode={"stretch"}
            />
            <Text style={styles.textSign}>The Caribbean Islands</Text>
          </View>
          <View style={styles.button}>
            <Image
              source={require("../../../assets/497880.jpeg")}
              style={styles.imageinList}
              resizeMode={"stretch"}
            />
            <Text style={styles.textSign}>The GreenLand</Text>
          </View>
          <View style={styles.button}>
            <Image
              source={require("../../../assets/Phuket-Thailand-Wallpaper-hd-13.jpeg")}
              style={styles.imageinList}
              resizeMode={"stretch"}
            />
            <Text style={styles.textSign}>Phuket</Text>
          </View>
          <View style={styles.button}>
            <Image
              source={require("../../../assets/wp1842994.jpeg")}
              style={styles.imageinList}
              resizeMode={"stretch"}
            />
            <Text style={styles.textSign}>Cape Town</Text>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.3 * 0.4;

var styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#f5cac3",
  },
  header: {
    flex: 1.5,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 150,
    alignItems: "center",
  },
  footer: {
    flex: 3.5,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text_header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#f5cac3",
    fontSize: 18,
    fontWeight: "700",
  },
  action: {
    flexDirection: "row",
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#f5cac3",
  },
  button: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#f5cac3",
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  bio: {
    paddingLeft: 3,
    fontWeight: "500",
    color: "gray",
    paddingRight: 7,
    paddingBottom: 10,
  },

  biohighlight: {
    fontWeight: "bold",
    color: "black",
  },

  scrollView: {
    backgroundColor: "transparent",
    marginHorizontal: 20,
  },
  imageinList: {
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 35,
  },
});

export default MahaProfile;
