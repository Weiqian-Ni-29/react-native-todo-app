import { StyleSheet, View, FlatList, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function startAddGoalHandler(){
    setModalVisible(true);
  }

  function finishAddGoalHandler(){
    setModalVisible(false);
  }

  function addGoalHandler(goal){
    if(goal === ''){return;}
    setGoalList((prev)=>{
      return [...prev, {text: goal, key: Math.random().toString()}];
    });
  }
  function deleteGoalHandler(itemToBeDeleted){
    setGoalList((prev)=>{
      return prev.filter((prevItems)=>{
        return prevItems.key !== itemToBeDeleted.key;
      });
    });
  }
  return (
    <>
    <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title="Tap to add" color="orange" onPress={startAddGoalHandler}/>
        {<GoalInput addGoalHandler = {addGoalHandler} visibility = {modalVisible} finishAddGoalHandler = {finishAddGoalHandler}/>}
        <View style={styles.goalList}>
          <FlatList data={goalList} renderItem={(itemData)=>{
            return (<GoalItem itemData = {itemData} deleteGoalHandler = {deleteGoalHandler}/>);
          }}/>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  appContainer:{
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:"black"
  },
  goalList:{
    flex:5,
  },
});
