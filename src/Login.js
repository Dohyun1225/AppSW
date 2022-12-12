import { 
    View, 
    Text, 
    Button, 
    StyleSheet, 
    Image, 
    TextInput, 
    TouchableOpacity, } from 'react-native';
import { useState} from 'react'
import { db } from "../firebaseConfig";
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, where, query, Firestore } from "firebase/firestore";
export default function LoginScreen(props) {
    const [stuName,setstuName] = useState("")
    const [users, setUsers] = useState();
    const onChangeInput = (event) =>{
        setUserName(event)
    }

    const readfromDB = async () =>{
        try{
            const data = await getDocs(collection(db, "student"))
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            {users?.map((row) =>{
                if(stuName == row.addstuId){
                    {props.navigation.navigate("Start")}
                }
            })}
        }catch(error){
            console.log(error.message)
        }
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
                value={stuName}
                onChangeText={setstuName}
                maxLength={15} 
            />
           <TouchableOpacity onPress={readfromDB}>
            <Image 
                style={styles.LoginButton}
                source={require('../assets/LoginButton.png')}/>
            </TouchableOpacity>
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
        width:160,
        height:160, 
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
    LoginButton:{
        padding:10
    }
});