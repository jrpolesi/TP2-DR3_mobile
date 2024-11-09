import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Cart } from "./screens/Cart";
import { List } from "./screens/List";

const Stack = createStackNavigator();

const PRODUCTS = [
  {
    id: 1,
    img: "https://via.placeholder.com/150",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 99.99,
  },
  {
    id: 2,
    img: "https://via.placeholder.com/150",
    name: "Smart Watch",
    description: "Smart watch with various health tracking features.",
    price: 199.99,
  },
  {
    id: 3,
    img: "https://via.placeholder.com/150",
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with excellent sound quality.",
    price: 49.99,
  },
];

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
          name="List"
          options={({ navigation }) => ({
            headerLeft: null,
            gestureEnabled: false,
            headerRight: (props) => (
              <View style={appStyle.headerButtonContainer}>
                <Button
                  title="Cart"
                  onPress={() =>
                    navigation.navigate("Cart", { cart, products: PRODUCTS })
                  }
                  {...props}
                />
              </View>
            ),
          })}
        >
          {(props) => (
            <List
              data={PRODUCTS}
              onAddToCart={(id) => setCart([...cart, id])}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const appStyle = StyleSheet.create({
  headerButtonContainer: {
    marginRight: 15,
  },
});
