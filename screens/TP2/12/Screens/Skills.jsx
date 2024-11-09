import { ScrollView, StyleSheet, Text, View } from "react-native";

const SKILLS = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "React",
  },
  {
    id: 3,
    name: "React Native",
  },
  {
    id: 4,
    name: "Node.js",
  },
  {
    id: 5,
    name: "Express",
  },
  {
    id: 6,
    name: "MongoDB",
  },
];

export function Skills() {
  return (
    <ScrollView>
      <View style={skillsStyle.container}>
        {SKILLS.map((skill) => (
          <View key={skill.id} style={skillsStyle.listItem}>
            <View style={skillsStyle.marker} />
            <Text key={skill.id} style={skillsStyle.skill}>
              {skill.name}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const skillsStyle = StyleSheet.create({
  container: {
    alignItems: "stretch",
    gap: 15,
    padding: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "black",
  },
  skill: {
    fontSize: 22,
  },
});
