import React, { useState, useEffect } from 'react';
import DataService  from '../../Services/DataService';
import {Constants} from '../../Entities/Constants';
import CounterList from './CounterList';

function Counter() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [props, setItems] = useState([]); 
    useEffect(() => {
        DataService.GetGenericCall(setItems,setError,setIsLoaded,Constants.Section_Counter);
        console.log(props);
      }, []);
  

    return (
        <div class="section-counter paralax-mf bg-image" style={{backgroundImage:"url("+props.bg+")" }}>
            <div class="overlay-mf"></div>
            <div class="container position-relative">
                <div class="row">
                    <CounterList counterList = {props?.counterList} />
                </div>
            </div>
        </div>
    );
}

export default Counter;