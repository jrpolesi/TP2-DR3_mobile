import { Image, StyleSheet, Text, View } from "react-native";

export function Item({ img, name, description, quantity, price }) {
  return (
    <View style={itemStyle.container}>
      <Image source={{ uri: img }} style={itemStyle.image} />

      <View style={itemStyle.info}>
        <Text style={itemStyle.name}>{name}</Text>
        {description && (
          <Text style={itemStyle.description}>{description}</Text>
        )}

        <View style={itemStyle.priceContainer}>
          {quantity && <Text style={itemStyle.priceText}>{quantity} x </Text>}
          <Text style={itemStyle.priceText}>R$ {price.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}

const itemStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    gap: 15,
  },
  image: {
    width: 70,
    height: 80,
    borderWidth: 1,
  },
  info: {
    flexDirection: "column",
    flex: 1,
    gap: 4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    fontSize: 14,
  },
  priceContainer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  priceText: {
    fontSize: 16,
    color: "blue",
  },
});
