import { 
    View, 
    Text, 
    Button, 
    StyleSheet, 
    Image, 
    TextInput } from 'react-native';
  import { db } from "../firebaseConfig";
  import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, where, query } from "firebase/firestore";
  import { useEffect, useState } from "react";
  import {async} from "@firebase/util"

export default function SignupScreen(props) {

      const [addstuId, setstuAddId] = useState("");
      const [addstuClass, setstuAddClass] = useState();

  const addtoDB = async()=>{
    await addDoc(collection(db,"student"), {
        addstuId:addstuId,
        addstuClass:addstuClass,
        createdAt: new Date()
    })
    alert("Membership registration completed")
    setstuAddId("")
    setstuAddClass("")
}

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/User.png')}
        style={styles.userIcon}/>
      <Image 
        source={require('../assets/User.png')}
        style={styles.classIcon}/>
      <Image
        source={require('../assets/Logo.png')}
        style={styles.appLogo}/>
      <Text style={styles.signUpText}>create your account</Text>
      <TextInput 
        style={styles.input}
        placeholder={'User name'}
        value={addstuId}
        onChangeText={setstuAddId}
        maxLength={15}
        />
      <TextInput 
        style={styles.input}
        placeholder={'Class'}
        value={addstuClass}
        onChangeText={setstuAddClass}
        maxLength={2}/>
      <Button 
        title='Sign Up'
        color="#6C4BC7"
        onPress={()=> {props.navigation.navigate("Login")}}/>
      <Button
                title='tset'
                onPress={addtoDB}
            />  
        </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
      },
    appLogo: {
        width:140,
        height:140, 
        marginBottom:40,
        marginTop:-150
      },
    signUpText: {
        fontSize: 18,
        marginBottom:20,
        color:'#595959'
    },
    input: {
        width:'70%',
        height:45,
        borderColor:'#848484',
        borderWidth:1,
        marginBottom:15,
        paddingLeft:50,
    },
    userIcon: {
        width:20,
        height:23,
        bottom:-134,
        left:-120,
    },
    classIcon: {
        width:20,
        height:23,
        bottom:-170,
        left:-120,
    }
});