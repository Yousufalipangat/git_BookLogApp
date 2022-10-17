import React, { useState } from "react";

import {
   ScrollView,
   View,
   Text,
   StyleSheet,
   FlatList,
   TextInput,
   Button,
   

}

from 'react-native'

import  Icon from "react-native-vector-icons/MaterialIcons";
import {AddBook,deleteAllBook,getAllBook,deleteBook } from './Database'

export default function App(){
const [BookLib,setbookLib] = useState(getAllBook);
const [counter,setcounter]= useState(0);
const [book,setbook] = useState('');
const [auther,setauther]=useState('');
const [bookDetails,setbookDetails] = useState('');



  return(
<ScrollView style={{}} contentContainerStyle={{}}>
  <View style={{width:'100%',height:300,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
    <TextInput placeholder="Book Name" style={{borderWidth:1, width:250,borderRadius:5,marginVertical:10,padding:10}} onChangeText={(book)=>{setbook(book)}}/>
    <TextInput placeholder="Auther Name" style={{borderWidth:1, width:250,borderRadius:5,marginVertical:10,padding:10}} onChangeText={(auther)=>{setauther(auther)}}/>
    <TextInput placeholder="Book Details" style={{borderWidth:1, width:250,borderRadius:5,marginVertical:10,padding:10}} onChangeText={(details)=>{setbookDetails(details)}}/>
    <View style={{height:50,width:250}}>
    <Button style={{borderRadius:30}} title="Add Book" onPress={
      ()=>
      {
        
        AddBook(counter+"",book,auther,bookDetails);
        setcounter(counter+1);
      setbookLib(getAllBook)
      }
      }/>
    </View>
    <Button title="delete all" onPress={()=>{
      deleteAllBook()
      setbookLib(getAllBook)
      }}/>
  </View>
  
  {BookLib.map((book,index)=>{
    
    return(
      <View key={book.bookId} style={{backgroundColor:'white',margin:10,padding:10,flexDirection:'row',borderBottomWidth:1}}>
        <Text  style={{fontSize:17,color:'#666',flex:.4}}>{index+1}</Text>
        <View style={{flex:1}}>
        <Text style={{fontSize:17,color:'#666'}}>Book Name: {book.bookName}</Text>
        <Text style={{fontSize:17,color:'#666'}}>Auther: {book.bookAuther}</Text>
        <Text style={{fontSize:17,color:'#666'}}>Book details: {book.bookDetails}</Text>
        </View>
        <View style={{flex:.3}}>
          <Icon name="delete" size={23} onPress={()=>{
          deleteBook(book.bookId)
          setbookLib(getAllBook)
          }}/>
        </View>
      </View>
    )


  })}


</ScrollView>

  )

}