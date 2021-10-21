import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";

import { styles } from "./styles";

function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
    </View>
  );
}

export { Home };
