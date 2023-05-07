import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { qrCodeImage } from '../data/DataImages';
import i18n from '../lang/_i18n';

const QR = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{i18n.t("qr.metin1")}</Text>
      <Text>{i18n.t("qr.metin2")}</Text>
      <View>
        <Image
          source={qrCodeImage[0].image}
          style={{
            width: 200,
            height: 200,
            marginVertical: 30,
            alignSelf: "center",
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          <Text style={styles.code}>4507 7627 27</Text>
          <FontAwesome5 name="copy" size={20} color="black" />
        </View>
        <Text style={{ textAlign: "center" }}>
        {i18n.t("qr.metin3")}
          <Text style={{ fontWeight: "500" }}> {i18n.t("qr.metin4")}</Text> {i18n.t("qr.metin5")}{" "}
          {"\n"}  {i18n.t("qr.metin6")}
          <Text style={{ fontWeight: "500" }}>
            {" "}
            {i18n.t("qr.metin7")} {"\n"} {" "}
          </Text>
          {i18n.t("qr.metin8")}
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
      <AntDesign name="camera" size={24} color="white" />
        <Text style={{color:"white"}}>{i18n.t("qr.metin9")}</Text>
        <MaterialIcons name="keyboard-arrow-up" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default QR

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    color: "#CE716C",
    fontWeight: "700",
  },
  code: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    marginRight: 15,
  },
  button: {
    backgroundColor: "#00ADEF",
    marginTop: 30,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "65%"
  },
});