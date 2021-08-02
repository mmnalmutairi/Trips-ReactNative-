import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// ****************** COMPONENTS IMPORT ******************
import Home from "../Home";
import TripDetail from "../trips/TripDetail";
import TripList from "../trips/TripList";
import Signin from "../auth/Signin";

// import Signup from "../authentication/Signup";
// import Location from "../Icebox/Location";

// ****************** BUTTONS IMPORT ******************
import AddTrip from "../buttons/AddTrip";
import Signout from "../auth/Signout";
import NewTrip from "../trips/NewTrip";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#fcd5ce" },
          headerColor: "White",
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
          options={{ title: "Explore", headerRight: () => <AddTrip /> }}
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
          name="NewTrip"
          component={NewTrip}
          options={{ title: "Add Your Trip" }}
        />
      </Stack.Navigator>
    </>
  );
};

export default RootNavigator;
