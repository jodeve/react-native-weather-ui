import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import H2 from "../components/H2";
import MutedText from "../components/MutedText";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import TimelineItem from "./TimelineItem";

const tl = [
    {
        time: "12:00",
        temp: "19",
        image: require("../../../assets/images/tl/rain2.png")
    },
    {
        time: "13:00",
        temp: "10",
        image: require("../../../assets/images/tl/thunderstorm-rain.png")
    },
    {
        time: "14:00",
        temp: "22",
        image: require("../../../assets/images/tl/sun-rain.png")
    },
    {
        time: "15:00",
        temp: "20",
        image: require("../../../assets/images/tl/thunderstorm.png")
    },
    {
        time: "13:00",
        temp: "19",
        image: require("../../../assets/images/tl/thunderstorm-rain.png")
    },
]

const Timeline = () => {
    return (
        <View>
            <View
                style={styles.root}
            >
                <H2>Today</H2>
                <TouchableOpacity>
                    <MutedText
                        rightIcon={
                            <Ionicons
                                name="chevron-forward"
                                size={RFPercentage(3)}
                                color="#bbb"
                            />}
                    >
                        Next week
                    </MutedText>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    tl.map((item, i) => (
                        <TimelineItem
                            key={i}
                            item={item}
                            index={i}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: RFPercentage(4),
        alignItems: "center",
    }
})

export default Timeline;