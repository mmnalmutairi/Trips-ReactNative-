import React from "react";
import { observer } from "mobx-react";
import EditProfileButton from "./userprofile/EditProfileButton";
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
import { BioText } from "./styles";
import { View } from "react";
import { ExploreBackground } from "../../styles";
import { TripDetailsStyle } from "../trips/styles";
import { ProfileImage } from "../profile/styles";

const SPACING = 10;

const ProfileItem = ({ user, profile }) => {
  if (profileStore.isLoading)
    return <TripDetailsStyle> Loading... </TripDetailsStyle>;

  return (
    <ExploreBackground
      source={{
        uri: "https://www.teahub.io/photos/full/1-11199_cute-backgrounds-for-iphone-rose-gold-iphone-backgrounds.jpg",
      }}
    >
      <View style={{ width: ITEM_SIZE }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 160,
          }}
        >
          <ProfileImage source={{ uri: user.image }} />
          <View
            style={{
              marginHorizontal: SPACING,
              marginVertical: SPACING,
              padding: SPACING * 2,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fcd5ce",
              borderRadius: 20,
              paddingTop: 50,
              paddingBottom: 50,
            }}
          >
            <TripDetailsStyle> {user.user.username}</TripDetailsStyle>
            <BioText>{user.bio}</BioText>
            {user.userId === authStore.user?.id && (
              <EditProfileButton user={user} profile={profile} />
            )}
          </View>
        </View>
      </View>
    </ExploreBackground>
  );
};

export default observer(ProfileItem);
