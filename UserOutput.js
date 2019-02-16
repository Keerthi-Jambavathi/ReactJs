import React from 'react';
import './Users.css';



const UserOutput = (props)=>{
return (<div><p>Hello</p>
<p>Good morning</p>
<p className="Users">UserName: {props.username}</p>
</div>);
};

export default UserOutput;