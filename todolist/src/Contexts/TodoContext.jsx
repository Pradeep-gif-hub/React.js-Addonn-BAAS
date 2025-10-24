import React,{createContext,useContext,useState,useEffect} from "react";

export const TodoContextAPI=createContext();

export const TodoContextAPIProvider=({children})=>{
  // Load todos from localStorage or default
  const [todos,setTodos]=useState(()=>{
    const stored=localStorage.getItem("todos");
    return stored?JSON.parse(stored):[{id:1,todo:"Learn Context API",isCompleted:false}];
  });

  // Save todos to localStorage whenever they change
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  const addTodo=({todo})=>{
    setTodos(prev=>[...prev,{id:Date.now(),todo,isCompleted:false}]);
  };

  const updatedTodo=({id,todo})=>{
    setTodos(prev=>prev.map(item=>item.id===id?{...item,todo}:item));
  };

  const deleteTodo=({id})=>{
    setTodos(prev=>prev.filter(item=>item.id!==id));
  };

  const toggleTodo=({id})=>{
    setTodos(prev=>prev.map(item=>item.id===id?{...item,isCompleted:!item.isCompleted}:item));
  };

  return(
    <TodoContextAPI.Provider value={{todos,addTodo,updatedTodo,deleteTodo,toggleTodo}}>
      {children}
    </TodoContextAPI.Provider>
  );
};

export const useTodoContextAPI=()=>useContext(TodoContextAPI);
