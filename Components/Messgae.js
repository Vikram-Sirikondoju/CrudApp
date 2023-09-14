import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const Messgae = ({userId,id,body,title, selectedMessage, deleteMessage }) => {
  return (
    <View  style={style.content}>
      <Text style={style.title}>{id}.{title}</Text>
      <Text style={style.body}>{body}</Text>
      <TouchableOpacity style={style.btn1} onPress={()=>{selectedMessage({id,title,description:body})}}>
      <Text style={style.buttonItem}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.btn2} onPress={()=>deleteMessage(id)}>
        <Text style={style.buttonItem}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Messgae;


const style={ 
  body:{
    padding:5,
    fontSize:
    20,
  },
  title:{
    padding:5,
    fontSize:20,
    fontWeight:"bold"
  },
  content:{
    padding:10,
    margin:5,
  },
  buttonItem:{
    color:"white",
    fontSize:20,
  },
  btn1:{
    borderWidth:1,
    width:"90%",
    marginTop:5,
    marginLeft:"auto",
    marginRight:"auto",
    padding:5,
    borderRadius:10,
    alignItems:"center",
    backgroundColor:"green",
    color:"white",
},
  btn2:{
    borderWidth:1,
    width:"90%",
    marginTop:5,
    marginLeft:"auto",
    marginRight:"auto",
    padding:5,
    borderRadius:10,
    alignItems:"center",
    backgroundColor:"red",
},
}