import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image,} from 'react-native'

function GoalInput(props) {
    const [enteredGoalText,setEnteredGoalText] = useState('');

    const goalInputHnadler = (e) => {
        // console.log(e.nativeEvent.text);
        setEnteredGoalText(e.nativeEvent.text)
    }

    
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide' style={styles.modelStyle} >
            <View style={styles.inputContainer}>
                <Image style={styles.image} 
                source={require('../assets/images/goal.png')}
                
                />
                <TextInput style={styles.textInputStyle} 
                  placeholder='Your course goal!'
                  onChange={goalInputHnadler}
                  value={enteredGoalText}
                />
                <View style={styles.buttoncontainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0'/>
                    </View>
                    <View style={styles.button}>
                        <Button  title='Cancel' onPress={props.onCancel} color='#f31282'/>
                    </View>
                </View>
            </View>
        </Modal>
        
    )

};


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 16,
        backgroundColor: '#311b6b'
        
  },
    textInputStyle: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        width: '100%',
        padding:8,
  },
  buttoncontainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: '30%',
    marginHorizontal: 8,

  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  modelStyle: {
    borderRadius:60,
  }
});
