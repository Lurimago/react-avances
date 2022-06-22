const AboutMe = () => {
    const aboutme = {
        name: "Lurimago",
        movie: "Suits",
        music: "Rock"
    }
    const click = () => {
        alert("Clickaste Sobre mí")
    }
    return (
        <div className="card" onClick={click} style={{backgroundColor: "#90EE90"}}>     
        <h3>Sobre mí</h3>
        <ul>
            <li>{aboutme.name}</li>
            <li>Mi Serie Favorita: {aboutme.movie}</li>
            <li>Mi Música Favorita: {aboutme.music}</li>
        </ul>
        </div>
    )
}
export default AboutMe;
