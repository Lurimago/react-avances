const FreeTime = () => {

    const freetime = {
        name: "Comer",
        movie:  "Salir con mis amigos",
        music:  "Jugar futbol"
      }
      const click = () => {
        alert("Clickaste Tiempos Libres")
    }
    return(
        <div className="card" onClick={click} style={{backgroundColor: "#ADD8E6"}}>  
         <h3>En mi tiempo libre me gusta</h3>
        <ul>
          <li>{freetime.name}</li>
          <li>{freetime.movie}</li>
          <li>{freetime.music}</li>
        </ul>
      </div>
    )
}
export default FreeTime;