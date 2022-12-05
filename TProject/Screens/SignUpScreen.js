import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import { AuthContext } from "../App";

const SignUpScreen = ({ navigation }) => {
  const { signUp } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>회원가입</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>아이디</Text>
          <TextInput
            placeholder="아이디"
            value={userId}
            onChangeText={setUserId}
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>이름</Text>
          <TextInput
            placeholder="이름"
            value={username}
            onChangeText={setUsername}
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>비밀번호</Text>
          <TextInput
            placeholder="비밀번호"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.textInput}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>비밀번호 확인</Text>
          <TextInput
            placeholder="비밀번호 확인"
            value={repassword}
            onChangeText={setRepassword}
            secureTextEntry
            style={styles.textInput}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              signUp({ userId, username, password, repassword });
            }}
          >
            <Text style={styles.buttonText}>회원가입</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Auth")}
          >
            <Text style={styles.buttonText}>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaView>
  );
};

export default SignUpScreen;