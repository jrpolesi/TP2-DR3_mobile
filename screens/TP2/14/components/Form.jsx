import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function Form({ onSave }) {
  const [formValue, setFormValue] = useState({
    task: "",
    category: "",
  });

  function handleFormChange(key, value) {
    setFormValue((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Digite sua tarefa"
        onChangeText={(value) => handleFormChange("task", value)}
        value={formValue.task}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Digite a categoria"
        onChangeText={(value) => handleFormChange("category", value)}
        value={formValue.category}
      />

      <TouchableOpacity
        style={styles.saveBtn}
        onPress={() => {
          const { task, category } = formValue;
          const taskValue = task.trim();
          const categoryValue = category.trim();

          if (!taskValue.length || !categoryValue.length) return;

          onSave({ task: taskValue, category: categoryValue });
          setFormValue({
            task: "",
            category: "",
          });
        }}
      >
        <Text style={styles.saveBtnText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 15,
  },
  textInput: {
    padding: 10,
    borderRadius: 3,
    borderWidth: 2,
    width: "100%",
  },
  saveBtn: {
    backgroundColor: "#DDD",
    padding: 8,
    borderRadius: 5,
    width: "100%",
  },
  saveBtnText: {
    fontSize: 20,
    textAlign: "center",
  },
});
