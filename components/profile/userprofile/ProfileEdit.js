import React, { useState } from "react";
import profileStore from "../../../stores/profileStore";
import { observer } from "mobx-react";

// ******************* Styles *******************
import { ExploreBackground } from "../../../styles";
import {
  TripTitle,
  TripTextInput,
  TripButtonText,
  TripButton,
} from "../../trips/styles";

import { View } from "react-native";

const SPACING = 10;
// ************* PASS (USER , PROFILE , CHECKID) FROM EDITPROFILEBUTTON ***************
const ProfileEdit = ({ navigation }) => {
  // const { oldProfile } = route.params;
  const [profile, setProfile] = useState({
    id: "",
    name: "",
    bio: "",
    image: "",
  });

  // console.log(oldProfile);
  const handleSubmit = async () => {
    await profileStore.updateProfile(profile);
    // navigation.navigate("ProfileDetail", { userId: oldProfile.userId });
    navigation.goBack();
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
          paddingTop: 100,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <View
          style={{
            marginHorizontal: SPACING,
            marginVertical: SPACING,
            padding: SPACING * 2,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fae1dd",
            borderRadius: 20,
            paddingLeft: 60,
            paddingRight: 60,
            paddingTop: 80,
            paddingBottom: 100,
          }}
        >
          <TripTitle>Profile Edit</TripTitle>
          <TripTextInput
            placeholder="Enter Your name"
            autoCapitalize="none"
            onChangeText={(event) => setProfile({ ...profile, name: event })}
          />
          <TripTextInput
            placeholder="Write about yourself"
            autoCapitalize="none"
            onChangeText={(event) => setProfile({ ...profile, bio: event })}
          />
          <TripTextInput
            placeholder="Image Picker feature (UNDER CONSTRUCTION), for now paste the link"
            onChangeText={(event) => setProfile({ ...profile, image: event })}
          />
          <TripButton onPress={handleSubmit}>
            <TripButtonText>Update</TripButtonText>
          </TripButton>
        </View>
      </View>
    </ExploreBackground>
  );
};

export default observer(ProfileEdit);
