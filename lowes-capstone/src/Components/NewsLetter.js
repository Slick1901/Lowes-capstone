import React, { useState } from 'react';
import  Axios  from "axios";

const NewsLetter = () => {
  const [email, setemail] = useState('');
 
  const newss = () =>{
  Axios.post('http://localhost:3001/news', {
   email: email
    }).then((response)=>{
        console.log(response)
      })
  }

return (
<form className="register-form">
<input type="text" onChange={(e)=>{
  setemail(e.target.value);
}}
  placeholder="Enter Email address"
/>
<button onClick={newss}>Sign Up</button>
</form>
 );
}

export default NewsLetter;