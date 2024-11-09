import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DATA = [
  {
    id: 1,
    img: "https://via.placeholder.com/100",
    name: "João",
    address: "Rua primeiro de abril, 123",
    phone: "(55) 11 99999-9999",
  },
  {
    id: 2,
    name: "Maria",
    img: "https://via.placeholder.com/100",
    address: "Rua primeiro de maio, 123",
    phone: "(55) 21 99999-9999",
  },
  {
    id: 3,
    name: "Pedro",
    img: "https://via.placeholder.com/100",
    address: "Rua primeiro de junho, 123",
    phone: "(55) 43 99999-9999",
  },
];

export default function App() {
  return (
    <View style={appStyle.container}>
      <List data={DATA} />
    </View>
  );
}

const appStyle = StyleSheet.create({
  container: {
    padding: 30,
  },
});

function List({ data }) {
  return (
    <View style={listStyle.container}>
      {data.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </View>
  );
}

const listStyle = StyleSheet.create({
  container: {
    alignItems: "stretch",
    gap: 15,
  },
});

function Item({ img, name, address, phone }) {
  return (
    <View style={itemStyle.container}>
      <Image source={{ uri: img }} style={itemStyle.image} />

      <View style={itemStyle.info}>
        <Text style={itemStyle.name}>{name}</Text>
        <Text style={itemStyle.address}>{address}</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:${phone}`)}
          style={itemStyle.phone}
        >
          <Text style={itemStyle.phoneText}>{phone}</Text>
        </TouchableOpacity>
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
    width: 57,
    height: 72,
    borderWidth: 1,
  },
  info: {
    flexDirection: "column",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  address: {
    fontSize: 14,
  },
  phone: {
    marginTop: "auto",
  },
  phoneText: {
    color: "blue",
  },
});
