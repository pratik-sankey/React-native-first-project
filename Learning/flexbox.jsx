import { StyleSheet, View } from "react-native"

const flexBoxDemo = () =>{


    return (


        <>
        <View style={styles.container}>
            <View style={styles.box1}>

            </View>
            <View style={styles.box2}>

            </View>
            <View style={styles.box3}>

            </View>
        </View>
        
        
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        borderRightColor:'black'
    },
    box1:{
        flex:2,
        backgroundColor:'red'
    },
    box2:{
        flex:1,
        backgroundColor:'gree'
    },
    box3:{
        flex:5,
        backgroundColor:'yellow'
    },
})

export default flexBoxDemo;