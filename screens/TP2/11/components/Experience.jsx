import { StyleSheet, Text, View } from "react-native";

export function Experience({ title, from, to, description }) {
  return (
    <View style={experienceStyle.container}>
      <Text style={experienceStyle.title}>{title}</Text>
      <Text style={experienceStyle.date}>
        {from} - {to}
      </Text>
      <Text style={experienceStyle.description}>{description}</Text>
    </View>
  );
}

const experienceStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    marginTop: 6,
    fontSize: 16,
  },
  description: {
    marginTop: 10,
  },
});
