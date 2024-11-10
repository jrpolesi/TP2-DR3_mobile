import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CategoriesFilter } from "./components/CategoriesFilter";
import { Form } from "./components/Form";
import { Item } from "./components/Item";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");

  function newTask({ task, category }) {
    setTasks((prevState) => [
      ...prevState,
      {
        id: getNewRandomId(),
        task,
        category,
        done: false,
      },
    ]);
  }

  function removeTask(id) {
    setTasks((prevState) => {
      const updated = prevState.filter((task) => task.id !== id);

      const hasFilteredCategory = updated.some(
        (task) => task.category === filter
      );

      if (!hasFilteredCategory) {
        setFilter("");
      }

      return updated;
    });
  }

  function doneTask(id) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          task.done = true;
        }

        return task;
      })
    );
  }

  const categories = [...new Set(tasks.map((task) => task.category))];

  const filteredTasks = filter
    ? tasks.filter((task) => task.category === filter)
    : tasks;

  return (
    <View style={styles.container}>
      <Form onSave={newTask} />

      {tasks.length ? (
        <>
          <CategoriesFilter
            categories={categories}
            filter={filter}
            onChange={setFilter}
          />

          <ScrollView
            styles={styles.listStyle}
            contentContainerStyle={styles.listContentStyle}
          >
            {filteredTasks.map((task) => (
              <Item
                key={task.id}
                item={task}
                onRemove={removeTask}
                onDone={doneTask}
              />
            ))}
          </ScrollView>
        </>
      ) : (
        <Text style={styles.textEmpty}>Nenhuma tarefa cadastrada</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingBottom: 40,
    gap: 30,
    height: "100%",
  },
  textEmpty: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
  },
  listStyle: {
    minHeight: "100%",
    flexGrow: 1,
  },
  listContentStyle: {
    gap: 10,
  },
});

function getNewRandomId() {
  return Math.random().toString(36).substring(7) + Date.now().toString(36);
}
