import React from 'react';
import './Users.css';
const UserInput = (props)=>{
return <div className = "Users">
    Enter UserName: <input type="text" onChange={props.click} value = {props.currentName}/>
</div>
};

export default UserInput;