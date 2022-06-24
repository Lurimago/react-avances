import {useState} from 'react';
const Bulb = () => {

    const [ isVisible, setisVisible] = useState(true);


    const toggleisVisible = () => setisVisible(!isVisible);

    return (
        <div className="card">     
        <h3>Condicional Ternario</h3>
        <input type={isVisible?"text" : "password"}/>
        <button onClick={toggleisVisible}Increment>
            Mostrar/Ocultar contraseña
        </button>

        </div>
    )
}
export default Bulb;