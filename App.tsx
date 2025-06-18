import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import data from "./data"; // Verilerinizi buradan alıyorsunuz
import VerticalList from "./VerticalList"; // Dosya adını doğru yazın

export default function App() {
  return (
    <View style={styles.container}>
      <VerticalList data={data} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
  },
});
