import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import H2 from "../components/H2";
import MutedText from "../components/MutedText";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const DetailsBox = ({ detail }) => {

    const {
        name,
        unit,
        amount,
        icon,
        Icon = MaterialCommunityIcons,
    } = detail

    return (
        <View
            style={styles.root}
        >
            <Icon
                name={icon}
                color="#3396ff"
                size={RFPercentage(3)}
            />
            <View
                style={{
                    marginLeft: RFPercentage(2)
                }}
            >
                <H2
                    style={{
                        fontSize: RFPercentage(2)
                    }}
                >
                    {`${amount}${unit}`}
                </H2>
                <MutedText
                    style={{
                        fontSize: RFPercentage(1.5)
                    }}
                >
                    {name}
                </MutedText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        marginVertical: RFPercentage(2),
        flexDirection: "row",
    }
})

export default DetailsBox;