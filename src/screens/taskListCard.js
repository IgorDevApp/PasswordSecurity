import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  TextInput,
  Card,
  length,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
//Quando recebe coloca chaves:Estou recebendo meu data
export default function TaskListCard({ data, handleDelete }) {
  let nome = data.task;
  const [Open, setOpen] = useState(false);
  function renderIcon() {
    if (nome == "instagram") {
      return (
        <View>
          <Ionicons name="logo-instagram" color="#000" size={25}></Ionicons>
        </View>
      );
    }
    if (nome == "facebook") {
      return (
        <View>
          <Ionicons name="logo-facebook" color="#000" size={25}></Ionicons>
        </View>
      );
    }
    if (nome == "amazon") {
      return (
        <View>
          <Ionicons name="logo-amazon" color="#000" size={25}></Ionicons>
        </View>
      );
    }
    if (nome == "twitter") {
      return (
        <View>
          <Ionicons name="logo-twitter" color="#000" size={25}></Ionicons>
        </View>
      );
    }
    if (nome == "github") {
      return (
        <View>
          <Ionicons name="logo-github" color="#000" size={25}></Ionicons>
        </View>
      );
    }
    if (
      nome == "windows" ||
      nome == "pc" ||
      nome == "computador" ||
      nome == "notebook"
    ) {
      return (
        <View>
          <Ionicons name="logo-windows" color="#000" size={25}></Ionicons>
        </View>
      );
    }
    if (nome == "steam") {
      return (
        <View>
          <Ionicons name="logo-steam" color="#000" size={25}></Ionicons>
        </View>
      );
    }
    if (nome == "twitch") {
      return (
        <View>
          <Ionicons name="logo-twitch" color="#000" size={25}></Ionicons>
        </View>
      );
    } else {
      return <Text>{data.task}</Text>;
    }
  }
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.tsj} onPress={() => setOpen(true)}>
        <View style={styles.Container}>
          <View>{renderIcon()}</View>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleDelete(data)}>
            <Ionicons name="trash" color="#fff" size={30}></Ionicons>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Modal animationType="fade" transparent={true} visible={Open}>
        <SafeAreaView style={styles.modalComp}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => setOpen(false)}
              style={styles.modalbtn}
            >
              <Ionicons name="close-circle" size={23} color="#fff"></Ionicons>
            </TouchableOpacity>
            <View style={{ width: 300 }}>
              <Text style={styles.tituloModal}>{data.task}</Text>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tsj: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  Container: {
    width: 150,
    height: 80,
    margin: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 7,
    elevation: 1.5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  TextAviso: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 60,
    textAlign: "center",
    zIndex: 9,
  },
  ModalContainer: {
    width: 345,
    height: 55,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 7,
    elevation: 1.5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  ContainerCit: {
    width: 345,
    height: 158,
    margin: 8,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 7,
    elevation: 1.5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  modalComp: {
    width: 370,
    height: 600,
    backgroundColor: "#4969e1",
    position: "absolute",
    alignSelf: "center",
    marginTop: 70,
    borderRadius: 10,
    padding: 7,
    elevation: 50,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  div: {
    width: 345,
  },
  modalbtn: {
    marginLeft: 5,
    marginRight: 5,
  },
  Text: {
    color: "#121212",
    fontSize: 20,
    paddingLeft: 10,
  },
  TextAt: {
    color: "#121212",
    fontSize: 20,
    paddingLeft: 10,
  },
  Temp: {
    textAlignVertical: "center",
    fontSize: 23,
    textAlign: "center",
    padding: 2,
    fontWeight: "bold",
  },
  tempvi: {
    position: "absolute",
    left: 240,
    width: 45,
    height: 47,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 5,
    padding: 7,
    elevation: 1.5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  Epvi: {
    position: "absolute",
    left: 295,
    width: 45,
    height: 47,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 5,
    padding: 7,
    elevation: 1.5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },

  modal: {
    flex: 1,
    backgroundColor: "#4834df",
  },
  modalbtn: {
    marginLeft: 5,
    marginRight: 5,
    position: "absolute",
    left: 1,
    right: 1,
  },
  modalHeader: {
    marginTop: 10,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 20,
  },
  tituloModal: {
    fontSize: 20,
    color: "#fff",
    textAlignVertical: "center",
    marginLeft: 60,
    textAlign: "center",
  },
  corpoModal: {
    marginTop: 15,
  },
  TextInput: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: "#fff",
    padding: 9,
    height: 90,
    textAlignVertical: "center",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    color: "#000",
  },
  TempInput: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: "#fff",
    padding: 9,
    height: 50,
    textAlignVertical: "center",
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    color: "#000",
  },
  btnAdd: {
    alignItems: "center",
    alignContent: "center",
    marginLeft: 105,
    marginRight: 10,
    marginTop: 100,
    backgroundColor: "#fff",
    padding: 9,
    height: 40,
    width: 200,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    color: "#000",
  },
});
