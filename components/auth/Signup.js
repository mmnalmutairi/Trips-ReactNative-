import React, { useState } from "react";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleSubmit = async () => {
    await authStore.signup(user, navigation);
    navigation.navigate("TripList");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome !</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>USERNAME</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#f5cac3" size={20} />
          <TextInput
            placeholder="Your Username..."
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(username) => setUser({ ...user, username })}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>PASSWORD</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#f5cac3" size={20} />
          <TextInput
            placeholder="Your Password..."
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />
        </View>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.textSign}>Sign Up</Text>
          </View>
        </TouchableOpacity>
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
    flex: 2,
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
    marginTop: 50,
    backgroundColor: "#f5cac3",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default observer(Signup);
