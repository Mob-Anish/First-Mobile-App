import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Linking,
} from "react-native";
import colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  margin: {
    backgroundColor: colors.border,
    height: 1,
    marginLeft: 20,
  },
});

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Oops, Something went wrong!");
  });
};

export default Options = () => {
  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.row}
        onPress={() => openUrl("https://www.facebook.com")}
      >
        <Text style={styles.text}>Options</Text>
        <Entypo name="chevron-right" size={18} color={colors.green} />
      </TouchableOpacity>

      <View style={styles.margin} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>First Mobile Application</Text>
        <Entypo name="export" size={18} color={colors.green} />
      </TouchableOpacity>

      <View style={styles.margin} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Using React Native Framework </Text>
        <Entypo name="export" size={18} color={colors.green} />
      </TouchableOpacity>
    </ScrollView>
  );
};
