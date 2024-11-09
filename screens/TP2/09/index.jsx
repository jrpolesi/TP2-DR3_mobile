import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Detail } from "./screens/Details";
import { List } from "./screens/List";

const Stack = createStackNavigator();

const POSTS = [
  {
    id: 1,
    title: "Explorando as Montanhas",
    summary: "Uma jornada através dos terrenos rochosos e belas paisagens.",
    likes: 120,
    shares: 45,
    content:
      "As montanhas oferecem uma beleza natural que é difícil de encontrar em qualquer outro lugar. Este post destaca algumas das vistas mais deslumbrantes que você pode encontrar. Prepare-se para se maravilhar com a majestade da natureza em seu estado mais puro e intocado. As montanhas são um refúgio para aqueles que buscam aventura e tranquilidade. Com trilhas desafiadoras e paisagens de tirar o fôlego, cada passo é uma nova descoberta. Além disso, a fauna e flora locais adicionam um toque especial à experiência, tornando cada visita única e inesquecível.",
    author: "João Silva",
    postedAt: "2024-01-15",
  },
  {
    id: 2,
    title: "A Arte de Assar",
    summary: "Descubra os segredos para pães e doces perfeitos.",
    likes: 85,
    shares: 30,
    content:
      "Assar é tanto uma arte quanto uma ciência. Este post mergulha nas técnicas e ingredientes que fazem deliciosos produtos assados. Desde a escolha da farinha até o tempo de fermentação, cada detalhe importa. Vamos explorar receitas tradicionais e inovadoras que vão transformar sua cozinha em uma padaria de primeira. Além disso, dicas sobre como ajustar receitas para diferentes climas e altitudes garantirão que seus pães e doces saiam perfeitos, não importa onde você esteja.",
    author: "Maria Souza",
    postedAt: "2024-02-10",
  },
  {
    id: 3,
    title: "Inovações Tecnológicas em 2024",
    summary:
      "Um olhar sobre as tecnologias revolucionárias que estão moldando nosso futuro.",
    likes: 200,
    shares: 75,
    content:
      "Desde avanços em IA até novos gadgets, 2024 está se preparando para ser um ano de progresso tecnológico significativo. Este post destaca os desenvolvimentos mais empolgantes. A inteligência artificial continua a evoluir, oferecendo soluções mais inteligentes e eficientes para problemas complexos. Além disso, a realidade aumentada e virtual estão se tornando mais acessíveis, transformando a maneira como interagimos com o mundo digital. Novos dispositivos vestíveis e tecnologias de saúde também prometem melhorar nossa qualidade de vida de maneiras inimagináveis.",
    author: "Alexandre Pereira",
    postedAt: "2024-03-05",
  },
];

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
          name="Feed"
          options={{
            headerLeft: null,
            gestureEnabled: false,
          }}
        >
          {(props) => <List data={POSTS} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Post" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
