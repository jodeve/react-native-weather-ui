import React from "react";
import { StyleSheet, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import LocationBar from "./LocationBar";
import Details from "./Details";
import Timeline from "./Timeline";

const Home = () => {
    return (
        <View
            style={styles.root}
        >
            <LocationBar />
            <Details />
            <Timeline />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: RFPercentage(2.4),
        paddingVertical: RFPercentage(5),
        backgroundColor: "#0f0f0f",
    }
})

export default Home;