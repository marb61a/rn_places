import React from 'react'; 
import {Text, View, StyleSheet, Touchable} from 'react-native';

const listItem = () => (
  <Touchable>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </Touchable>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee"  
  }
})

export default listItem;