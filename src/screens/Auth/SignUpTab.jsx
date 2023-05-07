import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../services/firebase";
import { LinearGradient } from "expo-linear-gradient";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import i18n from "../../lang/_i18n";

const SignUpTab = ({ onChangeTab }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const alert1 = i18n.t("signup.alert1");
  const alert2 = i18n.t("signup.alert2");
  const alert3 = i18n.t("signup.alert3");
  const alert4 = i18n.t("signup.alert4");
  const alert5 = i18n.t("signup.alert5");
  const alert6 = i18n.t("signup.alert6");
  const alert7 = i18n.t("signup.alert7");

  const handleSignup = () => {
    if (email.length === 0 || password.length === 0) {
      alert(alert1);
      return;
    } else if (!isEnabled) {
      alert(alert2);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user)
          .then(() => {
            alert(
              alert3
            );
          })
          .catch((error) => {
            console.log("Doğrulama e-maili gönderilemedi: ", error);
          });
        addDoc(collection(db, "users"), {
          email: email,
          uid: user.uid,
          createdAt: serverTimestamp(),
        }).then(() => {
          onChangeTab("Login");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/invalid-email") {
          alert(alert4);
        } else if(errorCode === "auth/weak-password") {
          alert(alert5);
        } else if(errorCode === "auth/email-already-in-use") {
          alert(alert6);
        }
        else{
          alert(errorMessage);
        }
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="E-Posta"
          inputMode="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity style={styles.eyeIconContainer} onPress={() => {}}>
          <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Şifre Oluştur."
          secureTextEntry={isPasswordHidden}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setIsPasswordHidden(!isPasswordHidden)}
        >
          <MaterialCommunityIcons
            name={isPasswordHidden ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", maxHeight: 40 }}
      >
        <Switch
          trackColor={{ false: "#767577", true: "#F9A26C" }}
          thumbColor={isEnabled ? "#CF2C7C" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
            {i18n.t("signup.metin1")}
          </Text>
        </TouchableOpacity>
        <View>
          <Text> {i18n.t("signup.metin2")}</Text>
        </View>
      </View>
      <LinearGradient
        colors={["#CF2C7C", "#F9A26C"]}
        start={[0, 0]}
        end={[1, 0]}
        style={{ borderRadius: 8 }}
      >
        <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
          <Text style={styles.loginButtonText}>{i18n.t("signup.metin3")}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default SignUpTab;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 30,
  },
  input: {
    backgroundColor: "#fafafa",
    borderColor: "#e7e7e7",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  eyeIconContainer: {
    position: "absolute",
    right: 12,
    top: 14,
  },
  loginButton: {
    paddingVertical: 14,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
