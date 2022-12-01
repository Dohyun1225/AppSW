import {Image, View, StyleSheet, ScrollView} from 'react-native'
import Question4 from '../assets/question4.png'
import AnswerBox from '../Component/AnswerBox'

export default function QnA4() {     
    return(
        
        <View style={styles.container}>
            <Image
                source={Question4}
                style={{width:350, height:220, marginVertical:5}}
            ></Image>
            <ScrollView>
                <AnswerBox num="A-1" ans="" corr=""/>  
                <AnswerBox num="A-2" ans="" corr="use x as variable"/>
                <AnswerBox num="A-3" ans="" corr="Karla: 2x; Elena: x+30"/>
                <AnswerBox num="A-4" ans="" corr="4x+30"/>
                <AnswerBox num="A-5" ans="" corr="Faye"/>
                <AnswerBox num="B-1" ans="" corr="4e + 30 = 114"/>
                <AnswerBox num="B-2" ans="" corr="21"/>
                <AnswerBox num="B-3" ans="" corr="Karla: 42; Faye: 51"/>
                <AnswerBox num="B-4" ans="" corr="Faye"/>
                <AnswerBox num="C-1" ans="" corr="84"/>
                <AnswerBox num="C-2" ans="" corr="21"/>
                <AnswerBox num="C-3" ans="" corr="Karla: 42; Faye: 51"/>
                <AnswerBox num="C-4" ans="" corr="Faye"/>
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