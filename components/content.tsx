import { Image, StyleSheet, Text, View } from "react-native";

export default function Content() {
  return (
    <View style={styles.content}>
      <View style={styles.listgames}>
        <Text>hello</Text>
        <Image src="../assets/images/steamimages/hl2.jpg"></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundImage: "linear-gradient(#18455a, #223f5f)",
    width: "100%",
    height: "100%",
  },
  game: {},
  listgames: {},
  genretext: {},
  pricetext: {},
});

// steam gradient left to right
//#18455a left
//#223f5f right
