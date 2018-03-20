import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// Just like in React web apps custom components start with uppercase characters
import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from ".src/components/PlaceList/PlaceList";

export default class App extends React.Component {
  state = {
    places: []
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      }
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place}/>
    ))

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={{width: 300}}
            placeholder="A beautiful place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button 
            title="add" 
            style={styles.placeButton} 
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"    
  }
});
