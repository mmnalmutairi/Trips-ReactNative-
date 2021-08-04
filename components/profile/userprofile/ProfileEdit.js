import React, { useState } from "react";
import profileStore from "../../../stores/profileStore";
import { observer } from "mobx-react";
import * as DocumentPicker from "expo-document-picker";
// ******************* Styles *******************
import { ExploreBackground, UpdateImage } from "../../../styles";
import {
  ProfileTitle,
  ProfileTextInput,
  ProfileButton,
  ProfileButtonText,
} from "../styles";
import { View, TouchableOpacity } from "react-native";

const SPACING = 10;
// ************* PASS (USER , PROFILE , CHECKID) FROM EDITPROFILEBUTTON ***************
const ProfileEdit = ({ route, navigation }) => {
  const { user } = route.params;
  const { checkId } = route.params;
  const [profile, setProfile] = useState({
    bio: user.bio,
    image: { uri: user.image ? user.image : "" },
  });

  const [doc, setDoc] = useState();
  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      }).then((response) => {
        if (response.type == "success") {
          let { name, size, uri } = response;
          let nameParts = name.split(".");
          let fileType = nameParts[nameParts.length - 1];
          var fileToUpload = {
            name: name,
            size: size,
            uri: uri,
            type: "application/" + fileType,
          };
          setDoc(fileToUpload);
          setProfile({ ...profile, image: fileToUpload });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    await profileStore.updateProfile(profile, checkId);
    // navigation.navigate("ProfileDetail", { userId: oldProfile.userId });
    navigation.goBack();
  };

  return (
    <>
      <ExploreBackground
        source={{
          uri: "https://www.teahub.io/photos/full/1-11199_cute-backgrounds-for-iphone-rose-gold-iphone-backgrounds.jpg",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
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
              backgroundColor: "white",
              borderRadius: 20,
              paddingLeft: 60,
              paddingRight: 60,
              paddingBottom: 300,
            }}
          >
            <ProfileTitle>Update Your Profile</ProfileTitle>
            <TouchableOpacity onPress={pickDocument}>
              <UpdateImage source={{ uri: profile.image.uri }} />
            </TouchableOpacity>

            <ProfileTitle> Click on the image to Update </ProfileTitle>
            <ProfileTextInput
              placeholder="Type in your Bio ... "
              placeholderTextColor="#949499"
              autoCapitalize="none"
              onChangeText={(bio) => setProfile({ ...profile, bio })}
              value={profile.bio}
            />

            <ProfileButton onPress={handleSubmit}>
              <ProfileButtonText>Update My Profile</ProfileButtonText>
            </ProfileButton>
          </View>
        </View>
      </ExploreBackground>
    </>
  );
};

export default observer(ProfileEdit);
