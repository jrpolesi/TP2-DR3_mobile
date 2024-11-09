import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export function List({ data, navigation }) {
  return (
    <ScrollView>
      <View style={listStyle.container}>
        {data.map((item) => (
          <Post
            key={item.id}
            onPress={() => navigation.navigate("Post", { post: item })}
            {...item}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const listStyle = StyleSheet.create({
  container: {
    alignItems: "stretch",
    gap: 15,
    padding: 20,
  },
});

function Post({ title, summary, likes, shares, onPress }) {
  return (
    <TouchableOpacity style={postStyle.container} onPress={onPress}>
      <Text style={postStyle.title}>{title}</Text>
      <Text style={postStyle.summary}>{summary}</Text>

      <View style={postStyle.statsContainer}>
        <Text style={postStyle.stats}>Curtidas {likes}</Text>
        <Text style={postStyle.stats}>Compart. {shares}</Text>
      </View>
    </TouchableOpacity>
  );
}

const postStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
  },
  title: {
    fontSize: 22,
  },
  summary: {
    marginTop: 8,
    fontSize: 16,
  },
  statsContainer: {
    marginTop: 26,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stats: {
    fontSize: 18,
    color: "blue",
  },
});
