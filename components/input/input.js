import React, { useState } from 'react'
import {TextInput,View,TouchableOpacity,Text} from "react-native"
export default function Input(props) {
    const [todoText, setTodoText] = useState("");
    const handleTodo = () => {
      const { addTodo, todos } = props;
      if (todoText !== "") {
        let newTodo = {
          id: Math.floor(Math.random() * 100000000),
          title: todoText,
          checked: false
        }
        addTodo(newTodo)
        setTodoText("");
      } else {
        alert("Please write some ")
      }
  
      // this.firstTextInput.focus();
    }
    return (
<View>
<TextInput 
    style={{padding:"5px",
     width:"210px",
     textAlign:"center",
     borderWidth:1,
     borderColor:"white",
     borderBottomColor:"orange",
     borderBottomWidth:1,
        
  }}
    placeholder={"Enter your name"} 
    onChange={(e) => setTodoText(e.nativeEvent.text)}
    onSubmitEditing={() => handleTodo()}
    value={todoText}
    blurOnSubmit={false}

     /> 
         <View style={{alignItems:"center"}}>
          <TouchableOpacity style={{backgroundColor:"orange",
         padding:10,margin:5,width:100}}
         onPress={() => handleTodo()}         
         >
            <Text style={{color:"white",fontWeight:"bold"}}> ADD TODO</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{backgroundColor:"orange",
         padding:"10px",margin:"5px"}}
         onPress={() => props.clearTodo()}
         >
            <Text style={{color:"white"}}>DELETE ALL</Text>
          </TouchableOpacity> */}
          </View>
</View>
       
       
    )
}
