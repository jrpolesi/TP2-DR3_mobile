import { StyleSheet, Text, View } from "react-native";

const DATA = [
  { id: 1, title: "Banana" },
  { id: 2, title: "Maçã" },
  { id: 3, title: "Pera" },
  { id: 4, title: "Uva" },
  { id: 5, title: "Melancia" },
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
    gap: 30,
    margin: 30,
  },
});

function List({ data }) {
  return (
    <View style={listStyle.container}>
      {data.map((item) => (
        <Item key={item.id} title={item.title} />
      ))}
    </View>
  );
}

const listStyle = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    gap: 10,
  },
});

function Item({ title }) {
  return (
    <View style={itemStyle.container}>
      <Text>{title}</Text>
    </View>
  );
}

const itemStyle = StyleSheet.create({
  container: {
    minWidth: 100,
    borderWidth: 1,
    alignItems: "flex-start",
    paddingVertical: 15,
    paddingHorizontal: 4,
  },
});
