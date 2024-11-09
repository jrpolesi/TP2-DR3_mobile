import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Item } from "../components/Item";

export function Cart({ route }) {
  const { cart, products } = route.params;

  const resolvedCart = cart.reduce((acc, id) => {
    const product = products.find((product) => product.id === id);

    if (!product) return acc;

    const { description, ...rest } = product;

    const cartItem = acc.find((item) => item.id === id);

    if (!cartItem) {
      return [...acc, { ...rest, quantity: 1 }];
    }

    cartItem.quantity++;

    return acc;
  }, []);

  return (
    <View style={cartStyle.container}>
      {resolvedCart.length ? (
        <ScrollView contentContainerStyle={cartStyle.itemsContainer}>
          {resolvedCart.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </ScrollView>
      ) : (
        <Text>Carrinho vazio</Text>
      )}

      <View style={cartStyle.footer}>
        <Text style={cartStyle.total}>
          Total: R$ {calculateTotal(resolvedCart) ?? 0}
        </Text>
      </View>
    </View>
  );
}

function calculateTotal(items) {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

const cartStyle = StyleSheet.create({
  container: {
    padding: 20,
    overflow: "scroll",
  },
  itemsContainer: {
    gap: 15,
  },
  footer: {
    gap: 10,
    borderTopWidth: 1,
    marginTop: 15,
    paddingTop: 15,
  },
  total: {
    alignSelf: "flex-end",
    fontWeight: "bold",
    fontSize: 18,
  },
});
