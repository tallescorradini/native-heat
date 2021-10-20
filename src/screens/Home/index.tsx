import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";

import { styles } from "./styles";

function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

export { Home };
