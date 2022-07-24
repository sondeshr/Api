import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios  from "axios"
function App() {
  const [users, setusers] = useState([]);

useEffect(()=>{
    try {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{setusers(res.data)});
         
    } catch (error) {
        console.log(error)
        
    }
   
    },[])
    console.log(users);
  return (
    <div className="App">
      <UserList users={users}/>
    </div>
  );
}

export default App;
