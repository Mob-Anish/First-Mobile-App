import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";

export default function App() {
  console.log("app");

  return (
    <View style={styles.container}>
      <Text>React Native 😃</Text>
      <TouchableOpacity>
        <Image
          style={{ borderRadius: 100, marginTop: 10 }}
          source={{
            width: 200,
            height: 200,
            uri: "https://res.cloudinary.com/hologram/image/upload/v1647307010/cld-sample.jpg",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
});
