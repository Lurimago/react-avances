import {useState} from 'react';
const Contador = () => {

    const [ counter, setCounter] = useState(0)
    const [ text, setText] = useState("Texto Inicial")
    // let counter = 32;
    // let user = "Jordi";

    const increment = () => setCounter(counter+1)
    const decrement = () => setCounter(counter-1)
    const changeText = () => setText("Cambió el texto")
    const newText =  () => setText("Otro Texto");
    return (
        <div className="card"  style={{backgroundColor: "#90AAA0"}}>     
        <h3>Tarea - Contador - Texto</h3>
        <h3>{counter}</h3>
        <h3>{text}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={changeText}>Cambiar Texto</button>
        <button onClick={newText}>Nuevo Texto</button>
        </div>
    )
}
export default Contador;