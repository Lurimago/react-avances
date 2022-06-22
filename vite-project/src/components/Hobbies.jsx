const Hobbies = () => {
    const hobbies = {
        name: "Música",
        movie:  "Jugar futbol",
        music:  "Gym"
      }
      const click = () => {
        alert("Clickaste Hobbies")
    }
    return(
        <div className="card" onClick={click} style={{backgroundColor: "#F08080"}}> 
        <h3>Mis Hobbies</h3>
        <ul>
          <li>{hobbies.name}</li>
          <li>{hobbies.movie}</li>
          <li>{hobbies.music}</li>
        </ul>
      </div>
    )
}
export default Hobbies;

