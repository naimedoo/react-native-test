import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, ScrollView ,Image, Pressable, Button, Alert, ActivityIndicator} from 'react-native';

export default function App() {
  const [showLoading, setShowLoading] = useState(true)
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  return (
  <ScrollView style={styles.container}>
  <View >

   {/* <Image source={require("../test/my-app/assets/konexio-logo_1.png" )} style={{width:250, height: 100}}/> */}
    <Text style={[styles.margin, styles.textSize, styles.containerText]}>Texte avec taille spécifique</Text>
    <Text style={[styles.margin, styles.centerText, styles.containerText]}>Texte centré</Text>
    <Text style={[styles.margin, styles.boldText, styles.containerText, styles.textSize]}>Texte en gras</Text>
    <Image source={{uri:"https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png"}} style={[{width:250, height:80}, styles.logo]}/>
  </View>
 
   <Pressable>
      <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
      <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
   </Pressable>
   <ActivityIndicator size="large" color="#00ff00" />
  </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:"blue",
    flex:1,
  },
   containerText:{
     backgroundColor:"white",
     width:1200,
     height:100


  },
   margin: {
     marginTop:80,
     marginBottom:80,
     marginLeft:20
  },
   textSize : {
     fontSize:30
  },
   centerText : {
      textAlign:"center"
  },
    boldText: {
       fontWeight:"bold"
  },
  logo: {
    margin:"auto"
  },
})

