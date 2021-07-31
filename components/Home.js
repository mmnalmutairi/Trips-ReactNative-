import React from "react";
import { ExploreBackground, TextView, ExploreText, OverlayContainer, SkipStyling, ButtonStyling } from "../styles";
const Home = ({ navigation }) => {

    return (
        <ExploreBackground source={{ uri: "https://www.teahub.io/photos/full/1-11199_cute-backgrounds-for-iphone-rose-gold-iphone-backgrounds.jpg" }}>
            <OverlayContainer>
                <TextView >
                    <ExploreText >
                        WHEREVER YOU GO, TAKE YOUR HEART
                </ExploreText>
                </TextView>
                <SkipStyling>

                    {/* ****************** HOW TO DO NAVIGATION ****************** */}
                    <ButtonStyling onPress={() => navigation.navigate("TripList")}>
                        Go to Trips List
                    </ButtonStyling>
                </SkipStyling>
            </OverlayContainer>
        </ExploreBackground>
    )
}


export default Home;