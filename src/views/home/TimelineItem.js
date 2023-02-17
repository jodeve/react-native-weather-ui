import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import H2 from "../components/H2";
import MutedText from "../components/MutedText";

const TimelineItem = ({ item, index }) => {

    const {
        temp,
        time,
        image,
    } = item

    return (
        <View
            style={
                [
                    styles.root,
                    {
                        margin: index == 0 ? 0 : RFPercentage(1),
                    }
                ]
            }
        >
            <Image
                source={image}
                style={{
                    width: 50,
                    height: 46,
                }}
            />
            <View
                style={{
                    marginLeft: RFPercentage(2)
                }}
            >
                <H2
                    style={{
                        fontSize: RFPercentage(2.7),
                        textAlign: "center",
                    }}
                >
                    {`${temp}°`}
                </H2>
                <MutedText
                    style={{
                        fontSize: RFPercentage(2),
                        textAlign: "center",
                    }}
                >
                    {time}
                </MutedText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        marginVertical: RFPercentage(2),
        backgroundColor: "#000",
        padding: RFPercentage(2),
        borderRadius: 20,
    }
})

export default TimelineItem;