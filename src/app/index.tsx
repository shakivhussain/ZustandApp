import { Button, StyleSheet, Text, View } from "react-native";
import { useCounterStore } from "../store/store";
import { useContext } from "react";
import ComponentA from "../components/ComponentA";

export default function Page() {

  const counter = useCounterStore(state => state.count)
  const increment = useCounterStore((state) => state.increment)

  const decrement = useCounterStore((state) => state.decrement)


  return (
    <View style={styles.container}>

      <Text >{counter}</Text>

      <ComponentA />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
