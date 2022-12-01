import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState} from 'react'
import Logo from '../assets/logo.png'
import GoogleLogin from '../assets/googleLogin.png'

export default function GoogleLoginScreen(props) {
    const [userName,setUserName] = useState("")
    const onChangeInput = (event) =>{
        setUserName(event)
    }
    return (
        <View style={styles.container}>
            
            <Image
                source={Logo}
                style={styles.appLogo}
            />
            <Text style={styles.loginText}>please sign in to continue</Text>
            
            <TouchableOpacity onPress={()=>{props.navigation.navigate("Home",{userNameText:userName})}}>
            <Image
                source={GoogleLogin}
                style={styles.googleLoginButton}
            />
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
        marginTop: -100
      },
    googleLoginButton: {
        width: 230,
        height: 60,
        marginTop: 30
    }
});
