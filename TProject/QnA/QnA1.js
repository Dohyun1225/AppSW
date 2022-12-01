import {Image, View, StyleSheet} from 'react-native'
import Question1 from '../assets/question1.png'
import AnswerBox from '../Component/AnswerBox'


export default function QnA1() {     
    return(
        
        <View style={styles.container}>
            <Image
                source={Question1}
                style={{width:350, height:220, marginVertical:5}}
            ></Image>
            <AnswerBox num="A-1" ans="" corr="85.75=3.25+7.5*p"/>
            <AnswerBox num="A-2" ans="" corr="11"/>
            <AnswerBox num="B-1" ans="" corr="11"/>
            <AnswerBox num="C-1" ans="" corr="11"/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
})