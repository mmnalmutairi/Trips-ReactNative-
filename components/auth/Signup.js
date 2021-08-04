import React, { useState } from "react";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

import { AuthButton, AuthText, SignupTextInput } from "./styles";
import { View } from "react-native";
import { ExploreBackground } from "../../styles";

const SPACING = 10;

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleSubmit = async () => {
    await authStore.signup(user, navigation);
    navigation.navigate("Signin");
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
          <AuthText>Sign up</AuthText>
          <SignupTextInput
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={(username) => setUser({ ...user, username })}
          />
          <SignupTextInput
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />
          <AuthButton onPress={handleSubmit}>
            <AuthText>Sign up</AuthText>
          </AuthButton>
        </View>
      </View>
    </ExploreBackground>
  );
};

export default observer(Signup);
