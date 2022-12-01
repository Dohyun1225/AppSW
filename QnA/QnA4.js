import {Image, Text, View, StyleSheet, ScrollView} from 'react-native'
import Question4 from '../assets/question4.png'

export default function QnA4() {     
    return(
        
        <View style={styles.container}>
            <Image
                source={Question4}
                style={{width:350, height:220, marginVertical:5}}
            ></Image>
            <ScrollView>
            <View style={styles.card}>               
                <View style={styles.content}>
                    <Text style={styles.number}> A-1 </Text>
                </View>
                <Text style={styles.answer}> answer :  </Text>
                <Text style={styles.correct}> correct :  </Text>
            </View>
            <View style={styles.card}>               
                <View style={styles.content}>
                    <Text style={styles.number}> A-2 </Text>
                </View>
                <Text style={styles.answer}> answer :  </Text>
                <Text style={styles.correct}> correct : use x as variable </Text>
            </View>
            <View style={styles.card}>               
                <View style={styles.content}>
                    <Text style={styles.number}> A-3 </Text>
                </View>
                <Text style={styles.answer}> answer :  </Text>
                <Text style={styles.correct}> correct : Karla: 2x; Elena: x+30 </Text>
            </View>
            <View style={styles.card}>               
                <View style={styles.content}>
                    <Text style={styles.number}> A-4 </Text>
                </View>
                <Text style={styles.answer}> answer :  </Text>
                <Text style={styles.correct}> correct : 4x+30 </Text>
            </View>
            <View style={styles.card}>               
                <View style={styles.content}>
                    <Text style={styles.number}> A-5 </Text>
                </View>
                <Text style={styles.answer}> answer :  </Text>
                <Text style={styles.correct}> correct : Faye </Text>
            </View>
            <View style={styles.card}>               
                <View style={styles.content}>
                    <Text style={styles.number}> B-1 </Text>
                </View>
                <Text style={styles.answer}> answer :  </Text>
                <Text style={styles.correct}> correct : 4e + 30 = 114 </Text>
            </View>
            <View style={styles.card}>               
                <View style={styles.content}>
                    <Text style={styles.number}> B-2 </Text>
                </View>
                <Text style={styles.answer}> answer :  </Text>
                <Text style={styles.correct}> correct : 21 </Text>
            </View>
            <View style={styles.card}>               
                <View style={styles.content}>
                    <Text style={styles.number}> B-3 </Text>
                </View>
                <Text style={styles.answer}> answer :  </Text>
                <Text style={styles.correct}> correct : Karla: 42; Faye: 51 </Text>
            </View>
            <View style={styles.card}>               
                <View style={styles.content}>
                    <Text style={styles.number}> B-4 </Text>
                </View>
                <Text style={styles.answer}> answer :  </Text>
                <Text style={styles.correct}> correct : Faye </Text>
            </View>
            <View style={styles.card}>               
                <View style={styles.content}>
                    <Text style={styles.number}> C-1 </Text>
                </View>
                <Text style={styles.answer}> answer :  </Text>
                <Text style={styles.correct}> correct : 84 </Text>
            </View>
            <View style={styles.card}>               
                <View style={styles.content}>
                    <Text style={styles.number}> C-2 </Text>
                </View>
                <Text style={styles.answer}> answer :  </Text>
                <Text style={styles.correct}> correct : 21 </Text>
            </View>
            <View style={styles.card}>               
                <View style={styles.content}>
                    <Text style={styles.number}> C-3 </Text>
                </View>
                <Text style={styles.answer}> answer :  </Text>
                <Text style={styles.correct}> correct : Karla: 42; Faye: 51 </Text>
            </View>
            <View style={styles.card1}>               
                <View style={styles.content}>
                    <Text style={styles.number}> C-4 </Text>
                </View>
                <Text style={styles.answer}> answer :  </Text>
                <Text style={styles.correct}> correct : Faye </Text>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
    card: {
        height: 78,
        width: 325,
        paddingTop:15,
        paddingBottom:10,
        marginTop:5,
        backgroundColor: '#FFFFFF',
        borderRadius:7,
        marginBottom:10,
    },
    card1: {
        height: 78,
        width: 325,
        paddingTop:15,
        paddingBottom:10,
        marginTop:5,
        backgroundColor: '#FFFFFF',
        borderRadius:7,
        marginBottom:10,
        marginBottom:40
    },
    number: {
        color: '#595959',
        fontWeight: 'bold',  
        left:10,
        bottom:-5
    },
    content: {
        height: 50,
        width: 50,
        paddingTop:10,
        paddingBottom:10,
        marginTop:5,
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        marginBottom:10,
        borderWidth:1,
        borderColor:'#595959',
        left:15,
        top:-5
    },
    correct: {
        color:'#A1A1A1',
        flexDirection:'row-reverse',
        left:80,
        top:-60,
        width:200,
        fontWeight:'bold'
    },
    answer: {
        color:'#000000',
        left:80,
        top:-60,
        width:200,
        fontWeight:'bold'
    }
    

})