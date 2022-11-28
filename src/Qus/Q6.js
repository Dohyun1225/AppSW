import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TextInput, 
    TouchableOpacity, } from 'react-native';
export default function Q6Screen(props) {
    return (
        <View style={styles.container}>
          <Image
          style={styles.gaugebar}
          source={require('../../assets/Gauge1.png')}
          />
            <Image 
                style={styles.textbox}
                source={require('../../assets/Q6Text.png')}/>

            <Image style={styles.Qbox}
                source={require('../../assets/What.png')}/>
            <TextInput 
                style={styles.input}
                placeholder={'Write your answer'}
                multiline ={true}
                maxLength={100} />
            <TouchableOpacity onPress={()=> {props.navigation.navigate("Q6select")}}>
            <Image 
                style={styles.submit}
                source={require('../../assets/Submit.png')}/>
            </TouchableOpacity>
        </View>
)};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    gaugebar:{
      width:'66%',
    },
    textbox: {
      width:'90%',
      padding:30,
      marginTop:20
    },
    Qbox: {
        width:'88%',
        height:60,
        marginBottom:10,
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
        fontSize: 18,
    },
    submit:{
        marginLeft:160
    }
});