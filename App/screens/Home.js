import { View, StyleSheet, StatusBar, Text } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    flex: 1,
  },
});

export default Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.green} />
      <Text style={{ color: colors.white }}>Mobile Application</Text>
    </View>
  );
};
