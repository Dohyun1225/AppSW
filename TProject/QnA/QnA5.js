import {Image, View, StyleSheet, ScrollView} from 'react-native'
import Question5 from '../assets/question5.png'
import AnswerBox from '../Component/AnswerBox'

export default function QnA5() {     
    return(
        
        <View style={styles.container}>
            <Image
                source={Question5}
                style={{width:350, height:300, marginVertical:5}}
            ></Image>
            <ScrollView>
                <AnswerBox num="A-1" ans="" corr="8.25m + 34.5 = 84"/>
                <AnswerBox num="A-2" ans="" corr="6 sections"/>
                <AnswerBox num="B-1" ans="" corr="84 inches"/>
                <AnswerBox num="B-2" ans="" corr="6 times"/>
                <AnswerBox num="C-1" ans="" corr="49.5 inches"/>
                <AnswerBox num="C-2" ans="" corr="6 times"/>
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