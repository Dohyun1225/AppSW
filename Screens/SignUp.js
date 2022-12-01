import { View, Text, Button, StyleSheet, Image, TextInput } from 'react-native';
import Logo from '../assets/logo.png'
import User from '../assets/user.png'
import Password from '../assets/password.png'
export default function SignUpScreen(props) {
    
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
                maxLength={15}
            />
            <TextInput 
                style={styles.input}
                placeholder={'Password'}
                maxLength={15}
            />
            <TextInput 
                style={styles.input}
                placeholder={'Class'}
                maxLength={2}
            />
            <Button 
                title='Sign Up'
                color="#6C4BC7"
                onPress={()=> {props.navigation.navigate("Login")}}
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
