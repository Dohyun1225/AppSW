import { 
    View, 
    Text, 
    Button, 
    StyleSheet, 
    Image, 
    TextInput, 
    TouchableOpacity, } from 'react-native';
import { useState} from 'react'
import Input from 'react-native-input-style';
export default function LoginScreen(props) {
    const [userName,setUserName] = useState("")
    const onChangeInput = (event) =>{
        setUserName(event)
    }
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    style={styles.userIcon}
                    source={require('../assets/User.png')}
                />
            </View>
            <Image
                style={styles.appLogo} 
                source={require('../assets/Logo.png')}
            />
            <Text style={styles.loginText}>please sign in to continue</Text>

            <TextInput 
                style={styles.input}
                placeholder={'User name'}
                maxLength={15} 
            />
            <Button 
                title='LOGIN'
                color="#6C4BC7"
                onPress={()=>{props.navigation.navigate("Start",{userNameText:userName})}}
            />

            <TouchableOpacity onPress={()=> {props.navigation.navigate("Signup")}}>
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
        bottom:-260,
        left:-120,
    },
});