import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { List } from "./screens/List";
import { Result } from "./screens/Result";

const MOVIES = [
  {
    id: 1,
    title: "Matrix",
    vote: null,
  },
  {
    id: 2,
    title: "Inception",
    vote: null,
  },
  {
    id: 3,
    title: "Interstellar",
    vote: null,
  },
  {
    id: 4,
    title: "The Dark Knight",
    vote: null,
  },
  {
    id: 5,
    title: "Fight Club",
    vote: null,
  },
  {
    id: 6,
    title: "Pulp Fiction",
    vote: null,
  },
  {
    id: 7,
    title: "Forrest Gump",
    vote: null,
  },
  {
    id: 8,
    title: "The One",
    vote: null,
  },
  {
    id: 9,
    title: "The Godfather",
    vote: null,
  },
  {
    id: 10,
    title: "The Lord of the Rings",
    vote: null,
  },
];

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
          name="List"
          options={{
            headerLeft: null,
            gestureEnabled: false,
            title: "Avalie os filmes",
          }}
        >
          {(props) => <List {...props} movieList={MOVIES} />}
        </Stack.Screen>
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
