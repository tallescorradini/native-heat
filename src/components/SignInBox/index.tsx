import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../theme";
import { Button } from "../Button";

export function SignInBox() {
  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
      />
    </View>
  );
}
