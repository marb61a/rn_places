import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import ListItem from "../ListItem/ListItem";

const placeList = props => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem key={i} placeName={place} onItemPressed={}/>
  ));
  return(
    <View style={styles.listContainer}>{placesOutput}</View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});