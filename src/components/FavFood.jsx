const FavFood = () => {

    const favfood = {
        name: "Ceviche",
        movie: "Arroz Chaufa",
        music: "Arroz con Pato"
    }

    const click = () => {
        alert("Clickaste Comida Favorita")
    }
    return (

        <div className="card" onClick={click} style={{backgroundColor: "#FFA07A"}}> 
            <h3>Mi Comida Favorita</h3>
            <ul>
                <li>{favfood.name}</li>
                <li>{favfood.movie}</li>
                <li>{favfood.music}</li>
            </ul>
        </div>
    )
}
export default FavFood;

