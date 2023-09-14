import { View, Text,Image } from 'react-native';
import React,{useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Register from './Register';
import Login from './Login';
import User from './User';
const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('./assets/1.jpg'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('./assets/1.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('./assets/1.jpg'),
      backgroundColor: '#22bcb5',
    }
  ];
const Dashboard = () => {
    const [showRealApp,setShowRealApp] = useState(false);
    const [display,setDisplay] =useState("Register");
   const _renderItem = ({ item }) => {
        return (
          <View style={[styles.slide,{backgroundColor:item.backgroundColor}]} >
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} style = {styles.image}/>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      }
    const _onDone = () => {
        setShowRealApp(true)
      }
      if (showRealApp) {
        if(display==="Register"){
            return <Register setDisplay={(text)=>{setDisplay(text)}}/>;
        }else if(display==="Login"){
            return <Login setDisplay={(text)=>{setDisplay(text)}}/>;
        }else if(display==="User"){
            return <User setDisplay={(text)=>{setDisplay(text)}}/>;
        }
      } else {
        return <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone}/>;
      }
}

export default Dashboard;

const styles={
    image:{
        width:350,
        height:350,
        margin:10,
        borderRadius:20
    },  
    slide:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    title:{
        fontSize:30,
    },
    text:
    {
        fontSize:20
    } 
}