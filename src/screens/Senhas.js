import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Modal,
  TextInput,
  AsyncStorageStatic,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TaskList from "./taskList";
import TaskListCard from "./taskListCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import randomColor from "randomcolor";

export default function Senhas() {
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [openV, setOpenV] = useState(false);
  const [input, setInput] = useState("");
  const [inputUser, setInputUser] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputsenha, setInputsenha] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    async function loadTask() {
      const taskStorange = await AsyncStorage.getItem("@task");

      if (taskStorange) {
        setTask(JSON.parse(taskStorange));
      }
    }

    loadTask();
  }, []);

  useEffect(() => {
    async function saveTask() {
      await AsyncStorage.setItem("@task", JSON.stringify(task));
    }
    saveTask();
  }, [task]);

  function handleAdd() {
    if (input === "") return;

    const data = {
      key: input,
      task: input,
      user: inputUser,
      email: inputEmail,
      senha: inputsenha,
    };

    setTask([...task, data]);
    setOpen(false);
    setInput("");
    setInputUser("");
    setInputsenha("");
    setInputEmail("");
  }

  const handleDelete = useCallback((data) => {
    const find = task.filter((r) => r.key !== data.key);
    setTask(find);
  });
  const colo = randomColor({
    luminosity: "bright",
    format: "rgb", // e.g. 'rgb(225,200,20)'
  });

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.titulo}>
        <Text style={styles.textTitulo}>Senhas</Text>
      </View>
      <FlatList
        numColumns={2}
        marginVertical={5}
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task.sort((a, b) => a.task.localeCompare(b.task))}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TaskList data={item} handleDelete={handleDelete} />
        )}
      />

      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: colo,
          }}
        >
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => setOpen(false)}
              style={styles.modalbtn}
            >
              <Ionicons name="md-arrow-back" size={40} color="#fff"></Ionicons>
            </TouchableOpacity>
          </View>

          <View animation="fadeInUp" useNativeDriver style={styles.corpoModal}>
            <TextInput
              placeholder="Qual o aplicativo?"
              textAlign="center"
              style={styles.TextInput}
              maxLength={30}
              autoCorrect={false}
              value={input}
              onChangeText={(texto) => setInput(texto)}
            ></TextInput>
            <TextInput
              placeholder="Qual o usuario?"
              textAlign="center"
              style={styles.TextInput}
              maxLength={30}
              autoCorrect={false}
              value={inputUser}
              onChangeText={(texto) => setInputUser(texto)}
            ></TextInput>
            <TextInput
              placeholder="Qual o Email?"
              textAlign="center"
              style={styles.TextInput}
              maxLength={30}
              autoCorrect={false}
              value={inputEmail}
              onChangeText={(texto) => setInputEmail(texto)}
            ></TextInput>
            <TextInput
              placeholder="Senha?"
              textAlign="center"
              style={styles.TextInput}
              maxLength={30}
              autoCorrect={false}
              value={inputsenha}
              onChangeText={(texto) => setInputsenha(texto)}
            ></TextInput>

            <TouchableOpacity style={styles.btnAdd} onPress={handleAdd}>
              <Text style={styles.TxtBtn}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
      <TouchableOpacity style={styles.btAdd} onPress={() => setOpen(true)}>
        <Ionicons name="add-circle" color="#0094ff" size={65}></Ionicons>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#0d212f",
  },
  Vcards: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  cards: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    borderRadius: 15,
    height: 120,
    backgroundColor: "#000adf",
    elevation: 2,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  titulo: {
    alignItems: "center",
    marginTop: 25,
  },
  textTitulo: {
    fontSize: 40,
    color: "#fff",
  },
  btAdd: {
    position: "absolute",
    bottom: 15,
    right: 3,
    elevation: 2,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  modalbtn: {
    marginLeft: 5,
    marginRight: 5,
  },
  modalHeader: {
    marginTop: 10,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 20,
    alignItems: "center",
  },
  tituloModal: {
    fontSize: 38,
    color: "#fff",
    marginLeft: 15,
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
  btnAdd: {
    alignItems: "center",
    alignContent: "center",
    marginLeft: 120,
    marginRight: 10,
    marginTop: 50,
    backgroundColor: "#fff",
    padding: 9,
    height: 40,
    width: 190,
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
  btback: {
    position: "absolute",
    bottom: 90,
    right: 3,
    elevation: 2,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  TxtBtn: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
