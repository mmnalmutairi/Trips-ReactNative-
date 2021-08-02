import React from "react";
import { observer } from "mobx-react";
import { useState } from "react";
import { AuthButton, AuthContainer, AuthText, AuthTextInput } from "./styles";
import authStore from "../../stores/authStore";
import { Image, View, Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen");

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace("TripList");
  };

  return (
    <AuthContainer>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "flex-end",
        }}
      >
        {/* <View style={{ ...StyleSheet.absoluteFill }}> */}
        <Image
          source={{
            uri: "https://www.teahub.io/photos/full/1-11199_cute-backgrounds-for-iphone-rose-gold-iphone-backgrounds.jpg",
          }}
          style={{ flex: 1, height: null, width: null }}
        />
        {/* <View style={{ height: height / 3, backgroundColor: "white" }}> */}
        <AuthText>Sign in</AuthText>
        <AuthTextInput
          placeholder="username"
          autoCapitalize="none"
          onChangeText={(username) => setUser({ ...user, username })}
        />
        <AuthTextInput
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <AuthButton onPress={handleSubmit}>
          <AuthText>Sign in</AuthText>
        </AuthButton>
        <AuthButton
          name="user"
          size={24}
          onPress={() => navigation.replace("Signup")}
        >
          <AuthText>Sign Up</AuthText>
        </AuthButton>
      </View>
      {/* </View> */}
      {/* </View> */}
    </AuthContainer>
  );
};

export default observer(Signin);
