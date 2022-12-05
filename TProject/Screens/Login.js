import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState} from 'react'
import Logo from '../assets/logo.png'
import User from '../assets/user.png'
import Password from '../assets/password.png'
import React from 'react';
export default function LoginScreen(props) {
    const [userName,setUserName] = useState("")
    const onChangeInput = (event) =>{
        setUserName(event)
    }
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={User}
                    style={styles.userIcon}
                />
                <Image 
                    source={Password}
                    style={styles.passwordIcon}
                />
            </View>
            <Image
                source={Logo}
                style={styles.appLogo}
            />
            <Text style={styles.loginText}>please sign in to continue</Text>
            
            <TextInput 
                style={styles.input}
                placeholder={'User name'}
                maxLength={15}
                value={userName}
                onChangeText={onChangeInput}
            />
            <TextInput 
                style={styles.input}
                placeholder={'Password'}
                maxLength={15}
            />
            
            <Button 
                title='LOGIN'
                color="#6C4BC7"
                onPress={()=>{props.navigation.navigate("Home",{userNameText:userName})}}
            />

            <TouchableOpacity onPress={()=> {props.navigation.navigate("SignUp")}}>
                <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    
    );
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
      },
    appLogo: {
        width:140,
        height:140, 
        marginBottom:40,
      },
    loginText: {
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
    signUp: {
        fontSize: 20,
        color:'#595959',
        textDecorationLine:'underline',
        marginTop:130
    },
    userIcon: {
        width:20,
        height:23,
        bottom:-280,
        left:-120,
    },
    passwordIcon: {
        width:20,
        height:21,
        bottom:-320,
        left:-120,
    }
});
