import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function Content() {
  return (
    <View style={styles.content}>
      <Text style={styles.genretext}> Featured & recommended </Text>
      <View style={styles.listgames}>
        <View style={styles.game}>
          <Image
            source={require("../assets/images/steamimages/hl2.jpg")}
            style={styles.gameimage}
          ></Image>
          <View style={styles.gamebottom}>
            <Text style={styles.gametext}>Half-Life 2</Text>
            <Text style={styles.pricetext}>CDN$ 20.00</Text>
          </View>
        </View>
        <View style={styles.game}>
          <Image
            source={require("../assets/images/steamimages/portal2.jpg")}
            style={styles.gameimage}
          ></Image>
          <View style={styles.gamebottom}>
            <Text style={styles.gametext}>Portal 2</Text>
            <Text style={styles.pricetext}>CDN$ 20.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.discounttab}>
        <Text style={styles.genretext}>Discounts & Events</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "linear-gradient(#18455a, #223f5f)",
    width: "100%",
    height: "100%",
  },
  genretext: {
    color: "#ffffff",
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 15,
  },
  listgames: {
    paddingLeft: 14,
    marginTop: 8,
    marginLeft: 7,
    display: "flex",
    flexDirection: "row",
  },
  game: {
    marginRight: 15,
    width: 350,
    boxShadow: "1px 3px 8px black",
  },
  gameimage: {
    height: 200,
  },
  gamebottom: {
    backgroundImage: "linear-gradient(#000000, #223f5f)",
    height: 80,
    padding: 4,
  },
  gametext: {
    color: "#ffffff",
    fontSize: 25,
    top: -4,
  },
  pricetext: {
    color: "#ffffff",
    fontSize: 12,
    top: 6,
    left: 15,
  },
  listdiscountgame: {},
  discounttab: {
    top: 50,
    backgroundColor: "#1a2e46",
    width: "100%",
    height: 500,
  },
  discountgame: {
    marginRight: 15,
    left: 8,
    top: 10,
    width: 350,
    boxShadow: "1px 3px 8px black",
  },
  discountgameimage: {
    height: 200,
  },
  discountgamebottom: {
    backgroundImage: "linear-gradient(#000000, #223f5f)",
    height: 80,
    padding: 4,
  },
});

// steam gradient left to right
//#18455a left
//#223f5f right
