import {View, Text, StyleSheet} from 'react-native'

export default function Ranking(props) {
    const studentName1 = props.name1
    const studentName2 = props.name2
    const studentName3 = props.name3
    return(
        <View style={styles.box}>
            <Text style={styles.subTitle}>Ranking</Text>
            <View style={styles.boxs}>
                <View style={styles.box1}>
                    <Text style={styles.name1}>{studentName1}</Text>
                    <Text style={styles.number}>1</Text>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.name2}>{studentName2}</Text>
                    <Text style={styles.number}>2</Text>
                </View>
                <View style={styles.box3}>
                    <Text style={styles.name3}>{studentName3}</Text>
                    <Text style={styles.number}>3</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        borderWidth:1,
        width: 340,
        height: 230,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        marginTop: 10
      },
    subTitle: {
        fontWeight: '600',
        fontSize: 18,
        color: '#363636'
    },
    box1: {
        width: 70,
        height: 80,
        backgroundColor: '#6C4BC7',
        marginRight:10,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    box2: {
        width: 70,
        height: 100,
        backgroundColor: '#6C4BC7',
        marginRight:10,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    box3: {
        width: 70,
        height: 60,
        backgroundColor: '#6C4BC7',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    boxs: {
        flexDirection:'row',
        padding:55,
        alignItems:'flex-end'
    },
    number: {
        fontSize: 30,
        fontWeight: '500',
        color:'white',
        marginBottom: 7
    },
    name1: {
        top:-40,
        fontWeight:'500'
    },
    name2: {
        top:-60,
        fontWeight:'500'
    },
    name3: {
        top:-20,
        fontWeight:'500'
    }
})