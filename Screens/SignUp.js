import { View, Text, Button, StyleSheet, Image, TextInput } from 'react-native';
import Logo from '../assets/logo.png'
import User from '../assets/user.png'
import Password from '../assets/password.png'
import { db } from "../firebaseConfig";
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import {async} from "@firebase/util"

export default function SignUpScreen(props) {


        const [addId, setAddId] = useState("");
        const [addPassword, setAddPassword] = useState("");
        const [addClass, setAddClass] = useState();
        const [users, setUsers] = useState();
        const [id, setID] = useState();
    
        const addtoDB = async()=>{
            await addDoc(collection(db,"user"), {
                addId:addId,
                addPassword:addPassword,
                addClass:addClass,
                createdAt: new Date()
            })
            alert("Membership registration completed")
            setAddId("")
            setAddPassword("")
            setAddClass("")
        }
        const readfromDB = async () =>{
            try{
                const data = await getDocs(collection(db, "user"))
                setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                {users?.map((row) =>{
                    if(userName == row.addId && userPassword == row.addPassword){
                        {props.navigation.navigate("Home",{userNameText:userName})}
                    }
                })}
            }catch(error){
                console.log(error.message)
            }
        }

        const updateDB = async () =>{
            try{ 
              const docRef = doc(df, "user", addId);
              await updateDoc(docRef, {
                addId:addId,
                addPassword:addPassword,
                addClass:addClass,
                createdAt: new Date()
              })
              alert("updated!")
              readfromDB()
            }catch(error){
              console.log(error.message)
            }
          }
        

        
    
    return (

        <View style={styles.container}>
            
                <Image 
                    source={User}
                    style={styles.userIcon}
                />
                <Image 
                    source={Password}
                    style={styles.passwordIcon}
                />
                <Image 
                    source={User}
                    style={styles.classIcon}
                />
           
            <Image
                source={Logo}
                style={styles.appLogo}
            />
            <Text style={styles.signUpText}>create your account</Text>
            
            <TextInput 
                style={styles.input}
                placeholder={'User name'}
                value = {addId}
                onChangeText={setAddId}
                maxLength={15}
            />
            <TextInput 
                style={styles.input}
                placeholder={'Password'}
                value = {addPassword}
                onChangeText={setAddPassword}
                maxLength={15}
            />
            <TextInput 
                style={styles.input}
                placeholder={'Class'}
                value = {addClass}
                onChangeText={setAddClass}
                maxLength={2}
            />
            <Button 
                title='Sign Up'
                color="#6C4BC7"
                onPress={()=> {props.navigation.navigate("Login")}}
            />
            <Button
                title='tset'
                onPress={addtoDB}
            />
                <Button
                title='tset'
                onPress={updateDB}
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
        bottom:-150,
        left:-120,
    },
    passwordIcon: {
        width:20,
        height:21,
        bottom:-190,
        left:-120,
    },
    classIcon: {
        width:20,
        height:23,
        bottom:-230,
        left:-120,
    }
});
