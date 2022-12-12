import { 
    View, 
    Text, 
    StyleSheet, 
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import React, { useState } from "react";
import { db } from '../../firebaseConfig';
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, where, query } from "firebase/firestore";
import { async } from '@firebase/util';
export default function Qlist21Screen(props) {
  
  const [studentAnswer, setStudentAnswer] = useState();

  const addtoDBAnswer = async()=>{
    await addDoc(collection(db,"studentAnswer"), {
        studentAnswer:studentAnswer,
        createdAt: new Date()
    })
    setModalVisible(!modalVisible)
    setStudentAnswer("")
} 

  const CheckAnswer = async()=>{
    var answer = '16 1/8 miles'
    var string = studentAnswer;
    var s = 0;
    if(string == answer){
      {props.navigation.navigate("Qlist21b")}
      alert("good")
    }
} 

    return (
        <View style={styles.container}>
        <View style={styles.block1}>
          <Image
          style={styles.gaugebar}
          source={require('../../assets/Gauge2.png')}
          />
            <Image 
                style={styles.textbox}
                source={require('../../assets/Q2Text.png')}/>
                </View>
                <View style={styles.block2}>
                <Text style={styles.QText}>Let’s add up Jen’s total from Monday through Thursday. How many miles has she run?</Text>
                <TextInput
                style={styles.input}
                placeholder={'Write your answer'}
                value={studentAnswer}
                onChangeText={setStudentAnswer}
                multiline ={true}
                maxLength={100}/>
            <TouchableOpacity onPress={addtoDBAnswer}>
            <Image 
                style={styles.submit}
                source={require('../../assets/Submit.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={CheckAnswer}>
            <Image 
                style={styles.submit}
                source={require('../../assets/Submit.png')}/>
            </TouchableOpacity>
        </View>
        </View>
)};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    block1:{
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    block2:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    gaugebar:{
      marginTop: 120,
      width:'66%',
    },
    textbox: {
      width:'90%',
      padding:30,
      marginTop:20,
      marginBottom:60,
    },
    QText: {
        paddingLeft:20,
        paddingRight:20,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    input:{
        width:'88%',
        height:200,
        borderColor:'#848484',
        borderWidth:1,
        marginBottom:15,
        marginTop:15,
        padding:20,
        textAlignVertical:"top",
        fontSize: 16,
    },
    submit:{
        marginLeft:160
    }
});