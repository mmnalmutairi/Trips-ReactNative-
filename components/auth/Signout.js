import React from "react";
import { observer } from "mobx-react";
import { AntDesign } from "@expo/vector-icons";
import authStore from "../../stores/authStore";
import { SignoutButton } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Signout = () => {
    const navigation = useNavigation();
    const handlePress = async () => {
        await authStore.signout();
        navigation.replace("Home");
    };
    return (
        <SignoutButton onPress={handlePress}>
            <AntDesign name="logout" size={24} color="black" />
        </SignoutButton>
    );
};

export default observer(Signout);