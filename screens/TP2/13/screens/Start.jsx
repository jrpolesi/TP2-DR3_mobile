import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Start({ navigation, questions }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.startBtn}
        onPress={() =>
          navigation.navigate("Questions", {
            questions,
          })
        }
      >
        <Text style={styles.btnText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  startBtn: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 26,
    marginTop: 40,
    borderRadius: 5,
    alignSelf: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
});
