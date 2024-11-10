import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Item({ item, onDone, onRemove }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text
          style={
            item.done
              ? [styles.taskTitle, styles.doneTaskTitle]
              : styles.taskTitle
          }
        >
          {item.task}
        </Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>

      <TouchableOpacity
        style={{
          ...styles.button,
          opacity: item.done ? 0.5 : 1,
        }}
        disabled={item.done}
        onPress={() => onDone(item.id)}
      >
        <Ionicons name="checkmark" size={25} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onRemove(item.id)}>
        <Ionicons name="trash" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    elevation: 5,
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  taskTitle: {
    fontSize: 18,
  },
  category: {
    color: "#656565",
  },
  doneTaskTitle: {
    textDecorationLine: "line-through",
  },
  button: {
    backgroundColor: "#1e7acf",
    padding: 8,
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: "#DDD",
  },
});
