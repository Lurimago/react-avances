import '../App.css';
import {useState} from 'react';
const Bulb = () => {

    const [ isOn, setOn] = useState(true)

    const toggleIsOn = () => setOn(!isOn);

    return (
        <div className="card"  style={{backgroundColor: "lightblue"}}>
        <h3>Ejercicio de la Clase</h3>     
        <h3>Bombilla</h3>
        <div className="bulb" style={{backgroundColor: isOn ? "yellow":"grey"}}>
            </div>
        <button onClick={toggleIsOn} style={{marginLeft: "41%", marginTop: "5%"}}>On / Off</button>
        </div>
    )
}
export default Bulb;