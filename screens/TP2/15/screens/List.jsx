import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export function List({ movieList, navigation }) {
  const [movies, setMovies] = useState(movieList);

  function handleVote(movieId, like) {
    setMovies((prevState) =>
      prevState.map((movie) => {
        if (movie.id === movieId) {
          movie.vote = like;
        }

        return movie;
      })
    );
  }

  const disabled = !movies.some((movie) => movie.vote != null);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.listContainer}>
        {movies.map((movie) => (
          <View key={movie.id} style={styles.voteContainer}>
            <TouchableOpacity onPress={() => handleVote(movie.id, false)}>
              <FontAwesome6
                name="thumbs-down"
                size={24}
                color={movie.vote === false ? "#1e7acf" : "black"}
              />
            </TouchableOpacity>

            <Text style={styles.movieTitle}>{movie.title}</Text>

            <TouchableOpacity onPress={() => handleVote(movie.id, true)}>
              <FontAwesome6
                name="thumbs-up"
                size={24}
                color={movie.vote ? "#1e7acf" : "black"}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={{
          ...styles.button,
          opacity: disabled ? 0.5 : 1,
        }}
        onPress={() => navigation.navigate("Result", { movies })}
        disabled={disabled}
      >
        <Text style={styles.buttonText}>Ver compatibilidade</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    paddingBottom: 20,
  },
  voteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  movieTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#1e7acf",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
