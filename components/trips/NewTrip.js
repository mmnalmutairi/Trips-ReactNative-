import React, { useState } from "react";
import { observer } from "mobx-react";
import tripStore from "../../stores/tripStore";
import { useNavigation } from "@react-navigation/native";

import {
  TripTitle,
  TripContainer,
  TripTextInput,
  TripButtonText,
  TripButton,
} from "./styles";
// import * as ImagePicker from "react-native-image-picker";
// import { launchImageLibrary } from "react-native-image-picker";

const NewTrip = () => {
  const navigation = useNavigation();
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleSubmit = async () => {
    await tripStore.createTrip(trip);
    navigation.replace("TripList");
  };

  // const options = {
  //   title: "Pick an image",
  //   storageOptions: {
  //     skipBackup: true,
  //     path: "images",
  //   },
  // };

  // const openPicker = () => {
  //   launchImageLibrary(options, (response) => {
  //     console.log("Response = ", response);

  //     if (response.didCancel) {
  //       console.log("User cancelled image picker");
  //     } else if (response.error) {
  //       console.log("ImagePicker Error: ", response.error);
  //     } else {
  //       const source = { uri: response.uri };
  //       console.log(source);
  //     }
  //   });
  // };

  return (
    <TripContainer>
      <TripTitle>Your Next Trip</TripTitle>
      <TripTextInput
        placeholder="title"
        autoCapitalize="none"
        onChangeText={(event) => setTrip({ ...trip, title: event })}
      />
      <TripTextInput
        placeholder="description"
        autoCapitalize="none"
        onChangeText={(event) => setTrip({ ...trip, description: event })}
      />
      <TripTextInput
        placeholder="Browse an image"
        onChangeText={(event) => setTrip({ ...trip, image: event })}
      />
      {/* <Button title="Select Photo" onPress={openPicker} /> */}
      <TripButton onPress={handleSubmit}>
        <TripButtonText>Add The Trip</TripButtonText>
      </TripButton>
    </TripContainer>
  );
};

export default observer(NewTrip);
