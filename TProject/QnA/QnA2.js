import {Image, View, StyleSheet, ScrollView} from 'react-native'
import Question2 from '../assets/question2.png'
import AnswerBox from '../Component/AnswerBox'

export default function QnA2() {     
    return(
        
        <View style={styles.container}>
            <Image
                source={Question2}
                style={{width:350, height:200, marginVertical:5}}
            ></Image>
            <ScrollView>
                <AnswerBox num="A-1" ans="" corr="16 1/8 miles"/>
                <AnswerBox num="A-2" ans="" corr="5 7/8 miles"/>
                <AnswerBox num="B-1" ans="" corr="16 1/8 + m = 22"/>
                <AnswerBox num="B-2" ans="" corr="5 7/8 miles"/>
                <AnswerBox num="C-1" ans="" corr="5 7/8 miles"/>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },

})