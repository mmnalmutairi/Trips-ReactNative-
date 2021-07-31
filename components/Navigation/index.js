import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";


// ****************** COMPONENTS IMPORT ******************
import Home from '../Home';
import TripDetail from '../trips/TripDetail';
import TripList from "../trips/TripList";
// import Signin from '../authentication/Signin';
// import Signup from "../authentication/Signup";


// ****************** BUTTONS IMPORT ******************
import AddTrip from "../buttons/AddTrip";

const Stack = createStackNavigator();

const RootNavigator = () => {

    return (
        <>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: "#fcd5ce" }, headerColor: "White", headerTitleStyle: { fontWeight: "bold", } }}>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="TripList" component={TripList} options={{ title: "Explore", headerRight: () => <AddTrip /> }} />
                <Stack.Screen name="TripDetail" component={TripDetail}
                    options={({ route }) => {
                        const { trip } = route.params;
                        return {
                            title: trip.title
                        };
                    }}
                />
            </Stack.Navigator>
        </>
    )
}

export default RootNavigator;