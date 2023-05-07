import { StyleSheet, Text, View } from "react-native";
import React from "react";
import i18n from "../../lang/_i18n";

const WelcomeBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hello}>
        <Text style={{ fontSize: 24 }}>🙋‍♂️</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{i18n.t("welcome.hello")}</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Ufuk</Text>
      </View>
      <View style={styles.paracik}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#EDC33D",
            marginBottom: 5,
          }}
        >
          {i18n.t("welcome.clientParacik")}
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 15 }}>
        {i18n.t("welcome.paracik")}
        </Text>
        <Text style={{ fontSize: 12, textDecorationLine: "underline" }}>
        {i18n.t("welcome.goParacik")}
        </Text>
      </View>
    </View>
  );
};

export default WelcomeBar;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap : 20,
  },
  hello: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor : "white",
    height : 100,
  },
  paracik: {
    padding : 10,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor : "white",
    borderRadius: 10,
    width : 250,
    height : 100,
  },
});
