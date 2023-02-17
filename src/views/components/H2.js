import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Text from "./Text";

const H2 = ({style, children, ...others}) => {
    return(
        <Text
            style={[
                styles.text,
                style,
            ]}
            {...others}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold",
        fontSize: RFPercentage(3),
    }
})

export default H2;