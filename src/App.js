import UserForm from "./Components/Users/UserForm"
import { useState } from "react";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([])
  
  const userSubmitHandler = user =>{
    setUsers(prevState => [user, ...prevState])
  }

  console.log(users)
  return (
    <div>
      <UserForm onUserSubmit = {userSubmitHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
