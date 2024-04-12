import { ScrollView, View } from "react-native";
import { styles } from "./Src/Styles/StylesSheet";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <ScrollView horizontal={false}>
        <ScrollView horizontal={true}>
          <View style={styles.cont}>
            <View style={[styles.body, { backgroundColor: "maroon" }]}></View>
            <View style={[styles.body, { backgroundColor: "red" }]}></View>
            <View style={[styles.body, { backgroundColor: "crimson" }]}></View>
            <View style={[styles.body, { backgroundColor: "orange" }]}></View>
            <View style={[styles.body, { backgroundColor: "#FFA07A" }]}></View>
            <View style={[styles.body, { backgroundColor: "#FFFFE0" }]}></View>
            <View style={[styles.body, { backgroundColor: "yellow" }]}></View>
            <View style={[styles.body, { backgroundColor: "#90EE90" }]}></View>
            <View style={[styles.body, { backgroundColor: "green" }]}></View>
            <View style={[styles.body, { backgroundColor: "blue" }]}></View>
            <View style={[styles.body, { backgroundColor: "#9370DB" }]}></View>
            <View style={[styles.body, { backgroundColor: "purple" }]}></View>
            <View style={[styles.body, { backgroundColor: "#E6E6FA" }]}></View> 
            <View style={[styles.body, { backgroundColor: "#E6E6FA" }]}></View>
            <View style={[styles.body, { backgroundColor: "pink" }]}></View>
          </View>
          <View style={styles.footer} />
        </ScrollView>
      </ScrollView>
    </View>
  );
}
