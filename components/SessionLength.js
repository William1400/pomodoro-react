import React from "react";

export default function SessionLength(props) {
    
    function increaseSession() {

        if (props.sessionLength === 60) {

            return;
        }
        props.increaseSession();
    }

    function decreaseSession() {

        if (props.sessionLength === 1) {

            return;
        }
        props.decreaseSession();
    }

    return (

        <section>
            <h4>Session</h4>
            <section className="interval-container">
                <button 
                    disabled={porps.isPlaying === true ? 'disabled' : ''} 
                    onClick={decreaseSession}>Down</button>
                <p classname='interval-length'>{props.sessionLength}</p>
                <button 
                disabled={porps.isPlaying === true ? 'disabled' : ''} 
                onClick={increaseSession}>Up</button>
            </section>
        </section>
    )
}
