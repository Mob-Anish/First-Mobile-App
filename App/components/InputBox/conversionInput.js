import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    flexDirection: "row",
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  containerDisabled: {
    backgroundColor: colors.offGreen,
  },
  button: {
    padding: 15,
    borderRightWidth: 1,
    backgroundColor: colors.green,
    borderRightColor: colors.border,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    padding: 10,
    fontSize: 16,
    color: colors.white,
  },
});

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  const containerStyles = [styles.container];

  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
    console.log(containerStyles);
  }

  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};
