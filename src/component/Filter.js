import React, {useContext, useReducer} from 'react';

import {ALL, DONE, TODO} from '../filters';
import AppContext from '../AppContext';



function Filter({setActiveFilter}){

    
    const {state, dispatch} = useContext(AppContext)
    
   
    function onFilterClick(filter){
        return function(e){
            e.preventDefault();
            setActiveFilter(filter);
        }
    }
    return (
    <div>
        <a className="button--filter" href="/none" onClick={onFilterClick(ALL)}>All</a>
        <a className="button--filter" href="/none" onClick={onFilterClick(DONE)}>Complete</a>
        <a className="button--filter" href="/none" onClick={onFilterClick(TODO)}>In progress</a>
        
        <button onClick={() => dispatch({type:'test'})}>click</button>
        
        {state}
    </div>

    )
    
}

export default Filter;