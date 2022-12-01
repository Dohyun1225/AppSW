import {Image, View, StyleSheet, ScrollView} from 'react-native'
import Question8 from '../assets/question8.png'
import AnswerBox from '../Component/AnswerBox'

export default function QnA8() {     
    return(
        
        <View style={styles.container}>
            <Image
                source={Question8}
                style={{width:350, height:220, marginVertical:5}}
            ></Image>
            <ScrollView>
                <AnswerBox num="A-1" ans="" corr="50 feet"/>
                <AnswerBox num="A-2" ans="" corr='use "x" as variable'/>
                <AnswerBox num="A-3" ans="" corr="equivalent to 2[x]"/>
                <AnswerBox num="A-4" ans="" corr="Equivalent to 2[x]+50"/>
                <AnswerBox num="B-1" ans="" corr="2w + 50 is less than or equal to 80"/>
                <AnswerBox num="B-2" ans="" corr="w is less than or equal to 15"/>
                <AnswerBox num="B-3" ans="" corr="15 feet"/>
                <AnswerBox num="C-1" ans="" corr="50 feet"/>
                <AnswerBox num="C-2" ans="" corr="30 feet"/>
                <AnswerBox num="C-3" ans="" corr="15 feet"/>
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