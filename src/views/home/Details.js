import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import H1 from "../components/H1";
import MutedText from "../components/MutedText";
import DetailsBox from "./DetailsBox";
import Ionicons from "react-native-vector-icons/Ionicons";

const details = [
    {
        name: "Rain",
        amount: "60",
        unit: "%",
        icon: "rainy-outline",
        Icon: Ionicons,
    },
    {
        name: "Humidity",
        amount: "35",
        unit: "%",
        icon: "weather-rainy",
    },
    {
        name: "Wind",
        amount: "20",
        unit: "km/h",
        icon: "weather-windy",
    },
]

const Details = () => {
    return (
        <View
            style={[styles.root]}
        >
            <View
            >
                {
                    details.map((detail, i) => (
                        <DetailsBox
                            key={i}
                            detail={detail}
                        />
                    ))
                }
            </View>
            <View>
                <View
                    style={[styles.alignItemsCenter]}
                >
                    <Image
                        source={require("../../../assets/images/thunderstorm-rain.png")}
                        style={[styles.image]}
                    />
                </View>
                <H1
                    style={[styles.textCenter]}
                >
                    {`10°`}
                </H1>
                <MutedText
                    style={[styles.textCenter]}
                >
                    Thunderstorms
                </MutedText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        backgroundColor: "#000",
        padding: RFPercentage(5),
        borderRadius: 20,
        justifyContent: "space-between",
    },
    image: {
        width: 98,
        height: 91,
    },
    textCenter: {
        textAlign: "center",
    },
    alignItemsCenter: {
        alignItems: 'center',
    }
})

export default Details;