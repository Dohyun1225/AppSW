import { 
    View, 
    Text, 
    Button, 
    StyleSheet, 
    Image, 
    TextInput } from 'react-native';
export default function SignupScreen(props) {
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
        maxLength={15}
        />
      <TextInput 
        style={styles.input}
        placeholder={'Class'}
        maxLength={2}/>
      <Button 
        title='Sign Up'
        color="#6C4BC7"
        onPress={()=> {props.navigation.navigate("Login")}}/>
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