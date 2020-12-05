// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet,ImageBackground,
   Text, View,Image,
   ScrollView,
} from 'react-native';
import Input from "./components/input/input"
import Buttons from "./components/buttons/buttons"
export default function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  // const storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value)
  //     await AsyncStorage.setItem('todo_items', jsonValue)
  //   } catch (e) {
  //     // saving error
  //     console.log(e)
  //   }
  // }

  // const clearData = async () => {
  //   try {
  //     await AsyncStorage.removeItem('todo_items')
  //     setTodos([])
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('todo_items')
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     // error reading value  
  //   }
  // }

  const changeChecked = (todoToChange) => {
    try {
      let index = todos.findIndex((todo) => todo == todoToChange)
      let newTodos = todos
      newTodos[index].checked = !newTodos[index].checked;
      setTodos([...newTodos])
    } catch (error) {
      console.log(error)
    }
  }


  const deleteTodo = (todo) => {
    try {
      let allTodo = todos;
      let newTodos = allTodo.filter((item) => item !== todo);
      setTodos([...newTodos])
    } catch (error) {

    }
  }
  const editTodo = (todoToChange) => {
    try {
      let index = todos.findIndex((todo) => todo == todoToChange)
      let newTodos = todos;
      let newText = prompt("Enter Updated Text", newTodos[index].title)
      if(newText !== null){
        newTodos[index].title = newText;
        setTodos([...newTodos])
      }
     
    } catch (error) {
      console.log(error)
    }
  }



  // useEffect(() => {
  //   async function setData() {
  //     let data = await getData();
  //     if (data !== null) {
  //       setTodos(data)
  //     }
  //   }
  //   setData()
  // }, [])


  // useEffect(() => {
  //   // do something
  //   storeData(todos)
  // }, [todos]);
  
  return (

<ScrollView>
<View style={styles.container}>

      <View style={styles.con2}>
        <Image style={{          
          width: 50,
    height: 35,
    resizeMode: 'contain',
    marginTop:"7px"
        }}
        source={require('./assets/homework1.png')}
        
        />

        
      <Text style={styles.text}>
        Todo App
      </Text>
      </View>
<View 
style={{
  width:"100%",
  height:"320%"
}}
>
<ImageBackground 
source={require("./assets/Untitled.png")}
style={{flex:1, resizeMode:"cover", justifyContent:"center"}}
>
     <View style={styles.con3}>

<View style={{
width:230,
marginTop:"30px",
alignItems:"center",
backgroundColor:"white",
padding:"1px"
}}>
<Text style={{
  fontSize:"25px",
  fontWeight:"bold"
}}>
  Todo List
</Text>
<Input addTodo={addTodo} todos={todos}  />
<Buttons changeChecked={changeChecked} editTodo={editTodo} deleteTodo={deleteTodo} todos={todos} />
       
</View>       
     </View>
     </ImageBackground>

</View>
  
   
    </View>
</ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   height:"100%",
   backgroundColor:"orange"
  },
  con2: {
    display:"flex",
    flexDirection:"row",
    backgroundColor: "orange",
    width:"100%",
    height:55,
    marginTop:10
  },
  text: {
    marginTop:5,
    fontSize: "25px",
    color: "white",
   fontWeight:"bold" 
  },
  con3: {
    flex:1,
 alignContent:"center",
 alignItems:"center"
  },
  

});