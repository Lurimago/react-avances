import '../App.css';
import users from '../users.json';
import {useState} from 'react';
const Users = () => {

    var [ index, setIndex] = useState(0)

    const nextUser = () => setIndex(index+1)
    const prevUser = () => setIndex(index-1) 

    return (
        <div className="card"  style={{backgroundColor: "lightblue"}}>
        <h3>Ejercicio de la Clase</h3>     
        <h3>Usuarios</h3>
        <h3>{users[index].name.title} {users[index].name.first} {users[index].name.last}</h3>
        <img src={users[index].picture.large} alt="" style={{marginLeft: "30%"}}/>
        <button onClick={prevUser} style={{marginLeft: "20%", marginTop: "5%"}}>Previus User</button>
        <button onClick={nextUser} style={{marginLeft: "20%", marginTop: "5%"}}>Next User</button>
        
        </div>
    )
}
export default Users;
