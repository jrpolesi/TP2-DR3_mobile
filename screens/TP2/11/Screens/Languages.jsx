import { ScrollView, StyleSheet, Text, View } from "react-native";

const LANGUAGES = [
  { id: 1, name: "Português", level: "Nativo" },
  { id: 2, name: "Inglês", level: "Intermediário" },
  { id: 3, name: "Espanhol", level: "Básico" },
];

export function Languages() {
  return (
    <ScrollView>
      <View style={languagesStyle.container}>
        {LANGUAGES.map((language) => (
          <View key={language.id} style={languagesStyle.card}>
            <Text key={language.id} style={languagesStyle.name}>
              {language.name}
            </Text>
            <Text>-</Text>
            <Text key={language.id} style={languagesStyle.level}>
              {language.level}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const languagesStyle = StyleSheet.create({
  container: {
    alignItems: "stretch",
    gap: 15,
    padding: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    padding: 20,
  },
  name: {
    fontSize: 22,
  },
  level: {
    fontSize: 16,
    color: "blue",
  },
});
