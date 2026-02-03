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
        </View>{" "}
        {/* featured ends here and discounts begins */}
      </View>
      <View style={styles.eventtab}>
        <Text style={styles.genretext}>Discounts & Events</Text>
        <View style={styles.listeventgame}>
          <View style={styles.eventgame}>
            <Image
              source={require("../assets/images/steamimages/event1.jpg")}
              style={styles.eventgameimage}
            ></Image>
            <View style={styles.eventgamebottom}>
              <Text style={styles.eventtext}>MIDWEEK DEAL</Text>
              <Text style={styles.offertext}>Offer ends 9 Feb @ 11:00am.</Text>
              <Text style={styles.discounttext}>Up to -90%</Text>
            </View>
          </View>
          <View style={styles.eventgame}>
            <Image
              source={require("../assets/images/steamimages/event2.png")}
              style={styles.eventgameimage}
            ></Image>
            <View style={styles.eventgamebottom}>
              <Text style={styles.eventtext}>MIDWEEK DEAL</Text>
              <Text style={styles.offertext}>Offer ends 9 Feb @ 11:00am.</Text>
              <Text style={styles.discounttext}>Up to -90%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#18455a",
    width: "100%",
    height: "100%",
  },
  genretext: {
    color: "#ffffff",
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 10,
  },
  listgames: {
    paddingLeft: 14,
    marginTop: 8,
    marginLeft: 3,
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
    backgroundColor: "#142538",
    height: 80,
    padding: 4,
  },
  gametext: {
    color: "#ffffff",
    fontSize: 25,
    top: -4,
    fontWeight: "500",
  },
  pricetext: {
    color: "#ffffff",
    fontSize: 12,
    top: 6,
    left: 15,
  },
  listeventgame: {
    marginTop: 8,
    marginLeft: 3,
    display: "flex",
    flexDirection: "row",
  },
  eventtab: {
    top: 50,
    backgroundColor: "#1a2e46",
    width: "100%",
    height: 500,
    paddingTop: 5,
  },
  eventgame: {
    marginRight: 15,
    left: 8,
    top: 10,
    width: 300,
    boxShadow: "1px 3px 8px black",
  },
  eventgameimage: {
    height: 300,
  },
  eventgamebottom: {
    backgroundColor: "#1b5376",
    height: 120,
    padding: 4,
  },
  eventtext: {
    color: "#ffffff",
    fontSize: 20,
    top: 5,
    left: 5,
  },
  offertext: {
    color: "#DFDFDF",
    fontSize: 11,
    top: 5,
    left: 7,
  },
  discounttext: {
    color: "#b4e220",
    backgroundColor: "#4b6b22",
    width: 115,
    fontSize: 20,
    left: 20,
    top: 25,
    padding: 2,
    paddingLeft: 5,
    paddingRight: 4,
    fontWeight: 500,
  },
});

// steam gradient left to right
//#18455a left
//#223f5f right
