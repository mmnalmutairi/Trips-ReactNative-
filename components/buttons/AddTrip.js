import React from "react";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import { Entypo } from '@expo/vector-icons';
import authStore from "../../stores/authStore";
import { Alert } from "react-native";

const AddTrip = () => {

    const navigation = useNavigation();
    const handlePress = () => {
        if (authStore.user) {
            navigation.replace("NewTrip");
        } else {
            Alert.alert("Sign in", "You need to sign in first ", [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Clicked"),
                    style: "cancel",
                },
                { text: "Signin", onPress: () => navigation.replace("Signin") }
            ],
                { cancelable: false });
        }
    }
    return (
        <>
            <Entypo name="add-to-list"
                size={24} color="black"
                style={{ paddingRight: 15 }}
                onPress={handlePress}
            />
        </>
    );
};

export default observer(AddTrip);
