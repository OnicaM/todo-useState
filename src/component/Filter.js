import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {ALL, DONE, TODO} from '../filters';


function Filter({setActiveFilter, match}){

    
    // const {state, dispatch} = useContext(AppContext)
    function RoutesFilter({ match }) {
        return <h3>Requested Param: {match.params.id}</h3>;
      } 
   
    function onFilterClick(filter){
        return function(e){
            setActiveFilter(filter);
        }
    }
    return (
    <Router>
    <div>
        
        <Link className="button--filter" to='/All' onClick={onFilterClick(ALL)}>All</Link>
        <Link className="button--filter" to='/DONE' onClick={onFilterClick(DONE)}>Complete</Link>
        <Link className="button--filter" to='/TODO' onClick={onFilterClick(TODO)}>In progress</Link>
      
        <Route path="/:done" component={RoutesFilter} />
       
    </div>
    </Router>
    )
    
}

export default Filter;