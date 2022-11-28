import { 
    View, 
    Text, 
    StyleSheet, 
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
export default function Qlist53bScreen(props) {
    return (
        <View style={styles.container}>
        <View style={styles.block1}>
          <Image
          style={styles.gaugebar}
          source={require('../../assets/Gauge2.png')}
          />
            <Image 
                style={styles.textbox}
                source={require('../../assets/Q5Text.png')}/>
                </View>
                <View style={styles.block2}>
                <Text style={styles.QText}>Nice work! Now, how many times can Mario cut 8¼-inch sections from the rope before he has no rope left?</Text>
                <TextInput
                style={styles.input}
                placeholder={'Write your answer'}
                multiline ={true}
                maxLength={100}/>
            <TouchableOpacity onPress={()=> {props.navigation.navigate("Q5select")}}>
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