import React, { useState } from "react";
import { StyleSheet, View, Image, TextInput, Button } from "react-native";
import { useUser } from "../contexts/UserContext";
import { API_URL } from "../constants";

export default function Login() {
  const { setUser } = useUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginAction() {
    fetch(API_URL + "/login/userlogin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        U_Name: username,
        Password: password,
      }),
    })
      .then((response) => {
        if (response.status === 404) {
          response.json().then(function (err) {
            alert(err);
          });
        } else if (response.status === 200) {
          response.json().then(function (user) {
            setUser({
              username: user.U_Name,
              role: user.Role,
            });
          });
        }
      })
      .catch((err) => alert(err.name, err.message));
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/login.png")} />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        <Button title="Login" onPress={loginAction} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  header: {
    marginTop: 30,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "tomato",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  form: {
    padding: 30,
  },
  input: {
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
