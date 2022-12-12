import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TextInput, 
    Modal,
    TouchableOpacity, } from 'react-native';
import React, { useState } from "react";
import { db } from '../../firebaseConfig';
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, where, query } from "firebase/firestore";
import { async } from '@firebase/util';
export default function Q1Screen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [studentAnswer, setStudentAnswer] = useState();
  const [score, setScore] = useState();
  const [users, setUsers] = useState();

  const addtoDBAnswer = async()=>{
    await addDoc(collection(db,"studentAnswer"), {
        studentAnswer:studentAnswer,
        createdAt: new Date()
    })
    setModalVisible(!modalVisible)
    setStudentAnswer("")
} 
const addtoDBScore = async()=>{
  await addDoc(collection(db,"Score"), {
      score:score,
      createdAt: new Date()
  })
  setModalVisible(!modalVisible)
  setStudentAnswer("")
} 

const readfromDB = async () =>{
  var answer = 'Wq'
  var s = 0;
  try{
      const data = await getDocs(collection(db, "studentAnswer"))
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      {users?.map((row) =>{
          if(studentAnswer == row.studentAnswer){
              if(studentAnswer == answer){
                setModalVisible(!modalVisible)
              }
          }
      })}
  }catch(error){
      console.log(error.message)
  }
}



  const updateDB = async () =>{
    try{ 
      const docRef = doc(df, "student");
      await updateDoc(docRef, {
        studentAnswer: studentAnswer,
      })
     setModalVisible(!modalVisible)
    }catch(error){
      console.log(error.message)
    }
  }

    return (
        <View style={styles.container}>
         <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
           <TouchableOpacity onPress={()=> {props.navigation.navigate("Q1select")}}>
            <Image 
            source={require('../../assets/Great.png')}
            />
            </TouchableOpacity>
        </View>
      </Modal>
          <Image
          style={styles.gaugebar}
          source={require('../../assets/Gauge1.png')}
          />
            <Image 
                style={styles.textbox}
                source={require('../../assets/Q1Text.png')}/>

            <Image style={styles.Qbox}
                source={require('../../assets/What.png')}/>
            <TextInput 
                style={styles.input}
                placeholder={'Write your answer'}
                value={studentAnswer}
                onChangeText={setStudentAnswer}
                multiline ={true}
                maxLength={100}
                />
            <TouchableOpacity onPress={readfromDB} >
            <Image 
                style={styles.submit}
                source={require('../../assets/Submit.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={addtoDBAnswer} >
            <Image 
                style={styles.submit}
                source={require('../../assets/Submit.png')}
                />
            </TouchableOpacity>
        </View>
)};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    gaugebar:{
      width:'66%',
    },
    textbox: {
      width:'90%',
      padding:30,
      marginTop:20
    },
    Qbox: {
        width:360,
        height:60,
        marginBottom:10,
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
        fontSize: 18,
    },
    submit:{
        marginLeft:160
    },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
});