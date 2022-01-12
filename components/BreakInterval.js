import React from "react";

export default function BreakInterval(props) {
    
    function decreaseCounter() {
        
        if (props.breakInterval === 1) {

            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter() {
        
        if (props.BreakInterval === 60) {

            return;
        }
        props.increaseBreak();
    }

    return (

        <section>
            <h4>Break</h4>
            <section className='interval-container'>
                <button 
                    disabled={porps.isPlaying === true ? 'disabled' : ''} 
                    onClick={decreaseCounter}>
                        Down
                </button>
                <p classname='interval-length'>{props.breakInterval}</p>
                <button 
                    disabled={porps.isPlaying === true ? 'disabled' : ''} 
                    onClick={increaseCounter}>
                        Up
                </button>
            </section>
        </section>
    );
}
