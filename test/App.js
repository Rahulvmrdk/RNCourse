import { useState } from 'react';
import { 
  StyleSheet, 
  View,
  FlatList,
  Button, 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] =  useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);


  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }
  
  const endModalVisible = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (enteredGoalText) => {
    // console.log(enteredGoalText);
    // setCourseGoals([...courseGoals, enteredGoalText])-------------- Not a good way
    setCourseGoals((prev)=> [...prev, 
      {text: enteredGoalText, id:Math.random().toString()},]) ;// Best way with call back function
    endModalVisible();
    
  }

  const deleteGoalsHandler = (id) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal)=> goal.id != id)
    });
    
  }
  

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler}/>
      {/* ----------------Input Area---------------- */}
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endModalVisible}/>
      

      {/* -------------------List Area------------------- */}
      
      <View style={styles.goalsContainer}>
        {/*----------------- Scrollable view -------------*/}
        {/* <ScrollView>
        {courseGoals.map((goal,index) => (
          // IOS does not support rounded corner in 'Text', so we applied the style in 'View'
          <View key={index} style={styles.goalItem}> 
            <Text  style={styles.goalText}>{goal}</Text>
          </View> 
          ))}
      </ScrollView> */}
      {/*------------------ FlatList --------------------*/}
      
      <FlatList data={courseGoals} renderItem={(itemData)=>{
        
        return (
          // ------------component goalItem----------------
          <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalsHandler}/>
        )
      }}
      keyExtractor={(item,index)=> {
        return item.id;
      }}
      />
        
        
      </View>
      
      
    </View>
    </>
    
  );
}

//------------------Stylesheet Object-------------------
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    paddingTop:70,
    
  },
  
  goalsContainer: {
    flex: 5,
  },
  
  
  
});
