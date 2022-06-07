import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Options from "../screens/Options";

const Stack = createStackNavigator();

const MainScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Home"
      component={Home}
    />
    <Stack.Screen name="Options" component={Options} />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainScreen />
  </NavigationContainer>
);
