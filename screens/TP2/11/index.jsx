import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { About } from "./Screens/About";
import { Languages } from "./Screens/Languages";
import { Professional } from "./Screens/Professional";
import { School } from "./Screens/School";
import { Skills } from "./Screens/Skills";

const TabNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <TabNav.Navigator
        screenOptions={(route) => {
          let iconName;

          switch (route.route.name) {
            case "About":
              iconName = "info";
              break;
            case "Skills":
              iconName = "code";
              break;
            case "Languages":
              iconName = "language";
              break;
            case "Professional":
              iconName = "work";
              break;
            case "School":
              iconName = "school";
              break;
          }

          return {
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name={iconName} size={size} color={color} />
            ),
            tabBarStyle: {
              paddingBottom: 0,
              height: 50,
            },
          };
        }}
      >
        <TabNav.Screen
          name="About"
          component={About}
          options={{
            title: "Sobre",
          }}
        />
        <TabNav.Screen
          name="Skills"
          component={Skills}
          options={{
            title: "Habilidades",
          }}
        />
        <TabNav.Screen
          name="Languages"
          component={Languages}
          options={{
            title: "Idiomas",
          }}
        />
        <TabNav.Screen
          name="Professional"
          component={Professional}
          options={{
            title: "Experiência profissional",
          }}
        />
        <TabNav.Screen
          name="School"
          component={School}
          options={{
            title: "Formação acadêmica",
          }}
        />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}
