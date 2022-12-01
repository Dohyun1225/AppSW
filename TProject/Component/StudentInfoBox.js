import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function StudentInfoBox(props) {
    const number = props.num
    const studentName = props.name
    const studentScore = props.score
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.number}>{number}</Text>
                <Text style={styles.name}>{studentName}</Text>    
            </View>
            <View style={styles.subBox}>
                <Text style={styles.score}>{studentScore}/60</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    number: {
        fontSize: 30,
        fontWeight:'900',
        paddingLeft:5,
        marginRight:20
      },
    name: {
        fontSize: 25,
        fontWeight:'600',
    },
    subBox: {
        backgroundColor: '#E2E2E2',
        width: 90,
        height: 40,
        borderRadius: 30,
        justifyContent:'center',
        alignItems:'center'
    },
    score: {
        fontSize: 18,
        fontWeight: '500'
    },
    box: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center'
    }
})