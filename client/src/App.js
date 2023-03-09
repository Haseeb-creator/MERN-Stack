import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [Users, setUsers] = useState()
  const [Name, setName] = useState('')
  const [Age, setAge] = useState(0)
  const [UserName, setUserName] = useState('')

  console.log(Users
  );
  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((res) => {
      setUsers(res.data.data)
    })
  }, []);

  const newUsers = async () => {
    await axios.post("http://localhost:3001/createUser", {
      "name": Name,
      "age": Age,
      "username": UserName
    }).then((res) => {
      setUsers([...Users, res.data.data])
    })
  }


  return (
    <div className="App">
      <div>
        <input type="text" placeholder='Name..' value={Name} onChange={(e) => {
          setName(e.target.value
          )
        }} />
        <input type="Number" placeholder='Age..' value={Age} onChange={(e) => {
          setAge(e.target.value)
        }} />
        <input type="text" placeholder='userName..' value={UserName} onChange={(e) => {
          setUserName(e.target.value)
        }} />
        <button onClick={newUsers}>createUser</button>
      </div>
      <div className='users'>
        {Users?.map((user) => {
          return (
            <div key={user._id} >
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>UserName: {user.username}</p>
            </div>)
        })}
      </div>

    </div>
  );
}

export default App;
