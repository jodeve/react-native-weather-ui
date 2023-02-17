import { StyleSheet } from "react-native";
import Text from "./Text";

const MutedText = ({style, children, ...others}) => {
    return(
        <Text
            style={[
                styles,
                style,
            ]}
            {...others}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    color: "#bbb",
})

export default MutedText;