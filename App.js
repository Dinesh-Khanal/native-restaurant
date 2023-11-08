import HomeScreen from "./screens/home-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RestaurantScreen from "./screens/restaurant-screen";
import { Provider } from "react-redux";
import store from "./redux/store";
import CartScreen from "./screens/cart";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Cart"
            options={{ presentation: "modal" }}
            component={CartScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
