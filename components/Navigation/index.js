import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// ****************** TRIPS IMPORT ******************
import Home from "../Home";
import TripDetail from "../trips/TripDetail";
import TripList from "../trips/TripList";
import NewTrip from "../trips/NewTrip";
import UpdateTrip from "../trips/UpdateTrip";

// ****************** AUTH IMPORT ******************
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import Signout from "../auth/Signout";
import EditProfileButton from "../profile/userprofile/EditProfileButton";
// ****************** PROFILE IMPORT  ******************
import ProfileDetail from "../profile/ProfileDetail";
import ProfileEdit from "../profile/userprofile/ProfileEdit";
import ProfileList from "../profile/ProfileList";
// ****************** EXTRA  ******************
import ViewProfileButton from "../buttons/ViewProfileButton";
import AlaaProfile from "../profile/profiles/AlaaProfile";
import MahaProfile from "../profile/profiles/MahaProfile";
import TaibaProfile from "../profile/profiles/TaibaProfile";
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#fcd5ce" },
          headerColor: "transparent",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TripList"
          component={TripList}
          options={{
            title: "Explore",
            headerRight: () => <ViewProfileButton />,
          }}
        />
        <Stack.Screen
          name="TripDetail"
          component={TripDetail}
          options={({ route }) => {
            const { trip } = route.params;
            return {
              title: trip.title,
              headerRight: () => <Signout />,
            };
          }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "Signup" }}
        />

        <Stack.Screen
          name="NewTrip"
          component={NewTrip}
          options={{ title: "Add Your Trip" }}
        />
        <Stack.Screen
          name="UpdateTrip"
          component={UpdateTrip}
          options={{ title: "Update Trip" }}
        />

        {/* ******************* PROFILE VIEW ******************* */}
        <Stack.Screen
          name="ProfileDetail"
          component={ProfileDetail}
          options={{
            title: "Profile",
            headerRight: () => <EditProfileButton />,
          }}
        />
        <Stack.Screen
          name="ProfileList"
          component={ProfileList}
          options={{ title: "Profile's" }}
        />

        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEdit}
          options={{ title: "Update Profile" }}
        />
        <Stack.Screen
          name="AlaaProfile"
          component={AlaaProfile}
          options={{ title: " Profile", headerRight: () => <Signout /> }}
        />
        <Stack.Screen
          name="MahaProfile"
          component={MahaProfile}
          options={{ title: " Profile", headerRight: () => <Signout /> }}
        />
        <Stack.Screen
          name="TaibaProfile"
          component={TaibaProfile}
          options={{ title: " Profile", headerRight: () => <Signout /> }}
        />
      </Stack.Navigator>
    </>
  );
};

export default RootNavigator;
