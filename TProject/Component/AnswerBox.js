import {Text, View, StyleSheet} from 'react-native'

export default function AnswerBox(props) {    
    const number=props.num
    const answer=props.ans
    const correct=props.corr 
    return(
        <View style={styles.card}>               
                <View style={styles.content}>
                    <Text style={styles.number}> {number} </Text>
                </View>
                <Text style={styles.answer}> answer : {answer} </Text>
                <Text style={styles.correct}> correct : {correct} </Text>
            </View>
    )
}
const styles = StyleSheet.create({
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