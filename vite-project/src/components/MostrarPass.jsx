import {useState} from 'react';
const MostrarPass = () => {

    const [ isVisible, setIsVisible] = useState(true)

    const toggleIsVisible = () => setIsVisible(!isVisible);

    return (
        <div className="card"  style={{backgroundColor: "lightblue"}}>
        <h3>Ejercicio de la Clase</h3>     
        <h3>Mostrar/Ocultar Pass</h3>
        <input type={isVisible ? "text":"password"}/>
        <button onClick={toggleIsVisible}>Mostrar/Ocultar</button>
        </div>
    )
}
export default MostrarPass;