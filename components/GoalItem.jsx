import {StyleSheet, View, Text, Pressable} from 'react-native';
function GoalItem(props){
    return (
        <Pressable android_ripple={{color:"red"}} onPress={()=>{props.deleteGoalHandler(props.itemData.item);}}>
            <View style={styles.goalItem}>
                <Text style={{color:"white", fontSize: 18, fontFamily: "monospace"}}>{props.itemData.item.text}</Text>
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    goalItem:{
        marginVertical: 10,
        borderBottomWidth: 2,
        borderTopWidth:2,
        paddingVertical: 20,
        backgroundColor: "orange",
        borderRadius: 8,
        borderColor:"lightgreen",
        alignItems:'center',
      },
});
export default GoalItem;