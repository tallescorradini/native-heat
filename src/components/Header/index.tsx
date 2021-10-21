import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import { UserPhoto } from "../UserPhoto";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}
