import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: 17,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.green,
    borderRadius: 22,
  },
});

export const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
