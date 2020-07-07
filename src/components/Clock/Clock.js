import React from "react";
import classes from "./Clock.module.css";

function Clock (props) {
    return (
        <div className={classes.Clock}>
            <h1>{props.date ? props.date.toLocaleTimeString() : null}</h1>
            <p>{props.date ? props.date.toString() : null}</p>
        </div>
    )
}
export default Clock;