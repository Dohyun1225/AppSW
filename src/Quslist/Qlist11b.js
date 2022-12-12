import { 
    View, 
    Text, 
    StyleSheet, 
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { db } from '../../firebaseConfig';
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, where, query } from "firebase/firestore";
import { async } from '@firebase/util';
export default function Qlist11bScreen(props) {
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
const readfromDB = async () =>{
  var answer = '11'
  var s = 0;
  try{
      const data = await getDocs(collection(db, "studentAnswer"))
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      {users?.map((row) =>{
          if(studentAnswer == row.studentAnswer){
              if(studentAnswer == answer){
                {props.navigation.navigate("Q1select")}
              }
          }
      })}
  }catch(error){
      console.log(error.message)
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
                source={require('../../assets/Q1Text.png')}/>
                </View>
                <View style={styles.block2}>
                <Text style={styles.QText}>Ok, your 
equation is equivalent
to 3.25 + 7.50p = 85.75
Can you solve to find the value of p?
</Text>
                <TextInput
                style={styles.input}
                placeholder={'Write your answer'}
                value={studentAnswer}
                onChangeText={setStudentAnswer}
                multiline ={true}
                maxLength={100}/>
            <TouchableOpacity onPress={readfromDB}>
            <Image 
                style={styles.submit}
                source={require('../../assets/Submit.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={addtoDBAnswer}>
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