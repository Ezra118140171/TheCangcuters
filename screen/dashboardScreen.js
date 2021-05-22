import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import CategoriGridTile from "../components/CategoriGrid";
import { CATEGORIES } from "../data/Dump";

const dashboardScreen = (props) => {
  const renderGridItem = (ItemData) => {
    return (
      <CategoriGridTile
        title={ItemData.item.title}
        onSelect={() => {
          props.navigation.navigate(ItemData.item.title)
        }}
        image={ItemData.item.urlImage}
      />
    )
  }

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
    />
  )
}

export const dashboardScreenOption = (navData) => {
  return {
    headerTitle: "Halaman Dashboard",
  };
};

export default dashboardScreen;