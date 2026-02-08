import { View } from "react-native";
import Content from "../components/content";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Content></Content>
    </View>
  );
}