import { useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const USERS = [
  {
    name: "João",
    votes: [1, 3, 5, 7, 9],
  },
  {
    name: "Maria",
    votes: [2, 4, 6, 8, 10],
  },
  {
    name: "José",
    votes: [1, 3, 8, 10],
  },
];

export function Result({ route }) {
  const likedMoviesIds = useMemo(
    () =>
      route.params.movies
        .filter((movie) => movie.vote)
        .map((movie) => movie.id),
    [route.params.movies]
  );

  const sortedUsers = USERS.sort((a, b) => {
    const aLiked = a.votes.filter((movie) => likedMoviesIds.includes(movie));
    const bLiked = b.votes.filter((movie) => likedMoviesIds.includes(movie));

    return bLiked.length - aLiked.length;
  });

  return (
    <ScrollView style={styles.container}>
      {sortedUsers.map((user) => (
        <View key={user.name} style={styles.userContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userVotes}>
            Vocês tem{" "}
            <Text style={styles.commonVotes}>
              {
                user.votes.filter((movie) => likedMoviesIds.includes(movie))
                  .length
              }
            </Text>{" "}
            gostos em comum
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  userContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  userVotes: {
    fontSize: 16,
  },
  commonVotes: {
    fontWeight: "bold",
    color: "#007BFF",
  },
});
