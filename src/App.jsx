
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  // console.log(users);





  const handleSubmit = e =>{
    e.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email  = form .email.value;
    const user = {name, email}
    console.log(user)
    e.target.reset();
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(user)

    })
    .then(res =>res.json())
    .then(data => {
      console.log(data)
      const newUsers = [...users.data]
      setUsers(newUsers)
      form.reset();
    })

    // alert(' message send successfully')
  }


  return (
    <>
 
      <h1>Users Management</h1>
      <h1>Numbers of users: {users.length}</h1>
      <form onSubmit={handleSubmit}>

        <input type="text" name="name" id="" /> <br />
        <input type="email" name='email' />  <br />
        <input type="submit"  value= 'Add user'/>
      </form>
      <div>
        {
          users.map(user => <p key={user.id} >{user.id} : {user.name}: {user.email}</p>)
        } 
      </div>
     
  
    </>
  )
}

export default App
