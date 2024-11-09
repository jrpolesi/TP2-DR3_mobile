import { createDrawerNavigator } from "@react-navigation/drawer";

import { NavigationContainer } from "@react-navigation/native";
import { About } from "./Screens/About";
import { Languages } from "./Screens/Languages";
import { Professional } from "./Screens/Professional";
import { School } from "./Screens/School";
import { Skills } from "./Screens/Skills";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            title: "Sobre",
          }}
        />
        <Drawer.Screen
          name="Skills"
          component={Skills}
          options={{
            title: "Habilidades",
          }}
        />
        <Drawer.Screen
          name="Languages"
          component={Languages}
          options={{
            title: "Idiomas",
          }}
        />
        <Drawer.Screen
          name="Professional"
          component={Professional}
          options={{
            title: "Experiência profissional",
          }}
        />
        <Drawer.Screen
          name="School"
          component={School}
          options={{
            title: "Formação acadêmica",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
