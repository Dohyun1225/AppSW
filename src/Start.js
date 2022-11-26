import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity } from 'react-native';
    
export default function StartScreen(props) {
    return (
        <View style={styles.container}>
            <Image 
            source={require('../assets/Logo.png')}
            style={styles.appLogo}/>
            <Text style={styles.startText}>PRESS THE BUTTON TO GET STARTED!</Text>
            <TouchableOpacity onPress={()=> {props.navigation.push("Main")}}>
            <Image 
            source={require('../assets/GetstartButton.png')}
            style={styles.getstart}/>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
      },
    appLogo: {
        width:180,
        height:180},
    getstart: {
        width:130,
        height:130},
    startText: {
        fontSize: 25,
        color:'#595959',},
});