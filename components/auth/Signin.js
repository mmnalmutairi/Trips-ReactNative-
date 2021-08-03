import React from "react";
import { observer } from "mobx-react";
import { useState } from "react";
import { AuthButton, AuthContainer, AuthText, AuthTextInput } from "./styles";
import authStore from "../../stores/authStore";
import { Image, View, Dimensions, StyleSheet } from "react-native";
import { ExploreBackground } from "../../styles";
const { width, height } = Dimensions.get("screen");

const SPACING = 10;

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
    <ExploreBackground
      source={{
        uri: "https://www.teahub.io/photos/full/1-11199_cute-backgrounds-for-iphone-rose-gold-iphone-backgrounds.jpg",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 250,
        }}
      >
        <View
          style={{
            marginHorizontal: SPACING,
            marginVertical: SPACING,
            padding: SPACING * 2,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: 20,
            paddingTop: 100,
          }}
        >
          {/* <Image
            source={{
              uri: "https://www.teahub.io/photos/full/1-11199_cute-backgrounds-for-iphone-rose-gold-iphone-backgrounds.jpg",
            }}
            style={{ flex: 1, height: null, width: null }}
          /> */}
          <AuthText>Sign in</AuthText>
          <AuthTextInput
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={(username) => setUser({ ...user, username })}
          />
          <AuthTextInput
            placeholder="Password"
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
      </View>
    </ExploreBackground>
  );
};

export default observer(Signin);
