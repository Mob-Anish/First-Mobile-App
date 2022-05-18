import { View, StyleSheet, StatusBar, Image, Text } from "react-native";
// import { Dimensions } from "react-native-web";
import { ConversionInput } from "../components/InputBox/conversionInput";
import { Button } from "../components/Button/button";
import colors from "../constants/colors";

// Screen
// const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    height: 120,
  },
  text: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: colors.white,
  },
});

export default Home = () => {
  const baseCurrency = "USD";
  const quoteCurrency = "NEP";
  const conversionRate = 124.37;
  const date = new Date();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.bg} />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.header}>Currency Converter</Text>
      <ConversionInput
        text="USD"
        value="123"
        onButtonPress={() => alert("todo!")}
        keyboardType="numeric"
        onChangeText={(text) => console.log("text", text)}
      />
      <ConversionInput
        text="NEP"
        value="123"
        editable={false}
        onButtonPress={() => alert("todo!")}
      />
      <Text style={styles.text}>
        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${date.getFullYear()}`}
      </Text>
      <Button text="Reverse Currencies" onPress={() => alert("todo!")} />
    </View>
  );
};
