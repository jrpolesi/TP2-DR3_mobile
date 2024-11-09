import { ScrollView, StyleSheet, Text, View } from "react-native";

export function Detail({ route }) {
  const { title, likes, shares, content, author, postedAt } = route.params.post;

  return (
    <View style={detailStyle.container}>
      <Text style={detailStyle.title}>{title}</Text>

      <View style={detailStyle.statsContainer}>
        <Text style={detailStyle.stats}>Curtidas {likes}</Text>
        <Text style={detailStyle.stats}>Compart. {shares}</Text>
      </View>

      <ScrollView style={detailStyle.contentContainer}>
        <Text style={detailStyle.content}>{content}</Text>
      </ScrollView>

      <View style={detailStyle.footer}>
        <Text style={detailStyle.author}>{author}</Text>
        <Text style={detailStyle.postedAt}>Postado em: {postedAt}</Text>
      </View>
    </View>
  );
}

const detailStyle = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  stats: {
    color: "blue",
    fontSize: 18,
  },
  contentContainer: {
    maxHeight: 400,
    marginTop: 10,
    marginBottom: 30,
  },
  content: {
    fontSize: 18,
  },
  footer: {
    gap: 10,
    marginTop: "auto",
    justifyContent: "space-between",
  },
  author: {
    fontWeight: "bold",
    fontSize: 16,
  },
  postedAt: {
    color: "gray",
  },
});
