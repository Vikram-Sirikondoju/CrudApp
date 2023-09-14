import { View, Text, FlatList, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Messgae from './Messgae';

const User = () => {
    const [messages,setMessages] = useState([]);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [selectedId,setSelectedId] = useState(null);
    
    const getData = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((response)=>response.json())
        .then((data)=>setMessages(data))
    } 
    
    const addData = () =>{
        const requestBody={
            title,
            body:description
        }
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            body:JSON.stringify(requestBody)
        })
        .then((response)=>response.json())
        .then(data=>{
            if(title!=="" && description!==""){
                requestBody.id=messages.length+1;
                let updatedMessages = [...messages, requestBody]
                setMessages(updatedMessages);
                setTitle("");
                setDescription("");
                Alert.alert("Alert","Data Posted Successfully!")
            }else{
                Alert.alert("Alert","Title and Description is required")
            }
        })
    } 
    const updateData = () =>{
        const requestBody={
            title,
            body:description
        }
        fetch("https://jsonplaceholder.typicode.com/posts/" + selectedId,{
            method:"PUT",
            body:JSON.stringify(requestBody)
        })
        .then((response)=>response.json())
        .then(data=>{
            if(title!=="" && description!==""){
                let updatedMessages = [...messages];
                let index = updatedMessages.findIndex((message)=>message.id===selectedId);
                updatedMessages[index] = {...updatedMessages[index], ...requestBody}
                setMessages(updatedMessages);
                
                setTitle("");
                setDescription("");
                setSelectedId(null);
                Alert.alert("Alert","Data Updated Successfully!")
            }
        })
    }
    const deleteMessage = (id) =>{
        
        fetch("https://jsonplaceholder.typicode.com/posts/" + id,{
            method:"DELETE",
        })
        .then((response)=>response.json())
        .then(data=>{
            if(data){
                let updatedMessages = [...messages];
                let index = updatedMessages.findIndex((message)=>message.id===id);
                updatedMessages.splice(index,1);
                setMessages(updatedMessages);
                Alert("Alert","Data Deleted!")
                }
        })
    } 

    const selectedMessage = (requestBody) =>{
        setTitle(requestBody.title);
        setDescription(requestBody.description);
        setSelectedId(requestBody.id);
    }
    useEffect(()=>{
        getData();
    },[])
      return (
    <View>
        <View>
            <Text style={style.heading}>Api Data</Text>
            <Text style={style.heading}>Number of Items:{messages.length}</Text>
            <View  style={style.title}>
                <TextInput  style={style.input} 
                placeholder='Enter Title' 
                value={title} 
                onChangeText={(text)=>setTitle(text)} 
                />
                <TextInput  style={style.input} 
                placeholder='Enter Description' 
                value={description} 
                onChangeText={(text)=>setDescription(text)} 
                />
            <TouchableOpacity style={style.btn} onPress={selectedId === null ? addData : updateData}>
                <Text style={style.buttonItem}>{selectedId === null ? "AddItem" : "Update"}</Text>
            </TouchableOpacity>
            </View>
            <ScrollView>
            <View style={style.list}>
            <FlatList 
            data={messages}
            renderItem={({item})=><Messgae {...item} 
            selectedMessage={selectedMessage}
            deleteMessage={deleteMessage}
            />}
            ItemSeparatorComponent={()=>(<View style={style.bar}/>)}
            />
            </View>
            </ScrollView>
        </View>
    </View>
  )
}

export default User;

const style={
    heading:{
        fontSize:30,
        textAlign:"center",
        backgroundColor:"black",
        color:"white",
        padding:5,

    },
    bar:{
        borderWidth:1,
        borderColor:"black",
        
    },
    title:{
        justifyContent:"center",
    },
    input:{
        borderWidth:1,
        width:"90%",
        marginTop:10,
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius:10,
        textAlign:"center"
    },
    btn:{
        borderWidth:1,
        width:"90%",
        marginTop:5,
        marginLeft:"auto",
        marginRight:"auto",
        padding:5,
        borderRadius:10,
        alignItems:"center",
        backgroundColor:"blue",
        color:"white",
    },
    buttonItem:{
        color:"white",
        fontSize:20,
      },
    list:{
        height:400,
    
    }
}