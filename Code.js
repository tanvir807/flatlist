import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople]= useState([
  {name:'Maria', key:"1"},
  {name:'Kabir', key:"2"},
  {name:'Rehnuma', key:"3"},
  {name:'Zakariya', key:"4"},
  {name:'Liana', key:"5"},
  {name:'Neha', key:"6"},
  {name:'Arosh', key:"7"},
  {name:'Ruin', key:"8"},
  {name:'Zamil', key:"9"},
  {name:'Wasi', key:"10"},


  
  ]);
  return(
    <View style={styles.container}>
      <FlatList
      // numColumns={2}
      data={people}
      renderItem={({item})=>(
        <Text style={styles.item}>My name is {item.name} & My Id is {item.key}</Text>
        
      )}
      />
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f19343',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:60,
    paddingHorizontal:30,
    fontColor:"black"
  },
  item:{
    marginTop:10,
    padding: 50,
    backgroundColor:"#92a8d1",
    fontSize: 14,
    fontColor:"white"
  }
});
