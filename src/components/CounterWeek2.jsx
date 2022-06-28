import {useState, useEffect, useInsertionEffect} from 'react';
const CounterWeek2 = () => {

    const [ counter, setCounter] = useState(0)
    const [ isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        console.log("Dentro del useEffect");
        const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];
        const randomColor = Math.floor(Math.random()* colors.length)
        document.body.style = `background: ${colors[randomColor]}`
    }, [isVisible])
    console.log("Afuera del useEffect")


    //const increment = () => setCounter(counter+1)
    //const decrement = () => setCounter(counter-1)

    return (
        <div className="card">     
        <h3>Week 2</h3>
        <h3>Contador and Pass</h3>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter+1)}>Increment</button>
        <button onClick={() => setCounter(counter-1)}>Decrement</button>
        <hr/>
        <input type={isVisible ? "text":"password"}/>
        <button onClick={() => setIsVisible(!isVisible)}>Mostrar/Ocultar</button>
        </div>
    )
}
export default CounterWeek2;