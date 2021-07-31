import React from "react";

// ****************** STYLES ****************** 
import { Image } from "react-native";
import { TripItemStyled, TripItemStyle } from "./styles";

const TripItem = ({ trip, navigation }) => {
    return (
        <TripItemStyle >
            <Image
                source={{ uri: trip.image }}
                style={{ width: 100, height: 100 }}
            />
            <TripItemStyled onPress={() => navigation.navigate("TripDetail", { trip: trip })} >
                {trip.title}
            </TripItemStyled>
        </TripItemStyle>
    )
}

export default TripItem;