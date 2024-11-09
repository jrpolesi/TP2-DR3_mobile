import { ScrollView, StyleSheet, View } from "react-native";
import { Experience } from "../components/Experience";

const EXPERIENCES = [
  {
    id: 1,
    title: "Desenvolvedor Frontend MyApps",
    from: "2019",
    to: "Atual",
    description:
      "Desenvolvimento de aplicações web utilizando React, Redux e Next.js.",
  },
  {
    id: 2,
    title: "Desenvolvedor Backend WoW Apps",
    from: "2017",
    to: "2019",
    description:
      "Desenvolvimento de APIs RESTful utilizando Node.js, Express e MongoDB.",
  },
];

export function Professional() {
  return (
    <ScrollView>
      <View style={professionalStyle.container}>
        {EXPERIENCES.map((experience) => (
          <Experience
            key={experience.id}
            style={professionalStyle.skill}
            {...experience}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const professionalStyle = StyleSheet.create({
  container: {
    alignItems: "stretch",
    gap: 15,
    padding: 20,
  },
  skill: {
    fontSize: 22,
  },
});
