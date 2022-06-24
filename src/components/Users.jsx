import '../App.css';
import users from '../users.json';
import {useState} from 'react';
const Users = () => {

    const colors = ["#845ec2", "#d65db1", "#ff6f91", "#ff9671", "#ffc75f", "#f9f871"]

    const random = Math.floor(Math.random() * users.length);
    const [ index, setIndex] = useState(random)
   
    const changeUser = () => {
        const random = Math.floor(Math.random() * users.length);
        setIndex(random)}
    const randomColorIndex =  Math.floor(Math.random() * colors.length);
    const color = colors[randomColorIndex]
    // const prevUser = () => setIndex(index-1) 
    document.body.style=`background: ${color}`
    return (
        <div className="card"  style={{color: color}}>
    
        <h3>{users[index].name.title} {users[index].name.first} {users[index].name.last}</h3>
        <img src={users[index].picture.large} alt="" style={{marginLeft: "30%"}}/>
        <ul>
                <li><i class="fa-solid fa-envelope"></i>{users[index].email}</li>
                <li><i class="fa-solid fa-phone"></i>{users[index].phone}</li>
                <li><i class="fa-solid fa-location-dot"></i>{users[index].location.country},{users[index].location.city}, {users[index].location.state}</li>
            </ul>
        <button onClick={changeUser} style={{backgroundColor: color}} className="shuffle"> <i class="fa-solid fa-shuffle"></i></button>
        {/* <button onClick={nextUser} style={{marginLeft: "20%", marginTop: "5%"}}>Next User</button> */}
        
        </div>
    )
}
export default Users;
