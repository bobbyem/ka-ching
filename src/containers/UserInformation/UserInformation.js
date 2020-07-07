import React from "react";
import classes from "./UserInformation.module.css";

function UserInformationInput (props) {    
    return (
        <div className={classes.UserInformationInput}>
            <form>
                <label>Name: </label>
                <input type="text" onChange={props.updateUserName} placeholder="UserName"/>
                <br/>
                <label>Base Salery Per Hour: </label>
                <input type="number" onChange={props.updateSalary} placeholder="145"/>
            </form>
        </div>
    )
}
export default UserInformationInput;