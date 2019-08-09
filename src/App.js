import React from 'react';
import Form from './component/Form';

import Filter from './component/Filter';
import './App.css';
import useTodoWithFilter from './useTodos';
import TodoList from './component/Todolist';


function App() {
 const { 
    // addTodo,
    setActiveFilter,
    todos,
    activeFilter,
    todosToDisplay,
    removeItem,
    toggleTodo,
    setTodos
 } = useTodoWithFilter();



  return (
 
      <div className="todo-app">
        <Form setTodos={setTodos} todos={todos} />
        
          <Filter setActiveFilter={setActiveFilter} />
          
      
      {todos[0] ? (
        <p>
          Showing {activeFilter} ({todosToDisplay.length}:{""})
        </p>
      ) : null}
        <TodoList todos={todosToDisplay} removeItem={removeItem}  toggleTodo={toggleTodo}/>
        </div>


      
  );
}

export default App;
