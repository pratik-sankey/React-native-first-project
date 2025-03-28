import { SafeAreaView, StyleSheet, Text, useColorScheme } from "react-native";

const LightDarkTheme = () =>{
    const theme = useColorScheme();
    const isDarkMode = theme ==='dark';

    const bgColor = isDarkMode ? 'black' : 'white';
    const txtColor =isDarkMode ? 'white' : 'black';
    return (
        <>
        <SafeAreaView style={[styles.container , {backgroundColor:bgColor}]}>

            <Text style={[styles.text,{color:txtColor}]}>This will change by dark/light mode</Text>
        </SafeAreaView>
        
        </>


    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'black',
    },
    text:{
        fontSize:34,
        color:'white',
        fontWeight:'bold',
    }
})
export default LightDarkTheme;

