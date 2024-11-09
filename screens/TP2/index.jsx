import { useNavigation } from "@react-navigation/native";
import { Button, ScrollView, View } from "react-native";

export default function TP2() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        {Array.from({ length: 16 }, (_, i) => (
          <Button
            key={i}
            title={`TP2 - ${i + 1}`}
            onPress={() => navigation.navigate(`TP2 - ${i + 1}`, { id: i + 1 })}
          />
        ))}
      </View>
    </ScrollView>
  );
}
