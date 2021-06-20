import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Modal,
  TextInput,
  StatusBar,
  Alert,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  async function authenticate() {
    const hasPassword = await LocalAuthentication.isEnrolledAsync();

    if (!hasPassword) return;

    const { success, error } = await LocalAuthentication.authenticateAsync();

    if (success) {
      navigation.navigate("Senhas");
      setSenha("");
    } else {
      Alert.alert("A autenticação falhou. Por favor, digite sua senha!");
    }

    setIsModalVisible(false);
  }

  Platform.OS === "ios" && authenticate();
  const nvpass = "123456789";
  const navigation = useNavigation();
  const [senha, setSenha] = useState("");
  function esenha() {
    if (senha === nvpass) {
      navigation.navigate("Senhas");
      setSenha("");
    }
  }

  esenha();
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor="#000000"></StatusBar>
      <TextInput
        style={styles.textInput}
        placeholder="Digite a senha"
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}
        value={senha}
      ></TextInput>
      {Platform.OS === "android" && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onShow={authenticate}
        >
          <View style={styles.modal}>
            <Text style={styles.authText}>
              Autentique-se utilizando sua digital
            </Text>
            <TouchableOpacity
              onPress={() => {
                LocalAuthentication.cancelAuthenticate();
                setIsModalVisible(false);
              }}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    alignItems: "center",
    marginTop: 25,
  },
  textTitulo: {
    fontSize: 40,
    color: "#fff",
  },
  textInput: {
    textAlign: "center",
    width: 300,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  txtBtn: {
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#333",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
  },
  cancelText: {
    color: "red",
    fontSize: 16,
  },
  authText: {
    color: "white",
    fontSize: 16,
  },
});
