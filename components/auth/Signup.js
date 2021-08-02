import React from "react";
import { observer } from "mobx-react";
import { useState } from "react";
import { AuthButton, AuthContainer, AuthText, SignupTextInput } from "./styles";
import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.replace("Home");
  };

  return (
    <AuthContainer>
      <AuthText>Sign up</AuthText>
      <SignupTextInput
        placeholder="username"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <SignupTextInput
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthText>Sign up</AuthText>
      </AuthButton>
    </AuthContainer>
  );
};

export default observer(Signup);
