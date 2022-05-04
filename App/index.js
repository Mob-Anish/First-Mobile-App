import { StyleSheet, View, StatusBar } from "react-native";
import Options from "./screens/Options";

export default function App() {
  console.log("app");

  return (
    <View style={styles.container}>
      <Options />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
