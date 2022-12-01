import {Image, View, StyleSheet, ScrollView} from 'react-native'
import Question7 from '../assets/question7.png'
import AnswerBox from '../Component/AnswerBox'

export default function QnA7() {     
    return(
        
        <View style={styles.container}>
            <Image
                source={Question7}
                style={{width:350, height:220, marginVertical:5}}
            ></Image>
            <ScrollView>
                <AnswerBox num="A-1" ans="" corr="21d + (250)(0.10) less than or equal to 115"/>
                <AnswerBox num="A-2" ans="" corr="d less than or equal to 4 2/7"/>
                <AnswerBox num="A-3" ans="" corr="4 days"/>
                <AnswerBox num="B-1" ans="" corr="25"/>
                <AnswerBox num="B-2" ans="" corr='use "x" as variable'/>
                <AnswerBox num="B-3" ans="" corr="Equivalent to 21[x] + 25"/>
                <AnswerBox num="C-1" ans="" corr="25"/>
                <AnswerBox num="C-2" ans="" corr="4"/>
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