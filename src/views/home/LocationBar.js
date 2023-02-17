import React from "react";
import { StyleSheet, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import H2 from "../components/H2";
import MutedText from "../components/MutedText";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const LocationBar = () => {
    return (
        <View
            style={styles.root}
        >
            <H2
                style={{
                    textAlign: "center"
                }}
                leftIcon={
                    <Ionicons
                        name="location-sharp"
                        size={RFPercentage(2.5)}
                        color="#fff"
                        style={{
                            marginRight: RFPercentage(1.2)
                        }}
                    />
                }
            >
                Location
            </H2>
            <MutedText
                style={{
                    textAlign: "center"
                }}
            >
                Today, 26th May
            </MutedText>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        marginBottom: RFPercentage(4),
    }
})

export default LocationBar;