import React from "react";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import { Entypo } from '@expo/vector-icons';
// import { Alert } from "react-native";

const AddTrip = () => {
    // const navigation = useNavigation();
    // }
    return (
        <>
            <Entypo name="add-to-list" size={24} color="black" style={{ paddingRight: 15 }} />
        </>
    );
};

export default observer(AddTrip);