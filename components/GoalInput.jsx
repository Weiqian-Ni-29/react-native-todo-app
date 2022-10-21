import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';
import {useState} from 'react';
function GoalInput(props){
    const [goal, setGoal] = useState('');
    function textGoalHandler(enteredText){
        setGoal(enteredText);
    }
    return (
        <Modal visible={props.visibility} animationType="slide">
            <View style={styles.inputContainer}>
                <View style={{alignItems:"center"}}>
                    <Image style={styles.image} source = {require('../assets/images/goal.png')}/>
                    <TextInput style={styles.textInput} onChangeText={textGoalHandler} placeholder='Enter todos here' placeholderTextColor= "orange" value={goal}/>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color="orange" onPress={()=>{
                                props.addGoalHandler(goal);
                                if(goal === '') return;
                                setGoal('');
                                props.finishAddGoalHandler();
                                }} title='Add'/>
                    </View>
                    <View style={styles.button}>
                        <Button color="orange" title="cancel" onPress={()=>{
                            props.finishAddGoalHandler();
                            }}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 6,
        width: "90%",
        padding: 8,
        color:"orange",
        marginTop: 50
      },
      inputContainer:{
        flex:1,
        justifyContent: 'center',
        padding:16,
        backgroundColor:"black"
      },
      buttonContainer:{
        justifyContent:"center",
        marginTop:50,
        flexDirection:"row",
      },
      button:{
        width: "40%",
        marginHorizontal:8
      },
      image:{
        width:100,
        height:100,
        margin:20
      }
});

export default GoalInput;