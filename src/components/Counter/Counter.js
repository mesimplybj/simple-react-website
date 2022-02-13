import React from 'react';
import CounterList from './CounterList';
function Counter({props}) {
    return (
        <div class="section-counter paralax-mf bg-image" style={{backgroundImage:"url("+props.BG+")" }}>
            <div class="overlay-mf"></div>
            <div class="container position-relative">
                <div class="row">
                    <CounterList counterList = {props.CounterList} />
                </div>
            </div>
        </div>
    );
}

export default Counter;