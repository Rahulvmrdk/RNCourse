import { Pressable, StyleSheet, Text, View, props, } from 'react-native'


function GoalItem(props) {
    return (
        
            <View  style={styles.goalItem}>
                <Pressable android_ripple={{color: '#dd5e5eff'}} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
                >
                    <Text style={styles.goalText}>{props.text}</Text>
                </Pressable> 
            {/* <Text  style={styles.goalText}>{itemData.item.text}</Text> */}
            {/* for ios use style */}
                
            </View>
        
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#834ec9ff',
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5,
    }
});

