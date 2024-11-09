import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Item } from "../components/Item";

export function List({ data, onAddToCart }) {
  return (
    <ScrollView contentContainerStyle={listStyle.container}>
      {data.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => onAddToCart(item.id)}>
          <Item {...item} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const listStyle = StyleSheet.create({
  container: {
    alignItems: "stretch",
    gap: 15,
    padding: 20,
  },
});
