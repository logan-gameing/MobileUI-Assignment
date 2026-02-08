import Footer from "@/components/footer";
import { View } from "react-native";
import Content from "../components/content";
import Header from "../components/header";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header walletBalance={"2.68"}></Header>
      <Content></Content>
      <Footer></Footer>
    </View>
  );
}
