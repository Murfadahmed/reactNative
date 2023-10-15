import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions,Image} from 'react-native';
import {useState} from 'react';
export default function App() {
  const {width , height } = Dimensions.get('window')
    const [count ,setCount] = useState(height)
  console.log(width );
  console.log(height );
  return (
    <View style={styles.container}>
      <Text style={texts.text} >hey there Murfad malik here!</Text>
      <View style={{backgroundColor:'black' ,width :'100%' ,height:'50%',}}>
      <View>
      <Image  style={{width:340 ,height:335,borderRadius:'20px'}} source ={{uri:'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1'}} />
      </View>
      </View>
      <button style={btns.button}  onClick={(e)=>{setCount(width)}}>click here </button>
      <h1>{count}</h1>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    padding : '10px',
  },
});

const texts =  StyleSheet.create({
  text :{
    backgroundColor:'black',
    borderBlockColor : 'red',
    color : 'red' ,
    fontSize : '30px' ,
    fontWeight : '1000',
    padding : '2rem',
    borderRadius : '10px'
    // margin : '0 10px ',
  }
})

const btns = StyleSheet.create({
  button:{
    padding : '20px',
    borderRadius : '20px',
    backgroundColor : 'orange' 
  }
})