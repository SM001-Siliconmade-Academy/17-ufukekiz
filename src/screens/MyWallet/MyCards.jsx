import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import i18n from "../../lang/_i18n";

const MyCards = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require(
// @ts-ignore
      "../../../assets/kart.png")} />
      <Text style={styles.title}>{i18n.t("cards.metin1")}</Text>
      <Text style={styles.subtitle}>
      {i18n.t("cards.metin2")}
      </Text>
      <TouchableOpacity>
        <View style={styles.section}>
          <Image style={styles.image2} source={require(
// @ts-ignore
          "../../../assets/mastercard.png")} />
          <Text style={{color: "#539EB1"}}>{i18n.t("cards.metin3")}</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.title}>{i18n.t("cards.metin4")}</Text>
      <Text style={styles.subtitle}>
      {i18n.t("cards.metin5")}
      </Text>
      <TouchableOpacity>
        <View style={styles.section}>
          <Image style={styles.image2} source={require(
// @ts-ignore
          "../../../assets/istanbulkart.png")} />
          <Text style={{color: "#539EB1"}}>{i18n.t("cards.metin6")}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default MyCards

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#484848",
    marginBottom: 5
  },
  subtitle: {
    fontSize: 12,
    color: "#484848",
    marginBottom: 25
  },
  image2: {
    resizeMode: "contain",
    width: 35,
    height: 35,
    marginRight: 15
  },
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    borderColor: "#539EB1",
    borderStyle: "dashed",
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 10,
    marginBottom: 20
  }
});
