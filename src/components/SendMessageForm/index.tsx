import React, { useState } from "react";
import { TextInput, KeyboardAvoidingView, View } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../theme";
import { Button } from "../Button";

export function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        <TextInput
          keyboardAppearance="dark"
          placeholder="Qual sua expectativa para o evento?"
          placeholderTextColor={COLORS.GRAY_PRIMARY}
          multiline
          maxLength={140}
          onChangeText={setMessage}
          editable={!sendingMessage}
          style={styles.input}
        />
        <Button
          title="ENVIAR MENSAGEM"
          backgroundColor={COLORS.PINK}
          color={COLORS.WHITE}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
