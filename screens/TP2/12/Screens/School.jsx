import { ScrollView, StyleSheet, View } from "react-native";
import { Experience } from "../components/Experience";

const SCHOOLS = [
  {
    id: 1,
    title: "Infnet",
    from: "2021",
    to: "2022",
    description: "Pós-graduação em Engenharia de Software",
  },
  {
    id: 2,
    title: "Universidade de São Paulo",
    from: "2015",
    to: "2019",
    description: "Bacharelado em Ciência da Computação",
  },
  {
    id: 3,
    title: "Colégio Técnico de Campinas",
    from: "2012",
    to: "2014",
    description: "Técnico em Informática",
  },
];

export function School() {
  return (
    <ScrollView>
      <View style={schoolStyle.container}>
        {SCHOOLS.map((school) => (
          <Experience key={school.id} {...school} />
        ))}
      </View>
    </ScrollView>
  );
}

const schoolStyle = StyleSheet.create({
  container: {
    alignItems: "stretch",
    gap: 15,
    padding: 20,
  },
  skill: {
    fontSize: 22,
  },
});
