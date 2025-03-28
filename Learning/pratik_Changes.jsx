import { useState } from "react";
import { View, Image, Text, SectionList,
     SectionListComponent, Button, TouchableOpacity, 
     Alert, Pressable, 
     SafeAreaView,
     StyleSheet,
     useColorScheme} from "react-native"

const MyChanges = () => {

    const theme = useColorScheme();
    console.log("theme is",theme);
    const [data,setData]  = useState();
    const styles = {
        container1:{
            width:68,
            height:98,
            color:"blue",
            backgroundColor:"orange"
        }
    }
    const handleButtonPress = () =>{
        setData(3454)

        Alert.alert("Button pressed")
    }
    return <>
        <View style={{  backgroundColor:"#dadada"}}>
            <Text>Hello baccho </Text>
            <Text >This is my starting app </Text>

            <Image style={{ height: 150, width: 150 }} source={{ uri: "https://images.unsplash.com/photo-1741850826386-9cb8e5543c73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" }} />

            {/* Three times of buttons */}
            {/* type 1 */}
            <Button title="Press me "></Button>
            {/* type 2 */}
            <TouchableOpacity style={{ padding: 12, backgroundColor: "yellow", height: 50, width: 160 }} onPress={handleButtonPress}>
                <Text>This is new button</Text>
            </TouchableOpacity>

            <Pressable style={{height:60 , width:100 , backgroundColor:"green",fontSize:15 , fontWeight:"bold"}} onPress={()=> Alert.alert("Pressable button clicked")}>
                <Text style={{color:"blue"}}>This is Pressable button</Text>
            </Pressable>
            {/* Passing css as js object  */}
            <Pressable style={styles.container1}>
                <Text>I m with good css</Text>
            </Pressable>
        </View>
        {/* We have to use safeAreaView instead of view for ios apps due to their mobile shape at top */}
    <SafeAreaView style={styleswithSheet.container}>
        <Text style={{}}>This is Area is of SafeAreaView , you are safe here (some emoji)</Text>
   
        <Text style={styleswithSheet.text}>This has styles from stylesheet</Text>

        <Pressable style={styleswithSheet.button}>
            <Text style={styleswithSheet.btnText}>This has sheet button css</Text>
        </Pressable>
    </SafeAreaView>

{/* <button onClick={()=>handleclick}></button>
<button onClick={handleclick}></button> */}

    </>;
};
// the stylesheet only renders once ,but js object runs everytime whenever the page changes 
const styleswithSheet = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        gap:10
    },

    text:{
        color:'black',
        fontSize:15,
        fontWeight: 'bold',
    },
    button:{  
        borderRadius:45,
        borderWidth:5,
        color:'yellow',
        backgroundColor:'red',
        alignItems:'center',
    },
    btnText:{
        color:'white',
        fontWeight:'398',
        paddingVertical:5,
        paddingHorizontal:5,
        fontSize:18,
        // justifyContent:'space-evenly',
    },

});

export default MyChanges;
