import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Buttons(props) {
 
    return (
        <ScrollView>
            {
                props.todos.map((todo) => (
                    <View style={styles.itemCont} key={todo.id}>
                        {/* <CheckBox
                            value={todo.checked}
                            onValueChange={() => props.changeChecked(todo)}
                            tintColors={{ true: '#4FAFD1' }}
                            style={{ marginLeft: 10,  }}
                        /> */}
                        
                        <View style={{width:150}}>
                        <Text style={styles.itemText}>{todo.title}</Text>
                        </View>
                        
                        <Icon
                            name='pencil'
                            size={24}
                            color='#4FAFD1'
                            
                            onClick={() => props.editTodo(todo)}
                        />
                        <Icon
                            name='close'
                            size={24}
                            color='#f00'
                            
                            onClick={() => props.deleteTodo(todo)}
                        />
                    </View>
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    itemCont: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffff",
        marginBottom: 10,
        
    },
    itemText: {
        flex: 1,
        fontSize: 20,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor:"orange"
      
    }
})