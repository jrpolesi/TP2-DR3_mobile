import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function CategoriesFilter({ categories, filter, onChange }) {
  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={{
            ...styles.categoryBtn,
            backgroundColor: filter === category ? "#1e7acf" : "#a2a2a2",
          }}
          onPress={() => onChange(category === filter ? "" : category)}
        >
          <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  categoryBtn: {
    padding: 10,
    borderRadius: 5,
  },
  category: {
    color: "white",
  },
});
