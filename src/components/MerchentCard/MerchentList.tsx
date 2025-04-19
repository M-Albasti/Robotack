//* packages import
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  VirtualizedList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

//* components import
import MerchentCard from "./MerchentCard";

//* types import
import { Merchent } from "@/types/merchents";

const merchents: Merchent[] = [
  {
    id: "1",
    name: "da jaj Restaurant",
    logo: require("@/assets/images/merchentImage.png"),
    voucher: "By One Get One",
    rate: 75,
    reviewsCounter: 20,
  },
  {
    id: "2",
    name: "da jaj Restaurant",
    logo: require("@/assets/images/merchentImage.png"),
    voucher: "By One Get One",
    rate: 85,
    reviewsCounter: 90,
  },
  {
    id: "3",
    name: "da jaj Restaurant",
    logo: require("@/assets/images/merchentImage.png"),
    voucher: "By One Get One",
    rate: 90,
    reviewsCounter: 50,
  },
  {
    id: "4",
    name: "da jaj Restaurant",
    logo: require("@/assets/images/merchentImage.png"),
    voucher: "By One Get One",
    rate: 30,
    reviewsCounter: 70,
  },
  // Add more merchents as needed
];

const { width, height } = Dimensions.get("window");

const MerchentList = () => {
  const renderMerchent = ({ item }: { item: Merchent }) => (
    <MerchentCard item={item} />
  );

  return (
    <View style={styles.merchentListContainer}>
      <View style={styles.merchentTextContainer}>
        <Text style={styles.merchentListTitleStyle}>Merchent Voucher</Text>
        <TouchableOpacity style={styles.viewAllContainer}>
          <Text style={styles.viewAllStyle}>View All</Text>
          <MaterialIcons name="arrow-forward-ios" size={10} />
        </TouchableOpacity>
      </View>
      <VirtualizedList
        data={merchents}
        initialNumToRender={3}
        renderItem={renderMerchent}
        keyExtractor={(item) => item.id}
        getItem={(data: Merchent[], index: number) => data[index]}
        getItemCount={(data: Merchent[]) => data.length}
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews
      />
    </View>
  );
};

const styles = StyleSheet.create({
  merchentListContainer: {
    marginTop: 10,
    height: height * 0.17,
  },
  merchentListTitleStyle: {
    fontSize: 20,
    fontFamily: "ZainBold",
  },
  merchentTextContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewAllContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  viewAllStyle: {
    fontSize: 16,
    fontFamily: "ZainBold",
  },
});

export default MerchentList;
