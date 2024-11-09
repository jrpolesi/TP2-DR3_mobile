import { Image, ScrollView, StyleSheet, Text } from "react-native";

const PROFILE = {
  img: "https://via.placeholder.com/200",
  name: "João Paulo",
  address: "Rua primeiro de maio, nº 0",
  phone: "(11) 99999-9999",
  email: "paulo@email.com",
  bio: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

export function About() {
  return (
    <ScrollView style={aboutStyle.container}>
      <Image source={{ uri: PROFILE.img }} style={aboutStyle.image} />

      <Text style={aboutStyle.name}>{PROFILE.name}</Text>
      <Text style={aboutStyle.address}>{PROFILE.address}</Text>

      <Text style={aboutStyle.phone}>{PROFILE.phone}</Text>
      <Text style={aboutStyle.email}>{PROFILE.email}</Text>

      <Text style={aboutStyle.bio}>{PROFILE.bio}</Text>
    </ScrollView>
  );
}

const aboutStyle = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderWidth: 1,
    marginBottom: 20,
    alignSelf: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  address: {
    fontSize: 16,
  },
  phone: {
    marginTop: 20,
    fontSize: 16,
  },
  email: {
    marginTop: 8,
    fontSize: 16,
  },
  bio: {
    fontSize: 18,
    marginTop: 20,
  },
});
