import React, { useState } from 'react';

function Form(props){
    const [todoText, setTodoText] = useState('');
    
    function addTodo(e){
        e.preventDefault();
        props.setTodos([...props.todos, {
            text: todoText,
            done: false
        }])
    }
    // function onInputChange(e){
    //     setTodoText(e.target.value);
    // }
    // function clickHandler(e){
    //     e.preventDefault();
    //     addTodo(todoText);
    //     setTodo('');
    //     inputFiled.current.focus();
    // }
    return (
            <form>
                <input 
                value={todoText} 
                onChange={e => setTodoText(e.target.value)} 
                type="text" /> 
                <input onClick={addTodo} type="submit" value="Add" />
            </form>
        );
}
export default Form;