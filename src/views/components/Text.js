import React from "react";
import { Text as T, StyleSheet, View, } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const Text = ({ style, children, leftIcon, rightIcon, ...others }) => {

    if (leftIcon) return (
        <View
            style={[
                styles.root
            ]}
        >
            {leftIcon}
            <T
                style={[
                    styles.text,
                    style,
                ]}
                {...others}
            >
                {children}
            </T>
        </View>
    )

    if (rightIcon) return (
        <View
            style={[
                styles.root
            ]}
        >
            <T
                style={[
                    styles.text,
                    style,
                ]}
                {...others}
            >
                {children}
            </T>
            {rightIcon}
        </View>
    )

    return (
        <T
            style={[
                styles.text,
                style,
            ]}
            {...others}
        >
            {children}
        </T>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        fontFamily: "Poppins-Regular",
        fontSize: RFPercentage(2.3),
    }
})

export default Text;