import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Text from "./Text";

const H1 = ({style, children, ...others}) => {
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
        fontSize: RFPercentage(10),
    }
})

export default H1;