import {Image, View, StyleSheet, ScrollView} from 'react-native'
import Question6 from '../assets/question6.png'
import AnswerBox from '../Component/AnswerBox'

export default function QnA6() {     
    return(
        
        <View style={styles.container}>
            <Image
                source={Question6}
                style={{width:350, height:190, marginVertical:5}}
            ></Image>
            <ScrollView>
                <AnswerBox num="A-1" ans="" corr="4x+24=104"/>
                <AnswerBox num="A-2" ans="" corr="20"/>
                <AnswerBox num="B-1" ans="" corr='use "w" as a variable'/>
                <AnswerBox num="B-2" ans="" corr="value: [w]+12"/>
                <AnswerBox num="B-3" ans="" corr="value: [4w+24]"/>
                <AnswerBox num="B-4" ans="" corr="20"/>
                <AnswerBox num="C-1" ans="" corr="24 inches"/>
                <AnswerBox num="C-2" ans="" corr="20 inches"/>
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