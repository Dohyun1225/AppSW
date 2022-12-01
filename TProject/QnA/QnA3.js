import {Image, View, StyleSheet, ScrollView} from 'react-native'
import Question3 from '../assets/question3.png'
import AnswerBox from '../Component/AnswerBox'

export default function QnA3() {     
    return(
        
        <View style={styles.container}>
            <Image
                source={Question3}
                style={{width:350, height:200, marginVertical:5}}
            ></Image>
            <ScrollView>
                <AnswerBox num="A-1" ans="" corr="64.8 yards"/>                
                <AnswerBox num="A-2" ans="" corr="10.8 yards"/>
                <AnswerBox num="B-1" ans="" corr="6m+19.7 = 84.5"/>
                <AnswerBox num="B-2" ans="" corr="10.8 yards"/>
                <AnswerBox num="C-1" ans="" corr="19.7 yards"/>
                <AnswerBox num="C-2" ans="" corr="64.8 yards"/>
                <AnswerBox num="C-3" ans="" corr="10.8 yards"/>
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